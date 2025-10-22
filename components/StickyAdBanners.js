"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyAdBanners() {
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  // ✅ Lazy-load ads after user interaction
  useEffect(() => {
    const showAds = () => setVisible(true);
    window.addEventListener("scroll", showAds, { once: true });
    window.addEventListener("click", showAds, { once: true });
    return () => {
      window.removeEventListener("scroll", showAds);
      window.removeEventListener("click", showAds);
    };
  }, []);

  // ✅ Load and validate AdSense ad fills
  useEffect(() => {
    if (!visible) return;

    // Inject script only once
    if (!document.querySelector("script[data-adsbygoogle]")) {
      const s = document.createElement("script");
      s.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577";
      s.async = true;
      s.crossOrigin = "anonymous";
      s.setAttribute("data-adsbygoogle", "true");
      document.body.appendChild(s);
    }

    const tryPush = (ref, setShow) => {
      if (!ref.current) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        // Check if ad iframe appears
        const checkAdFilled = setInterval(() => {
          const iframe = ref.current.querySelector("iframe");
          if (iframe && iframe.offsetHeight > 0) {
            setShow(true);
            clearInterval(checkAdFilled);
          }
        }, 800);

        // Stop checking after 5s (no ad served)
        setTimeout(() => clearInterval(checkAdFilled), 5000);
      } catch (e) {
        console.warn("AdSense push error:", e);
      }
    };

    tryPush(topRef, setShowTop);
    tryPush(bottomRef, setShowBottom);
  }, [visible]);

  // ❌ Don’t render at all before user interacts
  if (!visible) return null;

  return (
    <>
      {/* 🟦 Sticky Top Ad — shown only if ad loaded */}
      {showTop && (
        <div
          className="fixed top-0 left-0 w-full z-40 flex justify-center bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          style={{ height: "60px" }}
        >
          <ins
            ref={topRef}
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              height: "60px",
              textAlign: "center",
            }}
            data-ad-client="ca-pub-2964380688781577"
            data-ad-slot="7299433371"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      )}

      {/* 🟨 Sticky Bottom Ad — shown only if ad loaded */}
      {showBottom && (
        <div
          className="fixed bottom-0 left-0 w-full z-40 flex justify-center bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-inner"
          style={{ height: "60px" }}
        >
          <ins
            ref={bottomRef}
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              height: "60px",
              textAlign: "center",
            }}
            data-ad-client="ca-pub-2964380688781577"
            data-ad-slot="1844120239"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      )}

      {/* Add spacers only if the ad is visible */}
      {showTop && <div className="h-[60px]" />}
      {showBottom && <div className="h-[60px]" />}
    </>
  );
}
