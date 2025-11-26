import Head from "next/head";

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of Use — fbvideodownloaderonline.com</title>
        <meta
          name="description"
          content="Official Terms of Use for fbvideodownloaderonline.com. Learn about permitted usage, copyright compliance, privacy guidelines, and user responsibilities."
        />
        <meta
          name="keywords"
          content="Facebook video downloader terms, fbvideodownloaderonline terms, Facebook downloader policy, video downloader legal terms"
        />

        <link rel="canonical" href="https://fbvideodownloaderonline.com/terms" />

        {/* JSON-LD Schema for Terms of Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TermsOfService",
              name: "Terms of Use — fbvideodownloaderonline.com",
              url: "https://fbvideodownloaderonline.com/terms",
              description:
                "Terms of Use for fbvideodownloaderonline.com describing user rights, legal usage, copyright rules, and platform responsibilities.",
              publisher: {
                "@type": "Organization",
                name: "fbvideodownloaderonline.com",
                url: "https://fbvideodownloaderonline.com",
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>

        <p className="mb-4">
          Welcome to <strong>fbvideodownloaderonline.com</strong>. By accessing
          or using our tools—including the Facebook Video Downloader—you agree
          to these Terms of Use and our{" "}
          <a href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          . If you do not agree, please discontinue using our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Legal Usage</h2>
        <p className="mb-4">
          Our downloader tools are intended strictly for{" "}
          <strong>personal, educational, and fair-use purposes</strong>. Users
          are responsible for ensuring that downloaded content is used legally
          and complies with copyright laws.
        </p>

        <p className="mb-4">
          You agree not to download or distribute copyrighted material unless
          you have permission from the content owner or the material is
          copyright-free or allowed under fair-use provisions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. No Affiliation</h2>
        <p className="mb-4">
          fbvideodownloaderonline.com is not affiliated with, endorsed by, or
          connected to <strong>Meta Platforms Inc.</strong> (Facebook & Instagram)
          in any way. All product names and trademarks belong to their respective
          owners.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
        <p className="mb-4">By using our services, you agree:</p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Not to use our downloader for illegal or harmful activities.</li>
          <li>
            Not to download videos without the content owner's permission unless
            allowed by applicable laws.
          </li>
          <li>
            To follow{" "}
            <a
              className="text-blue-600 underline"
              target="_blank"
              href="https://www.facebook.com/terms"
            >
              Facebook Terms of Service
            </a>
            .
          </li>
          <li>Not to attempt to break, modify, or disrupt the platform.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Disclaimer of Warranties
        </h2>
        <p className="mb-4">
          The services on fbvideodownloaderonline.com are provided “as is” with
          no guarantees of uptime, availability, or accuracy. Video availability
          may depend on Facebook's platform and restrictions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not responsible for any damages—including copyright issues,
          data loss, or device problems—resulting from use of this site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Third-Party Content
        </h2>
        <p className="mb-4">
          Our website may link to third-party sites. We do not control or endorse
          external content, and we are not responsible for their accuracy,
          safety, or privacy practices.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Intellectual Property
        </h2>
        <p className="mb-4">
          The layout, branding, text, and design of fbvideodownloaderonline.com
          are protected by copyright. You may not copy or reuse our content
          without permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. Modifications to Terms
        </h2>
        <p className="mb-4">
          We may update or modify these Terms at any time. Continued use of the
          site after changes means you accept the updated Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          9. Applicable Law
        </h2>
        <p className="mb-4">
          These Terms are governed by the laws applicable in your region or
          country of residence.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          10. Contact Us
        </h2>
        <p className="mb-4">
          For legal queries or support, email us at{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:support@fbvideodownloaderonline.com"
          >
            support@fbvideodownloaderonline.com
          </a>
          .
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
