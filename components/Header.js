"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ SEO FAQ Schema for ShortsLoad Tools */}
      <Head>
      </Head>

      {/* HEADER BAR */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* 🔹 Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-blue-700 tracking-tight hover:text-blue-800 transition"
          >
            fbvideo<span className="text-gray-800">downloaderonline</span>
          </Link>

          {/* 🔹 Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/instagramvideodownloader" className="hover:text-pink-600 transition">
              Instagram Video Downloader
            </Link>
            <Link href="/facebookvideodownloader" className="hover:text-blue-600 transition">
              Facebook Video Downloader
            </Link>
            <Link
              href="https://www.jpgstopdf.com/jpgtopdf"
              target="_blank"
              className="hover:text-yellow-600 transition"
            >
              JPG to PDF
            </Link>
            <Link
              href="https://www.jpgstopdf.com/compressimage"
              target="_blank"
              className="hover:text-green-600 transition"
            >
              Compress Image
            </Link>
            <Link
              href="https://www.jpgstopdf.com/mergepdf"
              target="_blank"
              className="hover:text-purple-600 transition"
            >
              Merge PDF
            </Link>
            <Link
              href="https://www.jpgstopdf.com/pdftojpg"
              target="_blank"
              className="hover:text-red-600 transition"
            >
              PDF to JPG
            </Link>
          </nav>

          {/* 🔹 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
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
              href="/instagramvideodownloader"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-pink-600"
            >
              Instagram Downloader
            </Link>
            <Link
              href="/facebookvideodownloader"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Facebook Downloader
            </Link>
            <Link
              href="https://www.jpgstopdf.com/jpgtopdf"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-yellow-600"
            >
              JPG to PDF
            </Link>
            <Link
              href="https://www.jpgstopdf.com/compressimage"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-600"
            >
              Compress Image
            </Link>
            <Link
              href="https://www.jpgstopdf.com/mergepdf"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-600"
            >
              Merge PDF
            </Link>
            <Link
              href="https://www.jpgstopdf.com/pdftojpg"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-red-600"
            >
              PDF to JPG
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
