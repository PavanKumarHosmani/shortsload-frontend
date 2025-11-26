import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us — FB Video Downloader Online</title>

        <meta
          name="description"
          content="Contact FBVideoDownloaderOnline.com for support, feedback, DMCA requests, or business inquiries. Get help for Facebook Video Downloader, Instagram Downloader, and other tools."
        />
        <meta
          name="keywords"
          content="FB Video Downloader Online contact, support, DMCA, help, customer service, facebook downloader contact"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://fbvideodownloaderonline.com/contact"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Contact Us — FB Video Downloader Online"
        />
        <meta
          property="og:description"
          content="Get support, DMCA help, or business inquiries for FBVideoDownloaderOnline.com."
        />
        <meta
          property="og:url"
          content="https://fbvideodownloaderonline.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FB Video Downloader Online" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              mainEntity: {
                "@type": "Organization",
                name: "FB Video Downloader Online",
                url: "https://fbvideodownloaderonline.com",
                email: "contact@fbvideodownloaderonline.com",
                sameAs: [
                  "https://facebook.com",
                  "https://twitter.com",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Support",
                  email: "contact@fbvideodownloaderonline.com",
                  areaServed: "Worldwide",
                  availableLanguage: ["English"],
                },
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How can I contact support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can reach support at contact@fbvideodownloaderonline.com — replies within 1–2 business days.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I submit a DMCA request?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Visit the DMCA page to submit a copyright complaint. All valid requests are reviewed within 48–72 hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you collect personal data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FBVideoDownloaderOnline.com does not collect or store any personal data. All processing is client-side.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <p className="mb-4">
          Have a question, issue, or business inquiry? The{" "}
          <strong>FB Video Downloader Online</strong> team is here to help. Whether
          it's the <strong>Facebook Video Downloader</strong>,{" "}
          <strong>Instagram Downloader</strong>, or any other tool, we’re
          available.
        </p>

        <p className="mb-4">
          📧 Email us directly:{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:contact@fbvideodownloaderonline.com"
          >
            contact@fbvideodownloaderonline.com
          </a>
        </p>

        <p className="mb-4">
          Typical response time: <strong>1–2 business days</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">🛠 Technical Support</h2>
        <p className="mb-4">Include these details for faster help:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Which tool you were using</li>
          <li>Device & browser (e.g., Chrome on Android)</li>
          <li>A short explanation or screenshot</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          📄 DMCA / Copyright Issues
        </h2>
        <p className="mb-4">
          Visit our{" "}
          <a href="/dmca" className="text-blue-600 underline">
            DMCA page
          </a>{" "}
          to submit a copyright complaint. All valid requests are reviewed within{" "}
          <strong>48–72 hours</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          🤝 Business & Partnerships
        </h2>
        <p className="mb-4">
          Use the subject line <strong>“Business Inquiry”</strong> for
          collaborations.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">🔗 Quick Links</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <a
              className="text-blue-600 underline"
              href="/facebookvideodownloader"
            >
              Facebook Video Downloader
            </a>
          </li>
          <li>
            <a
              className="text-blue-600 underline"
              href="/instagramvideodownloader"
            >
              Instagram Video Downloader
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
