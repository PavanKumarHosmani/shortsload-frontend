"use client";

import Head from "next/head";
import { useState } from "react";

export default function FacebookVideoDownloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("");

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 🎥 Fetch Facebook video info
  const handleFetch = async () => {
    setError("");
    setVideo(null);
    setSelectedQuality("");
    if (!url) return setError("Please enter a Facebook video or watch URL");
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
      setError(err.message || "Failed to fetch Facebook video info");
    } finally {
      setLoading(false);
    }
  };

  // 🎯 Handle direct download
  const handleDownload = async () => {
    if (!selectedQuality) return alert("Select a quality first!");
    const format = video.formats.find((f) => f.quality === selectedQuality);
    if (!format) return alert("Invalid quality selected");

    const link = document.createElement("a");
    link.href = format.url;
    link.download = `${(video.title || "facebook_video").replace(/[^a-z0-9_\-\.]/gi, "_")}_${selectedQuality}.mp4`;
    link.click();
  };

  // ✅ SEO Metadata values
  const seoTitle = "Facebook Video Downloader — Download Facebook Videos";
  const seoDescription =
    "Free Facebook Video Downloader — download public Facebook videos, reels, and posts in HD and 4K MP4 format. Fast, secure, watermark-free. Works on mobile and desktop.";
  const seoKeywords =
    "facebook video download, fb video download, facebook video downloader, download facebook video, facebook reels download, download video fb, facebook video download hd";
  const pageUrl = "https://fbvideodownloaderonline.com/facebookvideodownloader";
  const pageImage = video?.thumbnail || "https://fbvideodownloaderonline.com/og-image.jpg";

  // JSON-LD FAQ (brand-corrected)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Facebook Video Downloader – Frequently Asked Questions",
    "description":
      "Frequently asked questions about FB Video Downloader Online — safety, supported devices, quality, and downloading Facebook reels.",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is FB Video Downloader Online free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FB Video Downloader Online is 100% free to use and allows unlimited downloads of public Facebook videos and reels."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download Facebook Reels and public posts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — you can download public reels, videos and posts in MP4 format where the source provides that quality."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FB Video Downloader Online works on Android, iPhone, and desktop browsers without requiring downloads or installations."
        }
      },
      {
        "@type": "Question",
        "name": "Is downloading private Facebook videos supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. To respect privacy and platform restrictions, this tool only supports public videos and reels accessible via their URLs."
        }
      },
      {
        "@type": "Question",
        "name": "Are downloads watermark-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Downloads produced by this tool are provided in the original source's MP4 format and the tool does not add any watermark."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* JSON-LD FAQ AFTER meta tags */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </Head>

      {/* noscript block — ensures static text is visible to bots/SEO tools that don't execute JS */}
      <noscript>
        <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
          <h2>Free Facebook Video Downloader — FB Video Downloader Online</h2>
          <p>
            FB Video Downloader Online lets you download public Facebook videos, reels, and posts in MP4 format.
            It is free, fast, and works on all modern browsers (Android, iPhone, Windows, macOS). Paste a public
            Facebook video or reel URL and click "Get Video Info" to select quality and download.
            Supported qualities: SD (480p), HD (720p), Full HD (1080p); 4K when available from the source.
            The tool does not support private videos and does not store user data.
          </p>
        </div>
      </noscript>

      {/* MAIN UI */}
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-10">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">Facebook Video Downloader</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Download public Facebook videos, reels, and posts in HD MP4 format — fast, secure, and no watermark.
          </p>
        </header>

        {/* INPUT BOX */}
        <div className="bg-white shadow p-6 rounded-xl w-full max-w-xl mb-8">
          <input
            type="text"
            placeholder="Paste Facebook video or watch URL..."
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
            {loading ? "🔄 Fetching Video Info..." : "Get Video Info"}
          </button>
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </div>

        {/* VIDEO RESULT CARD */}
        {video && !loading && (
          <article
            className="bg-white shadow-lg p-6 rounded-xl w-full max-w-md mb-10 flex flex-col items-center text-center transition-all hover:shadow-xl"
            itemScope
            itemType="https://schema.org/VideoObject"
          >
            <h2
              className="text-sm font-medium text-gray-800 mb-2 truncate w-full px-2 leading-snug"
              itemProp="name"
            >
              {video.title}
            </h2>

            {/* Thumbnail */}
            <div className="relative mb-4 flex justify-center">
              {!video.thumbnail && (
                <div className="w-40 h-40 md:w-52 md:h-52 bg-gray-200 animate-pulse flex items-center justify-center text-gray-600 rounded-lg">
                  Loading thumbnail...
                </div>
              )}
              <img
                src={video.thumbnail}
                alt={`${video.title} - Facebook Video Downloader thumbnail`}
                className="max-w-[180px] md:max-w-[260px] rounded-lg object-cover shadow-md border border-gray-100"
                loading="lazy"
                referrerPolicy="no-referrer"
                itemProp="thumbnailUrl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback-thumbnail.jpg";
                }}
              />
            </div>

            {/* Quality Selector */}
            <select
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
            >
              <option value="">Select Quality</option>
              {video.formats.map((f, i) => (
                <option key={i} value={f.quality}>
                  {f.quality} 📹 MP4
                </option>
              ))}
            </select>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={!selectedQuality}
              className={`w-full py-2 rounded-lg text-white font-semibold transition text-sm ${
                !selectedQuality ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              ⬇️ Download MP4
            </button>
          </article>
        )}

        <section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mb-12">
  <h2 className="text-2xl font-bold">📥 Free Facebook Video Downloader — FB Video Downloader Online</h2>
  <p>
    FB Video Downloader Online allows you to download public Facebook videos, reels, and posts directly
    to your device in high-quality MP4 format. No installation or login is required, making it fast,
    secure, and easy to use on any device — desktop, tablet, or mobile.
  </p>

  <h3 className="text-xl font-semibold mt-4">⚡ How to Download Facebook Videos</h3>
  <ol className="list-decimal ml-6 space-y-1">
    <li>Copy the link of the public Facebook video, reel, or post you want to download.</li>
    <li>Paste it into the input box above and click <strong>Get Video Info</strong>.</li>
    <li>Wait a few seconds while the tool fetches available video qualities.</li>
    <li>Select your preferred quality (SD, HD, Full HD, or 4K if available).</li>
    <li>Click <strong>Download MP4</strong> and save the video to your device.</li>
  </ol>

  <h3 className="text-xl font-semibold mt-4">✅ Features of FB Video Downloader Online</h3>
  <ul className="list-disc ml-6 space-y-1">
    <li>✅ Free and unlimited downloads of public Facebook videos and reels</li>
    <li>✅ Works on Android, iPhone, Windows, and macOS browsers</li>
    <li>✅ High-quality MP4 files — choose SD, HD, Full HD, or 4K</li>
    <li>✅ Watermark-free downloads</li>
    <li>✅ No login or account required</li>
    <li>✅ Fast and secure — videos are fetched directly from public Facebook sources</li>
    <li>✅ Compatible with mobile and desktop devices</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">📱 Supported Devices and Browsers</h3>
  <p>
    FB Video Downloader Online works seamlessly across all major browsers such as Chrome, Firefox,
    Edge, and Safari. It is fully responsive, allowing downloads on smartphones, tablets, laptops,
    and desktop computers without needing extra software.
  </p>

  <h3 className="text-xl font-semibold mt-4">💡 Tips for Smooth Downloads</h3>
  <ul className="list-disc ml-6 space-y-1">
    <li>Ensure the video URL is from a public Facebook post, reel, or video.</li>
    <li>If a video is private or restricted, this tool will not be able to download it.</li>
    <li>Choose the highest quality available for better resolution, but note that larger files take longer to download.</li>
    <li>Always check your device storage before downloading multiple videos.</li>
    <li>If a download fails, try using a different browser or refreshing the page.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">⚠️ Frequently Asked Questions (FAQ)</h3>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Is FB Video Downloader Online free?</strong> — Yes, it is completely free with unlimited downloads.</li>
    <li><strong>Can I download private Facebook videos?</strong> — No, only public videos are supported due to privacy restrictions.</li>
    <li><strong>Does this tool work on mobile devices?</strong> — Yes, it works on Android, iPhone, iPad, and all mobile browsers.</li>
    <li><strong>Are downloads watermark-free?</strong> — Yes, the downloaded MP4 files do not contain watermarks.</li>
    <li><strong>Do I need to install any software?</strong> — No, everything works directly in your browser.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4">🌟 Why Choose FB Video Downloader Online?</h3>
  <p>
    Unlike other Facebook downloaders, FB Video Downloader Online is fast, secure, and respects
    your privacy. It does not store your data, does not require registration, and provides direct
    downloads in multiple qualities. Whether you want to save a funny reel, an important video,
    or a public Facebook post, our tool makes it easy and hassle-free.
  </p>

  <p className="mt-4">
    Start downloading your favorite Facebook videos today with FB Video Downloader Online
    — the most reliable, free, and easy-to-use Facebook video downloader on the web.
  </p>
</section>


        {/* EXTENDED SEO CONTENT — single copy (visible to users) */}
        <section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mb-12">
          <h2 className="text-2xl font-bold">📥 Free Facebook Video Downloader — FB Video Downloader Online</h2>
          <p>
            FB Video Downloader Online provides a fast, secure, and free way to save public Facebook videos,
            reels, and posts to your device in MP4 format. No login or installation required. Simply paste a
            public Facebook URL, fetch video info, choose quality, and download the MP4 file.
          </p>

          <h3 className="text-xl font-semibold mt-4">⚡ How to Download Facebook Videos</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Copy the link of the public Facebook video, reel, or post.</li>
            <li>Paste it into the input box above and click <strong>Get Video Info</strong>.</li>
            <li>Select your preferred video quality (SD, HD, Full HD, or 4K when available).</li>
            <li>Click <strong>Download MP4</strong> to save it to your device.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-4">✅ Features</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✅ Free and unlimited downloads of public Facebook videos</li>
            <li>✅ Works across Android, iPhone, and desktop browsers</li>
            <li>✅ High-quality MP4 files — SD, HD, Full HD, and 4K when available</li>
            <li>✅ No watermark, no account required, and no tracking</li>
          </ul>

          <p className="mt-4">
            This tool fetches video files directly from Facebook's public sources when available.
            Private or restricted videos cannot be accessed due to platform privacy settings.
          </p>
        </section>
      </main>
    </>
  );
}
