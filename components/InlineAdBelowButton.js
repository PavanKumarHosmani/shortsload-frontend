"use client";

import { useEffect, useRef, useState } from "react";

export default function InlineAdBelowButton() {
  const adRef = useRef(null);
  const [showAd, setShowAd] = useState(false);
  const [adReady, setAdReady] = useState(false);

  // ✅ Load AdSense script globally (once)
  useEffect(() => {
    if (!document.querySelector("script[data-ad-client='ca-pub-2964380688781577']")) {
      const script = document.createElement("script");
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577";
      script.setAttribute("data-ad-client", "ca-pub-2964380688781577");
      document.head.appendChild(script);
    }
  }, []);

  // ✅ Wait until ad container becomes visible before loading ad
  useEffect(() => {
    const el = adRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.boundingClientRect.width > 0) {
          setShowAd(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ✅ Push ad only after container visible and width is nonzero
  useEffect(() => {
    if (!showAd || !adRef.current) return;

    const el = adRef.current;
    const tryLoadAd = () => {
      try {
        if (el && el.innerHTML.trim() === "") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.warn("AdSense push skipped:", e.message);
      }
    };

    const timeout = setTimeout(tryLoadAd, 1000);

    // ✅ Watch for iframe (means ad loaded)
    const checkAd = setInterval(() => {
      const iframe = el.querySelector("iframe");
      if (iframe && iframe.offsetHeight > 0) {
        setAdReady(true);
        clearInterval(checkAd);
      }
    }, 800);

    // Stop checking after 10s
    setTimeout(() => clearInterval(checkAd), 10000);

    return () => {
      clearTimeout(timeout);
      clearInterval(checkAd);
    };
  }, [showAd]);

  return (
    <div
      className={`w-full flex justify-center transition-all duration-500 ${
        adReady ? "opacity-100 my-4" : "opacity-0 my-0"
      }`}
      style={{
        height: adReady ? "auto" : "0px",
        overflow: "hidden",
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: adReady ? "block" : "none",
          width: "100%",
          textAlign: "center",
        }}
        data-ad-client="ca-pub-2964380688781577"
        data-ad-slot="6742057847"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
