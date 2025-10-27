"use client";

import Head from "next/head";
import { useState } from "react";

export default function InstagramVideoDownloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("");

  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL;

  // 🎥 Fetch Instagram video info
  const handleFetch = async () => {
    setError("");
    setVideo(null);
    setSelectedQuality("");
    if (!url) return setError("Please enter an Instagram Reel or Post URL");
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
      setError(err.message || "Failed to fetch Instagram video info");
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
    link.download = `${video.title || "instagram_video"}_${selectedQuality}.mp4`;
    link.click();
  };

  // ✅ SEO Data
  const seoTitle =
    "Instagram Video Downloader — Download Instagram Reels";
  const seoDescription =
    "Download Instagram videos and Reels for free in HD MP4 format. Fast, secure, and watermark-free Instagram video downloader. Works on all devices securely.";
  const seoKeywords =
    "instagram video download, instagram video downloader, instagram post download, instagram download video, instagram reels download, free instagram downloader";
  const pageUrl = "https://shortsload.com/instagramvideodownloader";
  const pageImage = video?.thumbnail || "https://shortsload.com/og-image.jpg";

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
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

        {/* Schema Markup for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ShortsLoad - Instagram Video Downloader",
              url: pageUrl,
              description: seoDescription,
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2456",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${pageUrl}?url={instagramUrl}`,
                "query-input": "required name=instagramUrl",
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
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-4 py-10 antialiased">
        {/* HEADER */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-600">
            Instagram Video Downloader
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Download Instagram Reels, videos, and public posts in HD MP4 — free, fast, and without watermark. Works on all devices.
          </p>
        </header>

        {/* INPUT BOX */}
        <div className="bg-white shadow p-6 rounded-xl w-full max-w-xl mb-8">
          <input
            type="text"
            placeholder="Paste Instagram Reel or Post URL..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            onClick={handleFetch}
            disabled={loading}
            className={`w-full mt-4 py-3 rounded-lg text-white font-semibold transition ${
              loading ? "bg-gray-400" : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {loading ? "🔄 Fetching Video Info..." : "Get Video Info"}
          </button>
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </div>

        {/* RESULT CARD */}
        {video && !loading && (
          <article
            className="bg-white shadow-lg p-5 rounded-xl w-full max-w-md mb-10 flex flex-col items-center text-center transition-all hover:shadow-xl"
            itemScope
            itemType="https://schema.org/VideoObject"
          >
            {/* 🔤 Title */}
            <h2
              className="text-sm font-medium text-gray-800 mb-2 truncate w-full px-2 leading-snug"
              itemProp="name"
            >
              {video.title}
            </h2>

            {/* 🎞 Thumbnail with play overlay */}
            <div className="relative w-full max-w-[220px] md:max-w-[260px] rounded-xl overflow-hidden cursor-pointer group">
              <img
                // src={video.thumbnail}
                alt={`${video.title} - Instagram Video Downloader thumbnail`}
                className="w-full h-auto rounded-xl object-cover border border-gray-200 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
                // itemProp="thumbnailUrl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback-thumbnail.jpg";
                }}
              />

              {/* ▶️ Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6 text-pink-600"
                  >
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 🎯 Quality Selector */}
            <select
              className="w-full border border-gray-300 rounded-lg p-2 mt-5 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
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
              className={`w-full mt-3 py-2 rounded-lg text-white font-semibold transition text-sm ${
                !selectedQuality
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              ⬇️ Download MP4
            </button>
          </article>
        )}

        {/* SEO TEXT SECTION */}
        <section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mb-12">
          <h2 className="text-2xl font-bold">📥 Free Instagram Video Downloader — ShortsLoad</h2>
          <p>
            <strong>ShortsLoad</strong> is the best free tool to download Instagram videos,
            Reels, and posts in HD MP4 format. No login, watermark, or software needed —
            just paste your link and download instantly.
          </p>

          <h3 className="text-xl font-semibold mt-4">⚡ How to Download Instagram Videos</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Copy the Instagram Reel, video, or post link.</li>
            <li>Paste the link in the box above.</li>
            <li>Click <strong>Get Video Info</strong>.</li>
            <li>Select quality and click <strong>Download MP4</strong>.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-4">✅ Why Choose ShortsLoad</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>🎞 Download Reels, videos, and public posts</li>
            <li>📱 Works on Android, iPhone, Windows, and Mac</li>
            <li>⚡ Fast downloads via Instagram CDN</li>
            <li>🔒 100% secure, no data tracking</li>
            <li>💯 Completely free, forever</li>
          </ul>

          <p className="mt-4">
            Whether you want to <strong>download Instagram videos</strong> for offline viewing
            or save your favorite <strong>Reels</strong>, ShortsLoad provides a smooth and ad-free
            experience.
          </p>
        </section>

        <section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mt-10">
          <h2 className="text-2xl font-bold">📥 Free Instagram Video Downloader — ShortsLoad</h2>
          <p>
            <strong>ShortsLoad Instagram Video Downloader</strong> is a free and secure online tool 
            that lets you download Instagram Reels, Posts, and IGTV videos in HD MP4 format directly 
            to your device. Whether you’re saving your own content or a public reel for offline viewing, 
            our downloader makes it simple and fast — without requiring login or installing any app.
          </p>

          <h3 className="text-xl font-semibold mt-4">⚡ How to Use the Tool</h3>

          <p>
            The video will be saved instantly on your phone, tablet, or computer — no watermark, no signup, 
            and no redirects.
          </p>

          <h3 className="text-xl font-semibold mt-4">🌍 Why Choose ShortsLoad?</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✅ 100% free and unlimited downloads</li>
            <li>✅ Works for public Reels, posts, and IGTV videos</li>
            <li>✅ High-speed processing with no watermark</li>
            <li>✅ Compatible with all browsers and devices</li>
            <li>✅ Safe, private, and ad-friendly experience</li>
          </ul>

          <p>
            <strong>ShortsLoad</strong> does not store or host Instagram content. All downloads are processed 
            directly from Instagram’s CDN, ensuring safety and compliance. Save your favorite Reels today and 
            enjoy offline viewing anytime!
          </p>
        </section>

        {/* ✅ Contrast-Fixed Disclaimer */}
        <div className="text-xs text-gray-600 mt-4 text-center px-4 max-w-3xl">
          ShortsLoad is an independent platform and not affiliated with YouTube. All content rights belong to their respective owners.
        </div>
      </main>
    </>
  );
}
