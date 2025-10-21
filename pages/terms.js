import Head from "next/head";

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of Use — ShortsLoad & JPGtoPDF</title>
        <meta
          name="description"
          content="Read the official Terms of Use for ShortsLoad & JPGtoPDF. Learn about user rights, copyright compliance, ad policies, and limitations when using our online tools."
        />
        <meta
          name="keywords"
          content="ShortsLoad Terms, JPGtoPDF Terms, YouTube Downloader agreement, AdSense policy, Adsterra disclaimer, copyright compliance"
        />
        <link rel="canonical" href="https://shortsload.com/terms" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TermsOfService",
              name: "Terms of Use — ShortsLoad & JPGtoPDF",
              url: "https://shortsload.com/terms",
              description:
                "Official Terms of Use for ShortsLoad and JPGtoPDF, outlining user responsibilities, copyright laws, data practices, and ad disclosures.",
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
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>

        <p className="mb-4">
          Welcome to <strong>ShortsLoad.com</strong> and{" "}
          <strong>JPGtoPDF.com</strong>. By accessing or using any of our
          services — including YouTube Shorts Downloader, Instagram Downloader,
          or file tools such as JPG to PDF, Compress Image, Merge PDF, or PDF to
          JPG — you agree to comply with these Terms of Use and our{" "}
          <a href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          . If you do not agree, please stop using our services immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Legal Usage</h2>
        <p className="mb-4">
          ShortsLoad provides web-based tools that allow users to interact with
          publicly available content from platforms such as YouTube, Facebook,
          and Instagram. These tools are intended strictly for{" "}
          <strong>personal, educational, or fair-use purposes</strong>.
        </p>
        <p className="mb-4">
          You agree not to use ShortsLoad or JPGtoPDF to download, distribute, or
          modify copyrighted content without permission. Users are solely
          responsible for ensuring their activities comply with applicable laws.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. No Affiliation</h2>
        <p className="mb-4">
          ShortsLoad and JPGtoPDF are independent platforms and have no
          affiliation with <strong>YouTube</strong>,{" "}
          <strong>Google LLC</strong>, <strong>Meta Platforms</strong> (Facebook
          & Instagram), or any third-party website. All trademarks belong to
          their respective owners.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
        <p className="mb-4">
          By using our websites, you agree that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>You will not use our tools for illegal or malicious purposes.</li>
          <li>
            You will not attempt to disrupt, overload, or reverse-engineer the
            platform.
          </li>
          <li>
            You will respect third-party copyrights and adhere to{" "}
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              YouTube’s Terms of Service
            </a>
            .
          </li>
          <li>
            You understand that downloading copyrighted material without
            permission may violate laws in your jurisdiction.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Advertising and Revenue</h2>
        <p className="mb-4">
          Our websites display ads from trusted ad networks like{" "}
          <strong>Google AdSense</strong> and <strong>Adsterra</strong> to
          support free access to our services. These ads may use cookies to show
          relevant content. ShortsLoad and JPGtoPDF do not endorse or control
          third-party ads. Interactions with advertisers are solely at your own
          risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Disclaimer of Warranties
        </h2>
        <p className="mb-4">
          The services provided by ShortsLoad and JPGtoPDF are offered “as is”
          and “as available,” without any warranty of reliability, security, or
          error-free operation. We make no guarantees regarding the accuracy of
          conversions, video availability, or continuous uptime.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          In no event shall ShortsLoad, JPGtoPDF, or their developers be liable
          for any direct, indirect, incidental, or consequential damages arising
          from the use or inability to use the service — including, but not
          limited to, loss of data, copyright disputes, or device malfunction.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Content</h2>
        <p className="mb-4">
          Our websites may contain links or ads leading to third-party sites.
          These are provided for user convenience only. We are not responsible
          for the availability, accuracy, or safety of any external content or
          services linked through our platforms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. Intellectual Property
        </h2>
        <p className="mb-4">
          All intellectual property, including text, layout, branding, and
          design elements on ShortsLoad and JPGtoPDF, are owned or licensed by
          us. You may not copy, modify, or redistribute any part of our websites
          without written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          9. Modifications to Service
        </h2>
        <p className="mb-4">
          We reserve the right to modify, update, or discontinue any part of our
          services or terms without prior notice. It is your responsibility to
          review these Terms periodically. Continued use after changes implies
          acceptance of the revised Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          10. Governing Law
        </h2>
        <p className="mb-4">
          These Terms of Use are governed by the laws of your local jurisdiction.
          Any disputes arising from your use of our services shall be resolved
          through competent courts in your region or country of residence.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          11. Contact Information
        </h2>
        <p className="mb-4">
          For questions, feedback, or legal concerns regarding these Terms,
          please contact us at{" "}
          <a
            href="mailto:support@shortsload.com"
            className="text-blue-600 underline"
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
          <h2 className="text-xl font-semibold">
            About ShortsLoad & JPGtoPDF
          </h2>
          <p>
            <strong>ShortsLoad</strong> and{" "}
            <strong>JPGtoPDF</strong> provide free, privacy-friendly web tools
            for downloading, converting, and managing digital content. Our tools
            run entirely within your browser using technologies like{" "}
            <strong>FFmpeg</strong> and <strong>WebAssembly</strong>, ensuring
            100% privacy and no file uploads to servers.
          </p>
          <p>
            We comply with major ad and data regulations, including{" "}
            <strong>Google AdSense</strong>, <strong>Adsterra</strong>,{" "}
            <strong>GDPR</strong>, and <strong>CCPA</strong>, ensuring that our
            services remain free, transparent, and user-safe.
          </p>
          <p>
            By continuing to use our websites, you acknowledge that ShortsLoad
            and JPGtoPDF are neutral tools, and you assume full responsibility
            for how you use downloaded or converted materials.
          </p>
        </section>
      </main>
    </>
  );
}
