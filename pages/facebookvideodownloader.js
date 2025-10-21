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
    link.download = `${video.title || "facebook_video"}_${selectedQuality}.mp4`;
    link.click();
  };

  // ✅ SEO Metadata
  const seoTitle =
    "Facebook Video Downloader — Download Facebook Videos";
  const seoDescription =
    "Free Facebook Video Downloader — download videos, reels, and public posts from Facebook in HD and 4K MP4 format. Fast, secure, and no watermark.";
  const seoKeywords =
    "facebook video download, fb video download, facebook video downloader, download facebook video, facebook reels download, download video fb, facebook video download hd";
  const pageUrl = "https://shortsload.com/facebookvideodownloader";
  const pageImage = video?.thumbnail || "https://shortsload.com/og-image.jpg";

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

        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ShortsLoad - Facebook Video Downloader",
              url: pageUrl,
              description: seoDescription,
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "3124",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${pageUrl}?url={facebookUrl}`,
                "query-input": "required name=facebookUrl",
              },
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </Head>

      {/* MAIN UI */}
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-10">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            Facebook Video Downloader
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Download Facebook videos, reels, and public posts in HD MP4 format — fast, secure,
            and no watermark. 100% free Facebook video downloader.
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

            {/* ✅ Thumbnail */}
            <div className="relative mb-4 flex justify-center">
              {!video.thumbnail && (
                <div className="w-40 h-40 md:w-52 md:h-52 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 rounded-lg">
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

            {/* 🎯 Quality Selector */}
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

            {/* ⬇️ Download Button */}
            <button
              onClick={handleDownload}
              disabled={!selectedQuality}
              className={`w-full py-2 rounded-lg text-white font-semibold transition text-sm ${
                !selectedQuality
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              ⬇️ Download MP4
            </button>
          </article>
        )}

        {/* EXTENDED SEO CONTENT */}
        <section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mb-12">
          <h2 className="text-2xl font-bold">📥 Free Facebook Video Downloader — ShortsLoad</h2>
          <p>
            <strong>ShortsLoad</strong> is a free online <strong>Facebook video downloader</strong> that
            allows you to easily <strong>download Facebook videos</strong>, reels, and public posts in
            HD and 4K MP4 formats. It works directly from your browser — no software required.
          </p>

          <h3 className="text-xl font-semibold mt-4">⚡ How to Download Facebook Videos</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Copy the link of the Facebook video, reel, or watch page.</li>
            <li>Paste the link into the input box above.</li>
            <li>Click <strong>Get Video Info</strong>.</li>
            <li>Select your preferred video quality (SD, HD, or 4K).</li>
            <li>Click <strong>Download MP4</strong> to save the video instantly.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-4">✅ Features of ShortsLoad</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>🎞 Download <strong>Facebook videos</strong>, reels, and page posts</li>
            <li>📱 Works on all devices — Android, iPhone, PC, and Mac</li>
            <li>⚡ Fast, serverless processing via Facebook’s CDN</li>
            <li>🔒 100% secure — no login, no data tracking</li>
            <li>💾 Available in HD, Full HD, and 4K MP4 formats</li>
          </ul>

          <p className="mt-4">
            Whether you want to <strong>download Facebook reels</strong> or save videos for offline viewing,
            ShortsLoad provides a simple, ad-free, and reliable downloader experience.
          </p>
        </section>
        <section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mt-10">
  <h2 className="text-2xl font-bold">📥 Free Facebook Video Downloader — ShortsLoad</h2>
  <p>
    <strong>ShortsLoad Facebook Video Downloader</strong> is a fast, secure, and free online tool 
    that helps you download Facebook videos, reels, and posts directly in high-quality MP4 format. 
    Whether you want to save a public reel, an educational video, or a trending clip, our downloader 
    allows you to do it in seconds — without watermark and without login.
  </p>

  <h3 className="text-xl font-semibold mt-4">⚡ How to Download Facebook Videos</h3>
  <ol className="list-decimal ml-6 space-y-1">
    <li>Copy the link of the Facebook video, reel, or post you wish to download.</li>
    <li>Paste it into the input box at the top of this page.</li>
    <li>Click the <strong>“Get Video Info”</strong> button.</li>
    <li>Choose your preferred video quality (SD, HD, or Full HD).</li>
    <li>Click <strong>Download MP4</strong> to save it instantly to your device.</li>
  </ol>
  <p>
    The downloaded video will be saved in MP4 format, compatible with all smartphones, tablets, 
    and desktop systems — without any watermark or quality loss.
  </p>

  <h3 className="text-xl font-semibold mt-4">🌍 Why Use ShortsLoad for Facebook Video Downloads?</h3>
  <ul className="list-disc ml-6 space-y-1">
    <li>✅ 100% free and unlimited downloads</li>
    <li>✅ Works with public videos, reels, and pages</li>
    <li>✅ High-quality MP4 files — HD and Full HD supported</li>
    <li>✅ Safe, no login, and no watermark</li>
    <li>✅ Browser-based — no software or app required</li>
  </ul>

  <p>
    <strong>ShortsLoad</strong> does not host any Facebook content or store user data. All video files 
    are fetched securely from Facebook’s public CDN. The entire process happens inside your browser, 
    ensuring full privacy and compliance. Use our <strong>Facebook Video Downloader</strong> today to 
    save and enjoy your favorite Facebook Reels and videos offline — fast, free, and in HD quality.
  </p>
</section>

      </main>
    </>
  );
}
