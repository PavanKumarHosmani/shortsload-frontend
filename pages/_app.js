import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script"; // ✅ Import Next.js Script

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* 🌐 Global Meta Tags */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="ShortsLoad — Free YouTube Shorts Downloader. Save Shorts videos in 360p, 720p, or 1080p HD MP4 instantly without watermark."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Google AdSense Auto Ads (Safe Placement) */}
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
        crossOrigin="anonymous"
      />

      {/* 🌟 Global Header */}
      <Header />

      {/* 🧠 Page Content */}
      <main className="min-h-screen bg-gray-50">
        <Component {...pageProps} />
      </main>

      {/* ⚙️ Global Footer */}
      <Footer />
    </>
  );
}
