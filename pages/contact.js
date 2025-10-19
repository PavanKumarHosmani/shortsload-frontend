import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us — ShortsLoad</title>
        <meta
          name="description"
          content="Get in touch with ShortsLoad.com for support, feedback, DMCA takedowns, or general inquiries about our YouTube Shorts Downloader."
        />
        <meta
          name="keywords"
          content="ShortsLoad contact, YouTube Shorts Downloader support, ShortsLoad email, ShortsLoad feedback, DMCA contact, ShortsLoad help"
        />
        <link rel="canonical" href="https://shortsload.com/contact" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                name: "ShortsLoad",
                url: "https://shortsload.com",
                email: "contact@shortsload.com",
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
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <p className="mb-4">
          Have a question, suggestion, or concern? At <strong>ShortsLoad.com</strong>,
          we value your feedback and are here to help with any inquiries related to
          our <strong>YouTube Shorts Downloader</strong>. Whether you need technical
          assistance, want to report a bug, or have copyright-related questions,
          we’ll respond as soon as possible.
        </p>

        <p className="mb-4">
          You can reach us directly by email at:{" "}
          <a
            href="mailto:contact@shortsload.com"
            className="text-blue-600 underline"
          >
            contact@shortsload.com
          </a>
        </p>

        <p className="mb-4">
          Typical response time: <strong>1–2 business days</strong> (excluding weekends
          and public holidays).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Support Inquiries</h2>
        <p className="mb-4">
          For technical support or assistance with downloads, please include the
          following details in your email:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>The YouTube Shorts link you tried to download</li>
          <li>Browser and device (e.g., Chrome on Android, Safari on iPhone)</li>
          <li>A brief description of the issue</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">DMCA / Copyright Complaints</h2>
        <p className="mb-4">
          If you believe your copyrighted work is being misused via ShortsLoad,
          please visit our{" "}
          <a href="/dmca" className="text-blue-600 underline">
            DMCA / Copyright Policy
          </a>{" "}
          page for detailed instructions on submitting a valid takedown notice.
          Our compliance team reviews all legitimate DMCA requests within{" "}
          <strong>48–72 hours</strong>.
        </p>

        <h2 className="text-xl font-semibold mb-3">Business & Partnership</h2>
        <p className="mb-4">
          For advertising inquiries, collaborations, or partnership opportunities,
          please include <strong>“Business Inquiry”</strong> in your email subject
          line. We’re open to ethical partnerships that align with ShortsLoad’s
          privacy-first and ad-safe principles.
        </p>


        {/* ✅ SEO + User Trust Section */}
        <section className="mt-10 space-y-3 text-gray-700">
          <h2 className="text-xl font-semibold">Why Contact ShortsLoad?</h2>
          <p>
            <strong>ShortsLoad</strong> is built with a mission to simplify
            <strong> YouTube Shorts downloads</strong> while maintaining a safe,
            ad-friendly, and privacy-focused environment. Your feedback helps us
            improve our performance, add new features like playlist support, and
            enhance compatibility with browsers and devices.
          </p>
          <p>
            We take every message seriously and ensure that user data is not
            stored, sold, or shared. Your communication remains confidential and
            secure in compliance with global data protection standards.
          </p>
          <p>
            Thank you for choosing ShortsLoad — your trusted tool for downloading
            YouTube Shorts quickly, securely, and without watermark.
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
