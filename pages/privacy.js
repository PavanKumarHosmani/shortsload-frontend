import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — ShortsLoad & JPGtoPDF</title>
        <meta
          name="description"
          content="Read the complete privacy policy for ShortsLoad & JPGtoPDF. Learn how we handle cookies, analytics, and data protection while keeping your privacy safe."
        />
        <meta
          name="keywords"
          content="ShortsLoad Privacy Policy, JPGtoPDF Privacy, GDPR compliance, CCPA policy"
        />
        <link rel="canonical" href="https://shortsload.com/privacy" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivacyPolicy",
              name: "Privacy Policy — ShortsLoad & JPGtoPDF",
              url: "https://shortsload.com/privacy",
              description:
                "Official Privacy Policy for ShortsLoad and JPGtoPDF. Learn about our data handling, cookies, and privacy practices.",
              publisher: {
                "@type": "Organization",
                name: "ShortsLoad",
                url: "https://shortsload.com",
                sameAs: [
                  "https://facebook.com/shortsload",
                  "https://twitter.com/shortsload",
                  "https://www.jpgstopdf.com",
                ],
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to <strong>ShortsLoad.com</strong> and{" "}
          <strong>JPGtoPDF.com</strong>. Your privacy is our top priority. This
          Privacy Policy explains how we handle your data when you use our free
          online tools — including{" "}
          <strong>Instagram Video Downloader</strong>,{" "}
          <strong>Facebook Video Downloader</strong>, and{" "}
          <strong>file utilities</strong> like JPG to PDF, Compress Image, Merge
          PDF, and PDF to JPG.
        </p>

        <p className="mb-4">
          By using our website, you agree to this Privacy Policy and consent to
          our use of cookies as outlined below. If you do not agree, please
          discontinue use of our site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          <strong>ShortsLoad</strong> does not collect any personally identifiable
          information (such as your name, address, or contact details). However,
          like most websites, we collect limited, non-personal information to
          maintain and improve our services. This may include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Browser type, operating system, and device type</li>
          <li>Anonymous usage analytics (page visits, time spent, errors)</li>
          <li>Approximate location (city/country, not GPS)</li>
        </ul>

        <p>
          This information is collected using privacy-compliant analytics tools
          and is never linked to your personal identity.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookies</h2>
        <p className="mb-4">
          Our site may use cookies to improve functionality and recognize your
          preferences. Cookies are small text files stored in your browser to
          enhance your browsing experience.
        </p>
        <p>
          You can disable cookies in your browser settings if you prefer not to
          have them stored on your device.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Data</h2>
        <p className="mb-4">
          We use aggregated, anonymous data strictly for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Improving site speed, design, and user experience</li>
          <li>Detecting technical issues and errors</li>
          <li>Maintaining analytics for performance and uptime</li>
        </ul>

        <p>
          We never sell or rent your data. We only share limited technical
          information with analytics partners who comply with GDPR and CCPA
          standards.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          <strong>ShortsLoad</strong> operates using secure HTTPS connections to
          protect data in transit. All video and file conversions occur
          client-side in your browser, meaning no video, image, or document is
          uploaded or stored on our servers.
        </p>
        <p>
          Our infrastructure follows industry-standard data protection practices
          to safeguard against unauthorized access.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
        <p className="mb-4">
          Our site may contain links to external services such as{" "}
          <a
            href="https://www.jpgstopdf.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            JPGtoPDF.com
          </a>
          , Facebook, or Instagram. We are not responsible for the privacy
          policies or data handling practices of external sites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Your Rights (GDPR / CCPA)
        </h2>
        <p className="mb-4">
          Depending on your region, you may have the following rights:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Right to access and review what data we collect</li>
          <li>Right to request deletion of stored data</li>
          <li>Right to opt-out of analytics tracking</li>
          <li>Right to withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, email us at{" "}
          <a
            href="mailto:support@shortsload.com"
            className="text-blue-600 underline"
          >
            support@shortsload.com
          </a>
          . We respond to all verified requests within 30 days.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Policy for Children</h2>
        <p className="mb-4">
          ShortsLoad is not directed at children under the age of 13. We do not
          knowingly collect any data from minors. If you believe a child has
          submitted information, please contact us to remove it immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may revise this Privacy Policy occasionally. The “Last updated” date
          below reflects the latest version. Continued use of our site means you
          accept any changes made.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          For any questions or privacy-related requests, contact our support team at:{" "}
          <a
            href="mailto:support@shortsload.com"
            className="text-blue-600 underline"
          >
            support@shortsload.com
          </a>
        </p>

        <p className="text-sm text-gray-600 mt-6">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* ✅ SEO Boosted Section */}
        <section className="mt-10 text-gray-700 space-y-3">
          <h2 className="text-xl font-semibold">
            Why Privacy Matters at ShortsLoad & JPGtoPDF
          </h2>
          <p>
            <strong>ShortsLoad</strong> and <strong>JPGtoPDF</strong> are committed to
            providing free, secure online tools without compromising user safety.
            All downloads and file conversions happen locally in your browser,
            ensuring zero data retention or tracking of personal content.
          </p>
          <p>
            Our platform complies with <strong>GDPR</strong> and{" "}
            <strong>CCPA</strong> privacy laws, making it safe and transparent. We
            only use essential cookies for functionality and performance.
          </p>
          <p>
            We believe users should have full control over their data. That’s why
            ShortsLoad never asks for sign-ups, personal info, or file uploads —
            keeping your online experience 100% private and secure.
          </p>
        </section>
      </main>
    </>
  );
}
