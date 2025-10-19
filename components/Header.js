"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Proper SEO schema placement */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is ShortsLoad free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Yes. ShortsLoad is completely free — no sign-up or payment required. You can download unlimited YouTube Shorts instantly.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Does ShortsLoad work on mobile?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Yes. ShortsLoad works perfectly on Android and iPhone browsers such as Chrome and Safari.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Are downloads private and safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Yes. ShortsLoad performs all video processing in your browser locally using FFmpeg — no uploads or tracking.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Can I download Shorts in HD quality?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Yes. ShortsLoad supports downloads in 360p, 720p, and 1080p HD MP4 formats with audio.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Does ShortsLoad add watermarks?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "No. ShortsLoad provides clean, watermark-free MP4 downloads directly from YouTube’s CDN.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Is ShortsLoad affiliated with YouTube?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "No. ShortsLoad is not affiliated with or endorsed by YouTube or Google.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-700 tracking-tight"
          >
            Shorts<span className="text-gray-800">Load</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-blue-600 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-blue-600 transition">
              Disclaimer
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-3 space-y-3 text-gray-700 font-medium">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Terms
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
