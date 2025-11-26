import Head from "next/head";

export default function DMCA() {
  return (
    <>
      <Head>
        <title>DMCA / Copyright Policy — fbvideodownloaderonline.com</title>

        <meta
          name="description"
          content="Official DMCA and Copyright Policy for fbvideodownloaderonline.com. Learn how to submit takedown notices and report copyright infringement."
        />

        <meta
          name="keywords"
          content="FB video downloader DMCA, Facebook downloader copyright policy, fbvideodownloaderonline DMCA, copyright takedown, infringement notice"
        />

        <link
          rel="canonical"
          href="https://fbvideodownloaderonline.com/dmca"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "DMCA / Copyright Policy — fbvideodownloaderonline.com",
              url: "https://fbvideodownloaderonline.com/dmca",
              description:
                "DMCA and copyright takedown policy for fbvideodownloaderonline.com — including how to submit infringement complaints.",
              publisher: {
                "@type": "Organization",
                name: "fbvideodownloaderonline.com",
                url: "https://fbvideodownloaderonline.com",
                sameAs: [],
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">DMCA / Copyright Policy</h1>

        <p className="mb-4">
          <strong>fbvideodownloaderonline.com</strong> respects the intellectual
          property rights of content creators, publishers, and rights holders.
          We operate in full compliance with the Digital Millennium Copyright
          Act (DMCA) and applicable international copyright standards.
        </p>

        <p className="mb-4">
          fbvideodownloaderonline.com does not host or store any copyrighted
          videos on its servers. All Facebook videos accessed through our tool
          are retrieved directly from publicly available Facebook servers or
          CDNs. Our service functions only as a temporary client-side processor
          based on user request. No media is stored, copied, or archived by us.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Copyright Compliance
        </h2>
        <p className="mb-4">
          Our platform is built only for educational and personal use. Users
          are responsible for ensuring that their actions comply with copyright
          laws in their country. Downloading copyrighted Facebook content
          without permission from the owner is strictly prohibited.
        </p>

        <p className="mb-4">
          fbvideodownloaderonline.com does not condone or support unauthorized
          sharing, downloading, or distribution of copyrighted material.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Submitting a DMCA Takedown Notice
        </h2>
        <p className="mb-4">
          If you believe your copyrighted material is being referenced or linked
          improperly through our platform, please submit a DMCA notice to:
        </p>

        <p className="mb-4">
          Email:{" "}
          <a
            href="mailto:contact@fbvideodownloaderonline.com"
            className="text-blue-600 underline"
          >
            contact@fbvideodownloaderonline.com
          </a>
        </p>

        <p>Please include:</p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Your full legal name and contact information.</li>
          <li>Proof of ownership or authorization.</li>
          <li>The exact URL(s) of the allegedly infringing content.</li>
          <li>
            A statement of good-faith belief that the content is used without
            authorization.
          </li>
          <li>
            A statement under penalty of perjury that the information provided is
            accurate.
          </li>
          <li>Your physical or digital signature.</li>
        </ul>

        <p className="mb-4">
          Valid DMCA notices are processed within{" "}
          <strong>48–72 business hours</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Counter-Notification
        </h2>
        <p className="mb-4">
          If you believe your content was wrongly removed or flagged, you may
          file a counter-notification by emailing:
        </p>

        <p className="mb-4">
          <a
            href="mailto:contact@fbvideodownloaderonline.com"
            className="text-blue-600 underline"
          >
            contact@fbvideodownloaderonline.com
          </a>
        </p>

        <p>Your message must include:</p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Your full name and contact details.</li>
          <li>The URL that was removed or disabled.</li>
          <li>An explanation of why the removal was erroneous.</li>
          <li>
            A statement under penalty of perjury that you consent to the
            jurisdiction of your local courts.
          </li>
          <li>Your digital or physical signature.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Legal & Fair Use
        </h2>
        <p className="mb-4">
          Our tool is intended only for downloading publicly available Facebook
          videos for personal, non-commercial use. We do not store, index, or
          archive any media. All processing occurs in real-time on the client
          side.
        </p>

        <p className="mb-4">
          Users must follow Facebook's Terms of Use and applicable copyright
          laws.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Contact Information
        </h2>
        <address className="not-italic mb-6">
          <strong>DMCA Agent — fbvideodownloaderonline.com</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:contact@fbvideodownloaderonline.com"
            className="text-blue-600 underline"
          >
            contact@fbvideodownloaderonline.com
          </a>
          <br />
          Response Time: 48–72 hours (business days)
        </address>

        <p className="text-sm text-gray-600 mt-6">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
