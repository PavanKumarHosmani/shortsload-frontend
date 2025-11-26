"use client";

import Head from "next/head";
import { useState } from "react";

export default function InstagramVideoDownloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("");

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleFetch = async () => {
    setError("");
    setVideo(null);
    setSelectedQuality("");
    if (!url) return setError("Please enter an Instagram Reel or Post URL");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/getinfo?url=${encodeURIComponent(url)}`);
      const text = await res.text();
      if (text.startsWith("<")) throw new Error("Invalid API response — backend might not be reachable.");
      const data = JSON.parse(text);
      if (data.error) throw new Error(data.error);
      if (!data.formats || data.formats.length === 0) throw new Error("Video not available or private content cannot be downloaded.");
      setVideo(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to fetch Instagram video info");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!selectedQuality) return setError("Select a quality first!");
    const format = video.formats.find((f) => f.quality === selectedQuality);
    if (!format) return setError("Invalid quality selected");

    const link = document.createElement("a");
    link.href = format.url;
    link.download = `${video.title || "instagram_video"}_${selectedQuality}.mp4`;
    setTimeout(() => link.click(), 100);
  };

  const seoTitle = "FB Video Downloader Online — Instagram Video Downloader";
  const seoDescription =
    "Download Instagram videos and Reels for free in HD MP4 format. Fast, secure, watermark-free Instagram video downloader. Works on all devices.";
  const seoKeywords =
    "instagram video download, instagram video downloader, instagram post download, instagram download video, instagram reels download, free instagram downloader";
  const pageUrl = "https://www.fbvideodownloaderonline.com/instagramvideodownloader";
  const pageImage = video?.thumbnail || "https://www.fbvideodownloaderonline.com/og-image.jpg";

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FB Video Downloader Online" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fbvideodownloader" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Structured Data: VideoObject + FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "FB Video Downloader Online - Instagram Video Downloader",
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
              mainEntity: [
                {
                  "@type": "Question",
                  "name": "Is FB Video Downloader Online free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is completely free with unlimited downloads of Instagram Reels and videos."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I download private Instagram videos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, only public Instagram posts, Reels, and videos can be downloaded."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to install an app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, this tool works entirely in your browser without any software installation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are downloaded videos watermark-free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all videos are downloaded in original HD MP4 format without watermarks."
                  }
                }
              ]
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-4 py-10 antialiased">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-600">
            Instagram Video Downloader
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Download Instagram Reels, videos, and posts in HD MP4 — free, fast, and without watermark.
          </p>
        </header>

        {/* Input & Fetch */}
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

        {/* Video Result */}
        {video && !loading && (
          <article className="bg-white shadow-lg p-5 rounded-xl w-full max-w-md mb-10 flex flex-col items-center text-center transition-all hover:shadow-xl">
            <h2 className="text-sm font-medium text-gray-800 mb-2 truncate w-full px-2 leading-snug">
              {video.title}
            </h2>
            <div className="relative w-full max-w-[220px] md:max-w-[260px] rounded-xl overflow-hidden cursor-pointer group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-auto rounded-xl object-cover border border-gray-200 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6 text-pink-600">
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                  </svg>
                </div>
              </div>
            </div>
            <select className="w-full border border-gray-300 rounded-lg p-2 mt-5 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm" value={selectedQuality} onChange={(e) => setSelectedQuality(e.target.value)}>
              <option value="">Select Quality</option>
              {video.formats.map((f, i) => (
                <option key={i} value={f.quality}>
                  {f.quality} 📹 MP4
                </option>
              ))}
            </select>
            <button onClick={handleDownload} disabled={!selectedQuality} className={`w-full mt-3 py-2 rounded-lg text-white font-semibold transition text-sm ${!selectedQuality ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}>
              ⬇️ Download MP4
            </button>
          </article>
        )}

        {/* SEO Content */}
        <section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mb-12">
          <h2 className="text-2xl font-bold">📥 Download Instagram Videos & Reels Instantly</h2>
          <p>FB Video Downloader Online lets you save Instagram Reels, videos, and posts in HD MP4 format on any device. Fast, free, and watermark-free.</p>
          <h3 className="text-xl font-semibold mt-4">⚡ How to Download</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Copy the public Instagram video or Reel link.</li>
            <li>Paste it into the input box above.</li>
            <li>Click <strong>Get Video Info</strong>.</li>
            <li>Select the desired quality and click <strong>Download MP4</strong>.</li>
          </ol>
          <h3 className="text-xl font-semibold mt-4">✅ Features & Benefits</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Fast, high-quality downloads via Instagram CDN</li>
            <li>Watermark-free MP4 videos</li>
            <li>Works on all devices and browsers</li>
            <li>100% free and unlimited downloads</li>
            <li>No login or installation required</li>
          </ul>
        </section>

        {/* ADDITIONAL SEO CONTENT */}
<section className="max-w-3xl text-gray-700 leading-relaxed space-y-4 mb-12">
  <h2 className="text-2xl font-bold">💡 Tips for Smooth Instagram Video Downloads</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li>Make sure the URL is from a public Instagram Reel, video, or post.</li>
    <li>If the video is private or restricted, it cannot be downloaded.</li>
    <li>Choose higher quality for better resolution, but note that larger files may take longer to download.</li>
    <li>Check your device storage before downloading large videos.</li>
    <li>If a download fails, try refreshing the page or using a different browser.</li>
  </ul>

  <h2 className="text-2xl font-bold mt-6">🌍 Supported Devices & Browsers</h2>
  <p>
    FB Video Downloader Online works seamlessly across all major browsers: Chrome, Firefox, Edge, Safari, and Opera. It is fully responsive on smartphones, tablets, and desktop computers. No additional software or app is required.
  </p>

  <h2 className="text-2xl font-bold mt-6">⚠️ Common Issues & How to Fix Them</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Video Not Downloading:</strong> Ensure the URL is correct and public.</li>
    <li><strong>Video Loading Slowly:</strong> Check your internet connection or try a lower quality format.</li>
    <li><strong>Browser Blocking Download:</strong> Make sure pop-ups are allowed for this site.</li>
    <li><strong>Private or Restricted Content:</strong> Only public videos can be downloaded.</li>
  </ul>

  <h2 className="text-2xl font-bold mt-6">✅ Why Choose FB Video Downloader Online?</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li>Fast, secure, and watermark-free downloads</li>
    <li>Supports all Instagram Reels, posts, and videos</li>
    <li>Works on Android, iPhone, Windows, and Mac devices</li>
    <li>No login, registration, or software installation required</li>
    <li>Completely free with unlimited downloads</li>
    <li>Direct downloads from Instagram CDN ensuring privacy and safety</li>
  </ul>

  <p className="mt-4">
    FB Video Downloader Online is the easiest way to save your favorite Instagram videos and Reels for offline viewing anytime, anywhere. Enjoy a smooth and hassle-free experience with no ads, no tracking, and high-quality downloads.
  </p>
</section>

        {/* Disclaimer */}
        <div className="text-xs text-gray-600 mt-4 text-center px-4 max-w-3xl">
          FB Video Downloader Online is independent and not affiliated with Instagram. All content rights belong to respective owners.
        </div>
      </main>
    </>
  );
}
