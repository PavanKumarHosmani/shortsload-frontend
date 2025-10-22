import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

const StickyAdBanners = dynamic(() => import("../components/StickyAdBanners"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ShortsLoad — Free YouTube Shorts Downloader. Save Shorts videos in HD instantly without watermark."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ AdSense script handled properly */}
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
        crossOrigin="anonymous"
      />

      <Header />
      <StickyAdBanners />
      <main className="min-h-screen bg-gray-50">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
