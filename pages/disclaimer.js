import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer — ShortsLoad & JPGtoPDF</title>
        <meta
          name="description"
          content="Official Disclaimer for ShortsLoad & JPGtoPDF — outlining copyright policy, fair use terms, and limitations of liability for our free video and file tools."
        />
        <meta
          name="keywords"
          content="ShortsLoad disclaimer, JPGtoPDF disclaimer, ShortsLoad terms, ShortsLoad legal notice, AdSense policy, ShortsLoad copyright notice"
        />
        <link rel="canonical" href="https://shortsload.com/disclaimer" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Disclaimer — ShortsLoad & JPGtoPDF",
              url: "https://shortsload.com/disclaimer",
              description:
                "Legal disclaimer for ShortsLoad & JPGtoPDF, covering copyright, fair use, ad responsibility, and liability limitations.",
              mainEntity: {
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
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>

        <p className="mb-4">
          The information and tools provided by{" "}
          <strong>ShortsLoad.com</strong> and{" "}
          <strong>JPGtoPDF.com</strong> (“we,” “us,” or “our”) are for general
          informational and educational purposes only. All content and utilities
          are provided in good faith; however, we make no representation or warranty
          regarding the accuracy, adequacy, reliability, availability, or completeness
          of any information or functionality on our websites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. External Links Disclaimer</h2>
        <p className="mb-4">
          Our websites may contain links to other external sites or third-party
          services that are not owned or controlled by us. While we strive to provide
          quality links, we do not monitor or verify the accuracy or reliability of
          external content. Clicking on third-party links or advertisements is at your
          own discretion, and we are not responsible for any resulting experiences,
          losses, or damages.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Fair Use & Copyright Disclaimer</h2>
        <p className="mb-4">
          <strong>ShortsLoad</strong> does not host, store, or distribute any
          copyrighted videos or files. All downloads and conversions occur directly
          between the user’s browser and the official content delivery network (CDN)
          of the source platform — such as Facebook or Instagram. Our tools are meant
          exclusively for <strong>personal, educational, or fair use purposes</strong>.
        </p>
        <p className="mb-4">
          Users are fully responsible for how they use downloaded content and must
          comply with local copyright laws. We do not encourage or condone the use of
          our tools to download copyrighted material without permission. If you believe
          your copyrighted material has been improperly accessed, please see our{" "}
          <a href="/dmca" className="text-blue-600 underline">
            DMCA / Copyright Policy
          </a>{" "}
          page for takedown instructions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Tool Usage Disclaimer</h2>
        <p className="mb-4">
          Our free tools — including video downloaders and file converters such as
          <strong> JPG to PDF</strong>, <strong>Compress Image</strong>,{" "}
          <strong>Merge PDF</strong>, and <strong>PDF to JPG</strong> — are provided
          “as-is.” While we make every effort to maintain availability and security,
          we cannot guarantee uninterrupted service or error-free operation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Advertising Disclaimer</h2>
        <p className="mb-4">
          ShortsLoad and JPGtoPDF display ads through reputable third-party ad networks
          such as <strong>Google AdSense</strong> and <strong>Adsterra</strong> to keep
          the service free. These advertisements are delivered by automated systems and
          may use cookies to serve relevant content.
        </p>
        <p className="mb-4">
          We do not control the content of ads or endorse the advertised products or
          services. Interactions with advertisers are solely between you and the
          advertiser, and we are not responsible for any outcomes resulting from such
          interactions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall ShortsLoad, JPGtoPDF, or their developers be held liable
          for any direct, indirect, incidental, consequential, or punitive damages
          arising from your use of our websites, tools, or content. Your use of our
          services and reliance on any information provided is strictly at your own
          risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. No Affiliation Disclaimer</h2>
        <p className="mb-4">
          ShortsLoad and JPGtoPDF are independent platforms. We are not affiliated with,
          endorsed by, or connected to YouTube, Meta Platforms (Facebook, Instagram),
          or Google LLC. All trademarks, logos, and brand names are the property of
          their respective owners.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates to This Disclaimer</h2>
        <p className="mb-4">
          We may revise or update this Disclaimer at any time without prior notice.
          Users are encouraged to revisit this page periodically to stay informed of
          any changes. Continued use of our sites after updates implies acceptance of
          the modified terms.
        </p>

        <p className="mt-6">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
