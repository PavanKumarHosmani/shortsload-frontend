"use client";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const pageTitle =
    "ShortsLoad — Free Video & File Tools | Instagram, Facebook, PDF & Image Converters";
  const pageDescription =
    "Free online tools by ShortsLoad — download Instagram Reels and Facebook videos, convert JPG to PDF, compress images, merge PDFs, and convert PDF to JPG easily. 100% free and secure.";
  const pageKeywords =
    "Instagram video downloader, Facebook video downloader, JPG to PDF, compress image, merge PDF, PDF to JPG, free online converter, download Facebook video, download Instagram video, ShortsLoad, jpgstopdf";
  const pageUrl = "https://shortsload.com/";
  const pageImage = "https://shortsload.com/og-image.jpg";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ShortsLoad",
              url: pageUrl,
              description: pageDescription,
              potentialAction: {
                "@type": "SearchAction",
                target: `${pageUrl}?q={query}`,
                "query-input": "required name=query",
              },
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center text-center px-4 py-16">
        {/* HERO SECTION */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          🎯 ShortsLoad — Free Video & File Tools
        </h1>
        <p className="text-gray-600 max-w-3xl mb-10">
          Download <strong>Instagram Reels</strong> and <strong>Facebook videos</strong> or use free
          tools like <strong>JPG to PDF</strong>, <strong>Compress Image</strong>,{" "}
          <strong>Merge PDF</strong>, and <strong>PDF to JPG</strong>. Fast, private, and
          watermark-free — no sign-up or app required.
        </p>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Instagram Downloader */}
          <Link href="/instagramvideodownloader" className="group">
            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                  📸
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600">
                Instagram Video Downloader
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Download Instagram Reels and public posts in MP4 — quick, HD, and no watermark.
              </p>
              <div className="mt-4 text-pink-600 font-semibold">Try Now →</div>
            </div>
          </Link>

          {/* Facebook Downloader */}
          <Link href="/facebookvideodownloader" className="group">
            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                  f
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                Facebook Video Downloader
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Save Facebook reels, videos, and public content directly in HD MP4 format.
              </p>
              <div className="mt-4 text-blue-600 font-semibold">Try Now →</div>
            </div>
          </Link>

          {/* JPG to PDF */}
          <Link href="https://www.jpgstopdf.com/jpgtopdf" target="_blank" className="group">
            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-yellow-400 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                  📄
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-500">
                JPG to PDF Converter
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Convert multiple JPG or PNG images into one high-quality PDF document instantly.
              </p>
              <div className="mt-4 text-yellow-500 font-semibold">Try Now →</div>
            </div>
          </Link>

          {/* Compress Image */}
          <Link href="https://www.jpgstopdf.com/compressimage" target="_blank" className="group">
            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                  🗜️
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600">
                Compress Image Online
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce image file size without losing visual quality — perfect for uploads.
              </p>
              <div className="mt-4 text-green-600 font-semibold">Try Now →</div>
            </div>
          </Link>

          {/* Merge PDF */}
          <Link href="https://www.jpgstopdf.com/mergepdf" target="_blank" className="group">
            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                  🔗
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600">
                Merge PDF Files
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Merge multiple PDF files into one — secure, instant, and free.
              </p>
              <div className="mt-4 text-purple-600 font-semibold">Try Now →</div>
            </div>
          </Link>

          {/* PDF to JPG */}
          <Link href="https://www.jpgstopdf.com/pdftojpg" target="_blank" className="group">
            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-red-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                  🖼️
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600">
                PDF to JPG Converter
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Convert every page of a PDF file into sharp, high-quality JPG images online.
              </p>
              <div className="mt-4 text-red-600 font-semibold">Try Now →</div>
            </div>
          </Link>
        </div>

        {/* ABOUT SECTION */}
        <section className="max-w-5xl mt-20 text-gray-700 leading-relaxed space-y-6 text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            ⚡ All-in-One Free Toolkit for Everyday Use
          </h2>
          <p>
            <strong>ShortsLoad</strong> and <strong>JPGtoPDF</strong> are your go-to free platforms
            for downloading, converting, and managing media and document files. Whether you’re
            saving trending <strong>Instagram Reels</strong>, downloading a <strong>Facebook video</strong>,
            or converting files like <strong>JPG to PDF</strong> or <strong>PDF to JPG</strong>,
            these tools make it effortless — no sign-up, no watermark, no limits.
          </p>

          <h3 className="text-xl font-semibold mt-4">📥 Why Use ShortsLoad Tools?</h3>
          <p>
            Unlike other downloaders or converters that force sign-ups or show popups, ShortsLoad
            and JPGtoPDF focus on clean usability, speed, and data privacy. All downloads and
            conversions happen instantly in your browser — your files never leave your device.
          </p>

          <h3 className="text-xl font-semibold mt-4">🌐 Supported Tools</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Instagram Video Downloader</strong> — Save Reels and posts in MP4 HD format.
            </li>
            <li>
              <strong>Facebook Video Downloader</strong> — Download Facebook videos directly from
              the official CDN.
            </li>
            <li>
              <strong>JPG to PDF</strong> — Combine multiple photos into one high-quality PDF file.
            </li>
            <li>
              <strong>Compress Image</strong> — Shrink image size without affecting clarity.
            </li>
            <li>
              <strong>Merge PDF</strong> — Join multiple PDF files into one seamless document.
            </li>
            <li>
              <strong>PDF to JPG</strong> — Extract pages from PDFs as individual JPGs.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">💡 Safe, Fast, and Free Forever</h3>
          <p>
            All tools under ShortsLoad and JPGtoPDF are 100% browser-based, which means they don’t
            upload your private data to any external servers. You can use them anytime, anywhere —
            on Android, iPhone, Windows, or macOS devices. Every process is optimized for
            performance and efficiency.
          </p>

          <h3 className="text-xl font-semibold mt-4">📈 Trusted by Thousands Worldwide</h3>
          <p>
            From students and teachers to content creators and business professionals — thousands of
            users rely on ShortsLoad every day for quick downloads and conversions. Its simplicity,
            clean interface, and ad-free experience make it one of the best online utility platforms
            today.
          </p>

          <h3 className="text-xl font-semibold mt-4">🔒 Privacy First</h3>
          <p>
            ShortsLoad doesn’t store, track, or analyze any user data. Your files remain yours —
            processed directly in your browser using secure, modern web technologies.
          </p>

          <p>
            So whether you’re downloading an <strong>Instagram Reel</strong>, compressing an image,
            or converting <strong>JPG to PDF</strong>, ShortsLoad ensures a smooth, secure, and
            free experience every time.
          </p>
        </section>
      </main>
    </>
  );
}
