import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About — ShortsLoad & JPGtoPDF</title>
        <meta
          name="description"
          content="Learn about ShortsLoad — a free, privacy-first platform offering Instagram and Facebook video downloaders, JPG to PDF converters, image compressors, and other online tools."
        />
        <meta
          name="keywords"
          content="About ShortsLoad, Instagram video downloader, Facebook video downloader, JPG to PDF, compress image, merge PDF, PDF to JPG, ShortsLoad India, free online tools, download Facebook video, download Instagram Reels"
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
                  "https://facebook.com/shortsload",
                  "https://twitter.com/shortsload",
                  "https://www.jpgstopdf.com",
                ],
                description:
                  "ShortsLoad is a free suite of online tools for downloading Instagram and Facebook videos, and converting files like JPG to PDF or PDF to JPG — fast, secure, and watermark-free.",
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
          <strong>ShortsLoad</strong> is a collection of free, modern, and
          privacy-focused online tools designed to make your digital life easier.
          From downloading <strong>Instagram Reels</strong> and{" "}
          <strong>Facebook videos</strong> to converting <strong>JPG to PDF</strong> or{" "}
          <strong>compressing images</strong>, ShortsLoad provides fast, secure, and
          ad-safe utilities that work directly in your browser — no software
          installation, registration, or watermark.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">💡 Our Mission</h2>
        <p className="mb-4">
          At <strong>ShortsLoad</strong>, our mission is to create simple, powerful,
          and privacy-respecting web tools for everyone. Whether you're a student,
          creator, business professional, or casual user — we help you save videos,
          manage files, and optimize media with ease and speed.
        </p>

        <p className="mb-4">
          We believe the internet should be open, ad-safe, and accessible. That’s why
          we offer every feature for free, with minimal, non-intrusive advertising that
          supports platform maintenance and future development.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">⚙️ What We Offer</h2>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>📸 <strong>Instagram Video Downloader</strong> — Save Instagram Reels and public videos in HD MP4 format.</li>
          <li>📘 <strong>Facebook Video Downloader</strong> — Download Facebook Reels and videos directly from Facebook’s CDN — no watermark.</li>
          <li>📄 <strong>JPG to PDF Converter</strong> — Combine multiple images into a single PDF quickly and securely.</li>
          <li>🗜️ <strong>Compress Image</strong> — Reduce image file size without losing quality for faster uploads.</li>
          <li>🔗 <strong>Merge PDF Files</strong> — Combine multiple PDF documents into one in seconds.</li>
          <li>🖼️ <strong>PDF to JPG Converter</strong> — Convert every page of your PDF into crisp JPG images instantly.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">🌍 How ShortsLoad Works</h2>
        <p className="mb-4">
          ShortsLoad and its connected tools like <strong>JPGtoPDF</strong> use secure,
          browser-based technologies that process data locally on your device.
          This means your files never leave your browser — ensuring complete privacy
          and instant performance. Our servers simply fetch the video or format info
          and never store, log, or track any user data.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>✅ Fully client-side processing (no file uploads)</li>
          <li>✅ Safe, private, and fast performance</li>
          <li>✅ Works across Android, iPhone, Windows, and Mac</li>
          <li>✅ 100% free with light, non-intrusive ads</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">🚀 Why We Built ShortsLoad</h2>
        <p className="mb-4">
          Many video downloader and converter websites today are filled with popups,
          malware, or confusing redirects. <strong>ShortsLoad</strong> was created to
          fix that. We focus on providing clean, transparent, and lightning-fast tools
          that anyone can trust — built on open-source technologies and optimized for
          real users.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">🧑‍💻 Built in India, Trusted Worldwide</h2>
        <p className="mb-4">
          <strong>ShortsLoad</strong> and <strong>JPGtoPDF</strong> are developed and
          maintained by a small, independent team based in <strong>India</strong>.
          Our tools are used by millions globally — creators, professionals, and
          students alike — for their reliability, simplicity, and privacy-first design.
        </p>

        <p className="mb-4">
          We are not affiliated with <strong>Meta (Instagram, Facebook)</strong> or any
          third-party platform. All downloads come directly from publicly accessible
          CDN links, in accordance with each platform’s fair use and copyright rules.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">📫 Get in Touch</h2>
        <p className="mb-4">
          Have feedback, partnership ideas, or want to advertise with us? We’d love to
          hear from you! Reach us at{" "}
          <a
            href="mailto:contact@shortsload.com"
            className="text-blue-600 underline"
          >
            contact@shortsload.com
          </a>
          .
        </p>

        <section className="mt-10 text-gray-700 space-y-3">
          <h3 className="text-xl font-semibold">Why Users Trust ShortsLoad</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✔️ 100% Free — no hidden fees, no login</li>
            <li>✔️ Fast and reliable downloads and conversions</li>
            <li>✔️ Works on all major browsers and devices</li>
            <li>✔️ Secure, ad-safe, and privacy-compliant</li>
            <li>✔️ Built with ❤️ in India for global users</li>
          </ul>
          <p>
            Every day, thousands of people use <strong>ShortsLoad</strong> and{" "}
            <strong>JPGtoPDF</strong> for video downloads, file conversions, and
            media optimization. Our goal is to remain your most trusted and
            user-friendly web toolkit — forever free, transparent, and fast.
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
