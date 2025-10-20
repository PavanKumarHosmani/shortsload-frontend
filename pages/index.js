"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

// ✅ Load FFmpeg locally (avoids CORS issues)
const ffmpeg = createFFmpeg({
  log: true,
  corePath: "/ffmpeg/ffmpeg-core.js", // served from public/ffmpeg/
});

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [converting, setConverting] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("");

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL


  // 🎥 Fetch video info
  const handleFetch = async () => {
    setError("");
    setVideo(null);
    setSelectedQuality("");
    if (!url) return setError("Please enter a YouTube Shorts URL");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/getinfo?url=${encodeURIComponent(url)}`);
      const text = await res.text();

      if (text.startsWith("<")) {
        throw new Error("Invalid API response — backend might not be reachable.");
      }

      const data = JSON.parse(text);
      if (data.error) throw new Error(data.error);

      setVideo(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to fetch video info");
    } finally {
      setLoading(false);
    }
  };

  // 🎧 Merge video + audio using FFmpeg
  const handleMerge = async (videoUrl, audioUrl, title) => {
    setConverting(true);
    setProgress(0);

    try {
      if (!ffmpeg.isLoaded()) await ffmpeg.load();
      const videoData = await fetchFile(videoUrl);
      const audioData = await fetchFile(audioUrl);

      ffmpeg.FS("writeFile", "video.mp4", videoData);
      ffmpeg.FS("writeFile", "audio.m4a", audioData);
      ffmpeg.setProgress(({ ratio }) => setProgress(Math.round(ratio * 100)));

      await ffmpeg.run(
        "-i",
        "video.mp4",
        "-i",
        "audio.m4a",
        "-c:v",
        "copy",
        "-c:a",
        "aac",
        "-shortest",
        "output.mp4"
      );

      const data = ffmpeg.FS("readFile", "output.mp4");
      const blob = new Blob([data.buffer], { type: "video/mp4" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${title || "video"}.mp4`;
      link.click();
    } catch (err) {
      console.error(err);
      alert("❌ Merge failed");
    }

    setConverting(false);
  };

  // 🎯 Handle download
  const handleDownload = async () => {
    if (!selectedQuality) return alert("Select a quality first!");
    const format = video.formats.find((f) => f.quality === selectedQuality);
    if (!format) return alert("Invalid quality");

    if (format.hasAudio && format.hasVideo) {
      const link = document.createElement("a");
      link.href = format.url;
      link.download = `${video.title || "video"}_${selectedQuality}.mp4`;
      link.click();
    } else if (!format.hasAudio && format.hasVideo) {
      const audio = video.formats.find((f) => f.hasAudio && !f.hasVideo);
      if (!audio) return alert("No audio found to merge");
      handleMerge(format.url, audio.url, video.title);
    } else {
      alert("Unsupported format type");
    }
  };

  // ✅ SEO Metadata
  const pageTitle = video
    ? `${video.title} — Download YouTube Short | ShortsLoad`
    : "ShortsLoad — Free YouTube Shorts Downloader (360p/720p/1080p)";
  const pageDescription = video
    ? `Download "${video.title}" from YouTube Shorts in MP4 format instantly. Choose 360p, 720p, or 1080p with audio.`
    : "ShortsLoad lets you download YouTube Shorts videos in MP4 format instantly — free, safe, and no watermark.";

  const pageImage = video?.thumbnail || "https://shortsload.com/og-image.jpg";
  const pageUrl = video
    ? `https://shortsload.com/?video=${encodeURIComponent(video.title)}`
    : "https://shortsload.com/";

  return (
    <>
      <Head>
        <title>YouTube Shorts Downloader: Download YouTube Shorts Video</title>
        <meta name="description" content="With our YouTube Shorts Downloader, you can download your favorite YouTube Shorts videos in the highest available quality as MP4 (video) files for free." />
        <meta
          name="keywords"
          content="YouTube Shorts Downloader, ShortsLoad, download YouTube Shorts, Shorts MP4 downloader, Shorts video download, SaveTube alternative"
        />
        <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="YouTube Shorts Downloader: Download YouTube Shorts Video" />
        <meta
          property="og:description"
          content="Free and fast tool to download YouTube Shorts videos in HD MP4 format — 360p, 720p, 1080p, with audio and no watermark."
        />
        <meta property="og:image" content="https://shortsload.com/og-image.jpg" />
        <meta property="og:url" content="https://shortsload.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🎬 ShortsLoad — YouTube Shorts Downloader
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Paste a YouTube Shorts link below and download it instantly in MP4
            (360p, 720p, 1080p) — free, fast, and no watermark.
          </p>
        </header>

        {/* INPUT */}
        <div className="bg-white shadow p-6 rounded-xl w-full max-w-xl mb-8">
          <input
            type="text"
            placeholder="Paste YouTube Shorts link..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            onClick={handleFetch}
            disabled={loading}
            className={`w-full mt-4 py-3 rounded-lg text-white font-semibold transition ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "🔄 Fetching Formats..." : "Get Video Info"}
          </button>
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </div>

        {/* FETCHING */}
        {loading && (
          <div className="text-gray-500 animate-pulse mb-6">
            ⏳ Fetching formats from YouTube...
          </div>
        )}

        {/* VIDEO CARD */}
        {video && !loading && (
          <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-xl mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">{video.title}</h2>
            <img
              src={video.thumbnail}
              alt={`${video.title} thumbnail`}
              className="w-full rounded-lg mb-4"
            />
            <select
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
            >
              <option value="">Select Quality</option>
              {video.formats
                .filter((f) => f.hasVideo)
                .map((f, i) => (
                  <option key={i} value={f.quality}>
                    {f.quality} {f.hasAudio ? "🎧 With Audio" : "🔇 No Audio"}
                  </option>
                ))}
            </select>
            <button
              onClick={handleDownload}
              disabled={!selectedQuality || converting}
              className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                !selectedQuality || converting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {converting
                ? `Processing... ${progress}%`
                : selectedQuality
                ? "⬇️ Download MP4"
                : "Select a quality first"}
            </button>
          </div>
        )}

{/* ✅ EXTENDED SEO CONTENT SECTION */}
<section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mb-12">
  <h2 className="text-2xl font-bold">📥 Free YouTube Shorts Downloader — ShortsLoad</h2>
  <p>
    <strong>ShortsLoad</strong> is a powerful and completely free online YouTube Shorts Downloader that lets you save your favorite Shorts in MP4 format directly to your phone, laptop, or tablet. Designed for simplicity and speed, it helps millions of users download Shorts videos in high quality — from 360p all the way up to full 1080p HD — without any watermark, ads, or complicated steps.
  </p>
  <p>
    Whether you’re a student collecting educational Shorts, a content creator analyzing trending videos, or just someone who wants to keep funny and motivational clips for offline viewing, ShortsLoad makes it effortless. Our downloader processes your request instantly and provides clean download links directly from YouTube’s public CDN servers — ensuring maximum security and lightning-fast speeds.
  </p>

  <h3 className="text-xl font-semibold mt-4">⚡ How ShortsLoad Works</h3>
  <p>
    ShortsLoad uses the latest <strong>yt-dlp</strong> and <strong>FFmpeg</strong> technologies to extract video and audio streams safely. When you paste a YouTube Shorts URL, our lightweight backend fetches the available qualities and sends them back to your browser. You can then select the preferred resolution, and the tool either downloads the combined video instantly or merges the video and audio locally in your browser — without uploading anything to our server. This means your data and privacy are always protected.
  </p>
  <p>
    The entire process happens securely inside your browser window, so no external data transfer or cloud storage is involved. Even large HD videos can be processed quickly, thanks to optimized compression and memory management.
  </p>

  <h3 className="text-xl font-semibold mt-4">🎯 Why Use ShortsLoad Instead of Other Downloaders?</h3>
  <ul className="list-disc ml-6 space-y-1">
    <li>✅ 100% free to use — no hidden charges or premium restrictions.</li>
    <li>✅ Works on Android, iPhone, Windows, macOS, and Linux browsers.</li>
    <li>✅ No software installation required — everything runs in the browser.</li>
    <li>✅ HD video quality options like 360p, 720p, and 1080p MP4.</li>
    <li>✅ Built-in <strong>FFmpeg</strong> ensures perfect audio-video sync.</li>
    <li>✅ Privacy-first approach — no tracking, no user data storage.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">💡 How to Download YouTube Shorts Using ShortsLoad</h3>
  <ol className="list-decimal ml-6 space-y-1">
    <li>Copy the link of the YouTube Short you want to save.</li>
    <li>Paste the link into the input box above on this page.</li>
    <li>Click the <strong>Get Video Info</strong> button to fetch available formats.</li>
    <li>Select your desired resolution (360p, 720p, or 1080p).</li>
    <li>Click <strong>Download MP4</strong> and the video will save instantly to your device.</li>
  </ol>

  <p>
    The process is as easy as it sounds — no sign-up, no redirects, and no watermark. ShortsLoad focuses purely on giving you a clean, fast, and reliable downloading experience every single time.
  </p>

  <h3 className="text-xl font-semibold mt-4">🌍 Features and Compatibility</h3>
  <p>
    ShortsLoad works perfectly across all modern browsers, including Chrome, Edge, Firefox, Safari, and Opera. It supports both mobile and desktop devices. Since it’s built with the latest version of React and optimized for Next.js performance, the interface loads quickly and feels smooth even on low-end devices. The site is fully responsive, ensuring an equally great experience on phones and wide monitors.
  </p>

  <h3 className="text-xl font-semibold mt-4">🔒 Safe, Legal, and Transparent</h3>
  <p>
    ShortsLoad does not host or store any copyrighted material on its servers. All YouTube Shorts you download are fetched directly from YouTube’s publicly accessible CDN links. Our tool is intended for personal and educational use only. We strongly encourage users to respect copyright laws and use downloaded videos responsibly.
  </p>

  <h3 className="text-xl font-semibold mt-4">🏆 Why People Love ShortsLoad</h3>
  <p>
    Thousands of users worldwide trust ShortsLoad as their go-to <strong>YouTube Shorts Downloader</strong> because of its simplicity, clean design, and reliability. It doesn’t bombard you with pop-ups or fake download buttons. The tool just works — fast, secure, and free. Whether you’re downloading one video or dozens, ShortsLoad handles it all without slowing down your browser.
  </p>

  <p>
    If you’ve been searching for a <strong>SaveTube alternative</strong> that actually delivers HD quality and doesn’t compromise privacy, ShortsLoad is the answer. Built with the latest web technologies, it continues to improve, offering new features like playlist support, subtitles extraction, and more in future updates.
  </p>

  <p>
    Try ShortsLoad today and experience the easiest way to <strong>download YouTube Shorts videos in MP4 format</strong>. Bookmark this page — your future self will thank you every time you need a quick, clean, and high-quality download.
  </p>
    </section>
      </main>
    </>
  );
}
