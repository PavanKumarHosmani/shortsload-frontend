import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — FBVideoDownloaderOnline (No Data Collection)</title>
        <meta
          name="description"
          content="Official Privacy Policy of FBVideoDownloaderOnline. Learn how we protect your privacy, collect no personal data, and process all files securely in your browser."
        />
        <meta
          name="keywords"
          content="Facebook video downloader privacy policy, fbvideodownloaderonline privacy, data protection, no data collection"
        />
        <link rel="canonical" href="https://fbvideodownloaderonline.com/privacy" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivacyPolicy",
              name: "Privacy Policy — FBVideoDownloaderOnline",
              url: "https://fbvideodownloaderonline.com/privacy",
              description:
                "Privacy Policy describing how FBVideoDownloaderOnline protects user data, stores no files, and operates with full client-side processing.",
              publisher: {
                "@type": "Organization",
                name: "FBVideoDownloaderOnline",
                url: "https://fbvideodownloaderonline.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://fbvideodownloaderonline.com/logo.png",
                },
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to <strong>FBVideoDownloaderOnline.com</strong>. Your privacy is extremely important to
          us. This Privacy Policy explains how we operate, what data we collect, and how we keep your
          information safe while using our tools, including:
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Facebook Video Downloader</li>
          <li>Instagram Video Downloader (if used)</li>
          <li>Any additional tools offered on our platform</li>
        </ul>

        <p>
          By using our website, you agree to this Privacy Policy. If you do not agree, please stop using our
          services.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>

        <p className="mb-4">
          <strong>We do NOT collect any personal information</strong> like your name, address, location,
          phone number, or email.
        </p>

        <p>We only collect basic, anonymous technical data:</p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Browser type & operating system</li>
          <li>Anonymous usage analytics (time spent, clicks, errors)</li>
          <li>Approximate location (country/city)</li>
        </ul>

        <p>This information cannot identify you and is used only to improve our service.</p>

        {/* SECTION 2 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookies</h2>

        <p className="mb-4">
          We use minimal cookies for functionality and basic analytics. No tracking or advertising cookies
          are used.
        </p>

        <p>You may disable cookies anytime without affecting core features.</p>

        {/* SECTION 3 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Data</h2>

        <p className="mb-4">Anonymous data is used only to:</p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Improve website performance</li>
          <li>Fix issues and errors</li>
          <li>Monitor traffic and detect misuse</li>
        </ul>

        <p>We never sell, rent, or share your data.</p>

        {/* SECTION 4 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>

        <p className="mb-4">
          <strong>All video processing happens directly in your browser.</strong> No videos or files are ever
          uploaded to our servers.
        </p>

        <p>We use secure HTTPS and follow industry security practices.</p>

        {/* SECTION 5 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>

        <p className="mb-4">
          Our website may contain links to Facebook, Instagram, or other platforms. We are not responsible
          for their content or privacy practices.
        </p>

        {/* SECTION 6 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights (GDPR / CCPA)</h2>

        <p className="mb-4">Depending on your region, you may:</p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Request access to your data</li>
          <li>Request deletion of analytics data</li>
          <li>Opt-out of analytics</li>
        </ul>

        <p>
          Email:{" "}
          <a
            href="mailto:support@fbvideodownloaderonline.com"
            className="text-blue-600 underline"
          >
            support@fbvideodownloaderonline.com
          </a>
        </p>

        {/* SECTION 7 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">7. Children’s Privacy</h2>

        <p className="mb-4">
          Our services are not intended for users under 13. We do not knowingly collect data from minors.
        </p>

        {/* SECTION 8 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>

        <p className="mb-4">This Privacy Policy may be updated from time to time.</p>

        {/* SECTION 9 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>

        <p>
          For any questions:{" "}
          <a
            href="mailto:support@fbvideodownloaderonline.com"
            className="text-blue-600 underline"
          >
            support@fbvideodownloaderonline.com
          </a>
        </p>

        <p className="text-sm text-gray-600 mt-6">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* SEO Add-on */}
        <section className="mt-10 text-gray-700 space-y-3">
          <h2 className="text-xl font-semibold">Your Privacy Is Our Priority</h2>
          <p>
            FBVideoDownloaderOnline processes everything locally in your browser and stores no files or
            personal information.
          </p>
        </section>
      </main>
    </>
  );
}
