"use client";
import { useState } from "react";
import { createFFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

export default function ConvertM3U8({ m3u8Url, title }) {
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);

  const convertM3u8ToMp4 = async () => {
    setConverting(true);
    if (!ffmpeg.isLoaded()) await ffmpeg.load();

    try {
      // 1️⃣ Fetch .m3u8 file
      const playlistText = await fetch(m3u8Url).then((r) => r.text());
      const baseUrl = m3u8Url.substring(0, m3u8Url.lastIndexOf("/") + 1);
      const segmentUrls = playlistText
        .split("\n")
        .filter((line) => line && !line.startsWith("#"))
        .map((line) => (line.startsWith("http") ? line : baseUrl + line));

      if (segmentUrls.length === 0) {
        alert("No playable video segments found.");
        setConverting(false);
        return;
      }

      console.log(`Found ${segmentUrls.length} segments`);

      // 2️⃣ Download and merge all .ts segments
      let combined = new Uint8Array();
      for (let i = 0; i < segmentUrls.length; i++) {
        const segment = await fetch(segmentUrls[i]).then((r) => r.arrayBuffer());
        const temp = new Uint8Array(segment);
        const newCombined = new Uint8Array(combined.length + temp.length);
        newCombined.set(combined);
        newCombined.set(temp, combined.length);
        combined = newCombined;
        setProgress(Math.round(((i + 1) / segmentUrls.length) * 50)); // first 50%
      }

      // 3️⃣ Write merged TS file to ffmpeg FS
      ffmpeg.FS("writeFile", "input.ts", combined);

      // 4️⃣ Convert to MP4
      ffmpeg.setProgress(({ ratio }) =>
        setProgress(50 + Math.round(ratio * 50))
      );
      await ffmpeg.run("-i", "input.ts", "-c", "copy", "output.mp4");

      // 5️⃣ Read converted file
      const data = ffmpeg.FS("readFile", "output.mp4");
      const mp4Blob = new Blob([data.buffer], { type: "video/mp4" });

      // 6️⃣ Download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(mp4Blob);
      link.download = `${title || "video"}.mp4`;
      link.click();

      alert("✅ Conversion complete!");
    } catch (err) {
      console.error("Conversion error:", err);
      alert("❌ Conversion failed. Check console for details.");
    }

    setConverting(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4 border">
      <h3 className="font-semibold mb-2">Convert HLS (.m3u8) to MP4</h3>
      <button
        onClick={convertM3u8ToMp4}
        disabled={converting}
        className={`${
          converting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        } text-white px-4 py-2 rounded transition`}
      >
        {converting ? `Converting... ${progress}%` : "Convert to MP4"}
      </button>
      {converting && (
        <div className="mt-2 text-sm text-gray-600">
          Progress: {progress}%
        </div>
      )}
    </div>
  );
}
