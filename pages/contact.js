import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us — ShortsLoad & JPGtoPDF</title>
        <meta
          name="description"
          content="Get in touch with ShortsLoad for support, feedback, DMCA takedowns, or business inquiries. Contact us for help with Instagram Video Downloader, Facebook Downloader, JPG to PDF, Compress Image, Merge PDF, and more."
        />
        <meta
          name="keywords"
          content="ShortsLoad contact, ShortsLoad support, ShortsLoad email, ShortsLoad DMCA, JPGtoPDF contact, ShortsLoad help, ShortsLoad business, ShortsLoad partnership"
        />
        <link rel="canonical" href="https://shortsload.com/contact" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              mainEntity: {
                "@type": "Organization",
                name: "ShortsLoad",
                url: "https://shortsload.com",
                email: "contact@shortsload.com",
                sameAs: [
                  "https://facebook.com/shortsload",
                  "https://twitter.com/shortsload",
                  "https://www.jpgstopdf.com",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Support",
                  email: "contact@shortsload.com",
                  areaServed: "Worldwide",
                  availableLanguage: ["English"],
                },
              },
            }),
          }}
        />

        {/* ✅ FAQ Schema for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How can I contact ShortsLoad support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can reach ShortsLoad directly by email at contact@shortsload.com. We usually respond within 1–2 business days.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does ShortsLoad provide technical assistance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. If you experience issues with downloading or converting files, email us with your device, browser, and a description of the issue.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I submit a DMCA takedown request?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can submit a DMCA or copyright complaint via our DMCA page. All verified requests are reviewed within 48–72 hours.",
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
          Have a question, suggestion, or issue? The{" "}
          <strong>ShortsLoad</strong> and <strong>JPGtoPDF</strong> team is here to help.
          Whether you need help with the{" "}
          <strong>Instagram Video Downloader</strong>,{" "}
          <strong>Facebook Downloader</strong>, or our{" "}
          <strong>file tools</strong> like <strong>JPG to PDF</strong> and{" "}
          <strong>Compress Image</strong>, we’ll get back to you quickly.
        </p>

        <p className="mb-4">
          📧 Contact us directly at:{" "}
          <a
            href="mailto:contact@shortsload.com"
            className="text-blue-600 underline"
          >
            contact@shortsload.com
          </a>
        </p>

        <p className="mb-4">
          Typical response time: <strong>1–2 business days</strong> (excluding weekends).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">🛠️ Technical Support</h2>
        <p className="mb-4">
          If you’re experiencing technical issues, please include these details in your message:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Which tool you were using (e.g., Instagram Downloader, JPG to PDF)</li>
          <li>Your device and browser (e.g., Chrome on Android, Safari on iPhone)</li>
          <li>A brief explanation or screenshot of the issue</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">📄 DMCA / Copyright Complaints</h2>
        <p className="mb-4">
          ShortsLoad respects copyright laws. If your content is being improperly linked or used,
          please visit our{" "}
          <a href="/dmca" className="text-blue-600 underline">
            DMCA / Copyright Policy
          </a>{" "}
          page for takedown instructions. All valid complaints are reviewed within{" "}
          <strong>48–72 hours</strong>.
        </p>

        <h2 className="text-xl font-semibold mb-3">🤝 Business & Collaboration</h2>
        <p className="mb-4">
          For partnerships or media inquiries, include{" "}
          <strong>“Business Inquiry”</strong> in your subject line.
          We welcome collaborations with ethical, tech-oriented, and educational brands.
        </p>

        <section className="mt-10 space-y-3 text-gray-700">
          <h2 className="text-xl font-semibold">Why Contact ShortsLoad?</h2>
          <p>
            <strong>ShortsLoad</strong> is an all-in-one platform for{" "}
            <strong>video downloads</strong> and <strong>file conversions</strong>.
            Our tools include the{" "}
            <strong>Instagram Video Downloader</strong>,{" "}
            <strong>Facebook Downloader</strong>, and{" "}
            <strong>JPGtoPDF utilities</strong> such as Compress Image, Merge PDF, and PDF to JPG.
          </p>
          <p>
            Every tool runs directly inside your browser — ensuring privacy, speed, and no
            external file uploads. Your data stays private while you get powerful results.
          </p>
          <p>
            We maintain a clean, <strong>privacy-compliant</strong> environment to make your
            experience as safe and user-friendly as possible.
          </p>
        </section>

        <section className="mt-10 text-gray-700">
          <h2 className="text-xl font-semibold mb-2">🛡️ User Privacy & Data Protection</h2>
          <p className="mb-3">
            Your privacy matters. ShortsLoad never collects or stores personal data.
            All downloads and conversions are processed locally in your browser for
            complete security and transparency.
          </p>
          <p className="mb-3">
            We do not use tracking or advertising cookies. No user information is shared
            or stored on our servers.
          </p>
        </section>

        <section className="mt-10 text-gray-700">
          <h2 className="text-xl font-semibold mb-2">🔗 Quick Links</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              📸{" "}
              <a href="/instagramvideodownloader" className="text-blue-600 underline">
                Instagram Video Downloader
              </a>
            </li>
            <li>
              📘{" "}
              <a href="/facebookvideodownloader" className="text-blue-600 underline">
                Facebook Video Downloader
              </a>
            </li>
            <li>
              📄{" "}
              <a
                href="https://www.jpgstopdf.com/jpgtopdf"
                className="text-blue-600 underline"
                target="_blank"
              >
                JPG to PDF Converter
              </a>
            </li>
            <li>
              🗜️{" "}
              <a
                href="https://www.jpgstopdf.com/compressimage"
                className="text-blue-600 underline"
                target="_blank"
              >
                Compress Image
              </a>
            </li>
            <li>
              🔗{" "}
              <a
                href="https://www.jpgstopdf.com/mergepdf"
                className="text-blue-600 underline"
                target="_blank"
              >
                Merge PDF
              </a>
            </li>
            <li>
              🖼️{" "}
              <a
                href="https://www.jpgstopdf.com/pdftojpg"
                className="text-blue-600 underline"
                target="_blank"
              >
                PDF to JPG Converter
              </a>
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
