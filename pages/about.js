import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About — ShortsLoad</title>
        <meta
          name="description"
          content="Learn about ShortsLoad.com — a free, privacy-friendly YouTube Shorts Downloader that lets you save videos in MP4 format (360p, 720p, 1080p) without watermark."
        />
        <meta
          name="keywords"
          content="About ShortsLoad, YouTube Shorts Downloader, ShortsLoad India, FFmpeg video downloader, browser video converter, no watermark YouTube Shorts"
        />
        <link rel="canonical" href="https://shortsload.com/about" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              mainEntity: {
                "@type": "Organization",
                name: "ShortsLoad",
                url: "https://shortsload.com",
                logo: "https://shortsload.com/logo.png",
                sameAs: [
                  "https://twitter.com/shortsload",
                  "https://facebook.com/shortsload",
                ],
                description:
                  "ShortsLoad is a free online YouTube Shorts Downloader built for speed, privacy, and simplicity — allowing users to download Shorts videos in MP4 without watermark.",
                foundingDate: "2024",
                founder: {
                  "@type": "Person",
                  name: "ShortsLoad Developer Team",
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

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">About ShortsLoad</h1>

        <p className="mb-4">
          <strong>ShortsLoad</strong> is a modern and privacy-focused{" "}
          <strong>YouTube Shorts Downloader</strong> that helps users save videos in
          MP4 format with resolutions like <strong>360p</strong>,{" "}
          <strong>720p</strong>, and <strong>1080p</strong>. Our goal is to make
          downloading YouTube Shorts simple, safe, and lightning fast — without ads,
          popups, or watermarks.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">💡 Our Mission</h2>
        <p className="mb-4">
          We believe in open internet access and user empowerment. Many people want
          to keep educational, motivational, or entertaining Shorts for offline use.
          <strong> ShortsLoad</strong> enables that — ethically and efficiently —
          without violating user privacy or storing any personal data.
        </p>

        <p className="mb-4">
          We strive to keep ShortsLoad fast, lightweight, and accessible to everyone,
          even on low-end devices and slower networks. Everything runs locally inside
          your browser — no third-party file storage or tracking.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">⚙️ How ShortsLoad Works</h2>
        <p className="mb-4">
          ShortsLoad is powered by advanced, open-source technologies like{" "}
          <strong>yt-dlp</strong> and <strong>FFmpeg</strong>. When you paste a
          YouTube Shorts link, our backend quickly fetches video information such as
          available qualities and codecs. The merging and conversion process happens
          directly in your browser using <strong>WebAssembly</strong>, keeping your
          downloads fully private.
        </p>

        <p className="mb-4">
          This browser-based approach ensures:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>✅ No server-side video storage or tracking</li>
          <li>✅ 100% privacy and data security</li>
          <li>✅ Instant MP4 downloads with audio-video sync</li>
          <li>✅ Zero external data transfer costs for users</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">🚀 Why We Built ShortsLoad</h2>
        <p className="mb-4">
          The idea for ShortsLoad came from a simple goal — to make YouTube Shorts
          downloading effortless and transparent. Most existing tools are filled
          with pop-ups, misleading ads, and privacy issues. ShortsLoad eliminates all
          that, offering a minimalist, clean interface designed for real users who
          care about speed and safety.
        </p>

        <p className="mb-4">
          Unlike traditional video downloaders, ShortsLoad doesn’t rely on cloud
          servers. Instead, it uses <strong>client-side video processing</strong>,
          ensuring that your activity never leaves your device.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">🌍 Our Vision</h2>
        <p className="mb-4">
          ShortsLoad aims to become the world’s most trusted platform for
          lightweight, ad-free, and open-source video utility tools. We’re expanding
          beyond Shorts — exploring new tools like YouTube Thumbnail Downloader,
          Instagram Reels Saver, and Online Video Merger — while keeping privacy and
          transparency at the heart of everything we build.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">🧑‍💻 Built in India, Loved Worldwide</h2>
        <p className="mb-4">
          ShortsLoad is independently built and maintained by a small developer team
          based in <strong>India</strong>. We are passionate about open-source tools,
          user-first design, and building web apps that genuinely add value.
        </p>

        <p className="mb-4">
          Although we are not affiliated with <strong>YouTube</strong> or{" "}
          <strong>Google LLC</strong>, we fully respect their copyright and content
          policies. ShortsLoad only works with publicly available videos from
          YouTube’s official CDN.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">📫 Get in Touch</h2>
        <p className="mb-4">
          Have questions, feature suggestions, or partnership ideas? We’d love to
          hear from you. Contact us anytime at{" "}
          <a
            href="mailto:contact@shortsload.com"
            className="text-blue-600 underline"
          >
            contact@shortsload.com
          </a>
          .
        </p>

        <section className="mt-10 text-gray-700 space-y-3">
          <h3 className="text-xl font-semibold">Why People Trust ShortsLoad</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✔️ 100% free — no sign-ups or hidden costs</li>
            <li>✔️ Works on Android, iPhone, Windows, and macOS</li>
            <li>✔️ Secure, open-source, and privacy-respecting</li>
            <li>✔️ Fast processing with no watermark</li>
            <li>✔️ Supported by a growing global community</li>
          </ul>
          <p>
            Join thousands of creators, students, and professionals who use
            <strong> ShortsLoad</strong> daily for their YouTube Shorts downloads.
            We’re here to make short video saving as effortless as it should be.
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
