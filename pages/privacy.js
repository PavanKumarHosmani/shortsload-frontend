import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — ShortsLoad</title>
        <meta
          name="description"
          content="Read the complete privacy policy for ShortsLoad.com — learn how we handle cookies, data, and user privacy while using our YouTube Shorts Downloader."
        />
        <meta
          name="keywords"
          content="ShortsLoad Privacy Policy, YouTube Shorts Downloader privacy, data protection, cookies policy, Adsterra privacy, online video downloader privacy"
        />
        <link rel="canonical" href="https://shortsload.com/privacy" />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to <strong>ShortsLoad.com</strong>. Your privacy is important to us. 
          This Privacy Policy explains how we collect, use, and protect your information when you use our 
          <strong> YouTube Shorts Downloader</strong> and related tools. By using our service, 
          you agree to this Privacy Policy and our Terms of Service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We respect your right to privacy. ShortsLoad does not collect any personally identifiable
          information such as your name, email address, or contact details. We only collect basic 
          non-personal data like:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Browser type and device information</li>
          <li>Anonymous usage analytics (page views, time spent, click activity)</li>
          <li>Approximate location (city/country level) via IP-based analytics</li>
        </ul>
        <p>
          This helps us understand how users interact with our site and improve the user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookies and Tracking</h2>
        <p className="mb-4">
          We may use cookies or similar technologies to improve site performance and user experience. 
          Cookies are small files stored on your device that help remember preferences or measure site traffic. 
          You can disable cookies in your browser settings at any time.
        </p>
        <p>
          Our partners, such as advertising or analytics services, may also use cookies for their own tracking purposes. 
          These third-party cookies are governed by their respective privacy policies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Information</h2>
        <p className="mb-4">
          Any collected data is used solely to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Optimize website performance and loading speed</li>
          <li>Enhance the accuracy of our YouTube Shorts Downloader</li>
          <li>Display non-intrusive, relevant advertisements</li>
          <li>Analyze traffic patterns and detect errors</li>
        </ul>
        <p>
          We do not share, sell, or trade your data with any unauthorized third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Ads and Links</h2>
        <p className="mb-4">
          ShortsLoad may display third-party ads from trusted networks like <strong>Adsterra</strong>. 
          These ads help keep the service free. Advertisers may use cookies or similar tools to display 
          relevant ads based on your general browsing behavior, but they cannot personally identify you.
        </p>
        <p>
          Our website may also contain links to external sites (e.g., YouTube, blogs, tools). 
          We are not responsible for the privacy practices or content of those websites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We use secure HTTPS connections and modern encryption standards to ensure that 
          your browsing experience remains private and protected. Since ShortsLoad performs 
          most of its processing directly in your browser (client-side), no video or personal 
          data is uploaded to our servers.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. User Rights (GDPR & CCPA)</h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your data:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Right to access and know what data is collected</li>
          <li>Right to request deletion of any identifiable data</li>
          <li>Right to opt out of cookie tracking and personalized ads</li>
        </ul>
        <p>
          If you wish to exercise these rights, please contact us using the email address below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          ShortsLoad reserves the right to update or modify this Privacy Policy at any time. 
          Updated versions will be posted on this page with the revised date. 
          Continued use of the site implies acceptance of these changes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy, 
          please contact our support team at{" "}
          <a
            href="mailto:support@shortsload.com"
            className="text-blue-600 hover:underline"
          >
            support@shortsload.com
          </a>
          .
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* ✅ SEO Boosted Section */}
        <section className="mt-10 text-gray-700 space-y-3">
          <h2 className="text-xl font-semibold">Why Privacy Matters at ShortsLoad</h2>
          <p>
            Unlike many online downloaders, <strong>ShortsLoad</strong> runs securely in your browser 
            without collecting or storing any user content. It’s a fast, private, and safe way to 
            download YouTube Shorts in HD without installing any software. 
          </p>
          <p>
            We believe in full transparency and ethical handling of user data. 
            Our goal is to make digital tools accessible and privacy-friendly — 
            ensuring compliance with Google AdSense, Adsterra, GDPR, and international privacy standards.
          </p>
        </section>
      </main>
    </>
  );
}
