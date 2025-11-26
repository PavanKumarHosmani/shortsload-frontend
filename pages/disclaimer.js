import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer — FB Video Downloader Online</title>

        <meta
          name="description"
          content="Official Disclaimer for FB Video Downloader Online — covering copyright policy, fair use guidelines, limitations of liability, and legal policies for our free Instagram video downloader."
        />

        <meta
          name="keywords"
          content="FB Video Downloader Online disclaimer, Instagram downloader legal notice, fair use policy, video downloader disclaimer"
        />

        <link rel="canonical" href="https://www.fbvideodownloaderonline.com/disclaimer" />

        {/* OpenGraph SEO */}
        <meta property="og:title" content="Disclaimer — FB Video Downloader Online" />
        <meta
          property="og:description"
          content="Legal disclaimer for FB Video Downloader Online — copyright, fair use, liabilities, and more."
        />
        <meta property="og:url" content="https://www.fbvideodownloaderonline.com/disclaimer" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Disclaimer — FB Video Downloader Online" />
        <meta
          name="twitter:description"
          content="Legal disclaimer for FB Video Downloader Online — copyright, fair use, liabilities, and more."
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Disclaimer",
              url: "https://www.fbvideodownloaderonline.com/disclaimer",
              inLanguage: "en",
              isPartOf: {
                "@type": "WebSite",
                name: "FB Video Downloader Online",
                url: "https://www.fbvideodownloaderonline.com",
              },
              publisher: {
                "@type": "Organization",
                name: "FB Video Downloader Online",
                url: "https://www.fbvideodownloaderonline.com",
                sameAs: [
                  "https://facebook.com/fbvideodownloaderonline",
                  "https://twitter.com/fbvideodownloader",
                ],
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>

        <p className="mb-4">
          The tools and information provided by <strong>FB Video Downloader Online</strong> are intended for educational and general informational purposes only. We strive for accuracy but make no guarantees regarding completeness or performance.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. External Links Disclaimer</h2>
        <p className="mb-4">
          Our website may include links to third-party services. We do not own, operate, or guarantee the content or accuracy of external websites. Use them at your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Fair Use & Copyright Disclaimer</h2>
        <p className="mb-4">
          FB Video Downloader Online does not host or store copyrighted videos. All downloads occur via official Instagram CDNs. Users must comply with fair use and copyright laws.
        </p>

        <p className="mb-4">
          If you believe your copyrighted material is being used improperly, visit our{" "}
          <a href="/dmca" className="text-blue-600 underline">
            DMCA / Copyright Policy
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Tool Usage Disclaimer</h2>
        <p className="mb-4">
          Our Instagram video downloader is provided “as is.” We cannot guarantee uninterrupted operation or error-free service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          FB Video Downloader Online and its developers shall not be liable for any damages arising from use of the website, tools, or content.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. No Affiliation Disclaimer</h2>
        <p className="mb-4">
          FB Video Downloader Online is independent and not affiliated with Instagram, Facebook, or any other company. All trademarks belong to their respective owners.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates to This Disclaimer</h2>
        <p className="mb-4">
          We may update this disclaimer at any time. Continued use of the website implies acceptance of the updated terms.
        </p>

        <p className="mt-6">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
