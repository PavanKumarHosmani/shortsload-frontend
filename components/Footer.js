"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-500 text-sm text-center space-y-2 mt-10 border-t pt-6">
      <p>© {new Date().getFullYear()} ShortsLoad.com</p>
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <Link href="/privacy" className="hover:text-blue-600">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-blue-600">
          Terms of Service
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About Us
        </Link>
        <Link href="/dmca" className="hover:text-blue-600">
          DMCA
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact Us
        </Link>
        <Link href="/disclaimer" className="hover:text-blue-600">
          Disclaimer
        </Link>
      </div>

      <div className="text-xs text-gray-600 mt-4">
        ShortsLoad is an independent platform and not affiliated with YouTube.  
        All content is downloaded directly from public CDN servers.
      </div>
    </footer>
  );
}
