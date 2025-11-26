import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About — FB Video Downloader Online</title>

        <meta
          name="description"
          content="FBVideoDownloaderOnline — a fast, free, privacy-friendly Facebook Reel & Video Downloader. Download Facebook videos in HD without watermark."
        />

        <meta
          name="keywords"
          content="About FB video downloader, Facebook video downloader, Facebook reel downloader, save Facebook video, free online tools, HD Facebook downloader, MP4 Facebook download"
        />

        <link
          rel="canonical"
          href="https://fbvideodownloaderonline.com/about"
        />

        {/* 🔥 SEO: Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              mainEntity: {
                "@type": "Organization",
                name: "FBVideoDownloaderOnline",
                url: "https://fbvideodownloaderonline.com",
                logo: "https://fbvideodownloaderonline.com/logo.png",
                description:
                  "FBVideoDownloaderOnline is a free online tool to download Facebook videos and reels in HD without watermark. Fast, secure, and privacy-friendly.",
                foundingDate: "2024",
                founder: {
                  "@type": "Person",
                  name: "FBVideoDownloaderOnline Team",
                },
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IN",
                },
              },
            }),
          }}
        />
      </Head>

      {/* 💡 MAIN CONTENT */}
      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">
          About FBVideoDownloaderOnline
        </h1>

        <p className="mb-4">
          <strong>FBVideoDownloaderOnline</strong> is a free, fast, and
          privacy-focused Facebook video and Reel downloader. It allows users to
          download any public Facebook video or Reel in HD MP4 format — without
          watermark, without login, and without installing any apps.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">💡 Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide a simple, fast, and secure platform for
          downloading Facebook videos. No ads that disturb, no redirects, and no
          tracking. Just clean and powerful tools built for everyday users.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">⚙️ What We Offer</h2>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>
            📘 <strong>Facebook Video Downloader</strong> — Download any Facebook
            video or reel in HD MP4.
          </li>
          <li>
            📥 <strong>Facebook Reels Downloader</strong> — Save reels directly
            from Facebook’s CDN.
          </li>
          <li>
            🔗 <strong>Fast Link Processing</strong> — Paste video URL, get
            download instantly.
          </li>
          <li>
            🔒 <strong>Completely Private</strong> — We do not store, track, or
            log any user data.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          🌍 How It Works (Secure & Private)
        </h2>
        <p className="mb-4">
          FBVideoDownloaderOnline uses secure server-side link parsing and
          browser-based downloading. We never store your video — the tool
          extracts downloadable links directly from Facebook’s publicly
          accessible CDN.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>✔ No account required</li>
          <li>✔ No video storage</li>
          <li>✔ No tracking</li>
          <li>✔ Works on Android, iOS, Windows, macOS</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          🚀 Why We Built This Tool
        </h2>
        <p className="mb-4">
          Many video downloader websites are full of ads, redirects, malware, or
          confusing steps. We created a platform that is clean, fast, and
          trustworthy — built for real users who just want a simple downloader.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          🧑‍💻 Built in India, Trusted Worldwide
        </h2>
        <p className="mb-4">
          FBVideoDownloaderOnline is developed by a small independent team in
          <strong> India</strong>. We are not affiliated with Meta (Facebook). All
          downloads come from public URLs in compliance with fair use rules.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">📫 Contact Us</h2>
        <p className="mb-4">
          For feedback, suggestions, or business queries, email us at{" "}
          <a
            href="mailto:contact@fbvideodownloaderonline.com"
            className="text-blue-600 underline"
          >
            contact@fbvideodownloaderonline.com
          </a>
        </p>

        <section className="mt-10 text-gray-700 space-y-3">
          <h3 className="text-xl font-semibold">Why Users Trust Us</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✔ 100% Free — no fees</li>
            <li>✔ Works on all devices</li>
            <li>✔ Secure, private, and reliable</li>
            <li>✔ HD video quality</li>
            <li>✔ No watermark</li>
          </ul>
        </section>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}