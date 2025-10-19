import ConvertM3U8 from "./ConvertM3U8";

export default function DownloadCard({ meta }) {
  const m3u8Format = meta.formats.find((f) => f.url.includes(".m3u8"));
  const mp4Formats = meta.formats.filter((f) => f.ext === "mp4");

  return (
    <div className="bg-white p-4 mt-6 rounded-lg shadow border">
      <h2 className="font-semibold text-lg">{meta.title}</h2>
      <img
        src={meta.thumbnail}
        alt="Thumbnail"
        className="w-40 h-40 mt-3 rounded"
      />

      {mp4Formats.length > 0 ? (
        <div className="mt-3">
          {mp4Formats.map((f, i) => (
            <a
              key={i}
              href={f.url}
              target="_blank"
              rel="noreferrer"
              className="block bg-blue-600 text-white px-3 py-1 rounded mt-2 text-sm"
            >
              Download {f.quality}p MP4
            </a>
          ))}
        </div>
      ) : m3u8Format ? (
        <ConvertM3U8 m3u8Url={m3u8Format.url} title={meta.title} />
      ) : (
        <p className="text-gray-500 mt-3 text-sm italic">
          ⚠️ No downloadable formats found.
        </p>
      )}
    </div>
  );
}
