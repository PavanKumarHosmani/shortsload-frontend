"use client";

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const loadAds = () => {
      if (!window.adsbygoogle && !document.querySelector("#adsbygoogle-script")) {
        const script = document.createElement("script");
        script.id = "adsbygoogle-script";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577";
        document.head.appendChild(script);
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadAds, { timeout: 3000 });
    } else {
      setTimeout(loadAds, 2500);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="fbvideodownloaderonline — Free facebook videos Downloader. Save facebook videos in HD instantly without watermark."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" crossOrigin="anonymous" />

        {/* Optional SEO OG tags for global pages */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="fbvideodownloaderonline — Free facebook video Downloader" />
        <meta property="og:description" content="Save fb videos in HD instantly without watermark." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.fbvideodownloaderonline.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <main className="min-h-screen bg-gray-50">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
