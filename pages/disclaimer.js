import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer — ShortsLoad</title>
        <meta
          name="description"
          content="Read the official Disclaimer for ShortsLoad.com — explaining limitations of liability, copyright, and third-party content responsibility."
        />
        <link rel="canonical" href="https://shortsload.com/disclaimer" />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>

        <p className="mb-4">
          The information provided by <strong>ShortsLoad.com</strong> (“we,” “us,” or “our”)
          is for general informational purposes only. All content available on our website
          is provided in good faith; however, we make no representation or warranty of any kind,
          express or implied, regarding the accuracy, adequacy, validity, reliability,
          availability, or completeness of any information on the site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. External Links Disclaimer
        </h2>
        <p className="mb-4">
          ShortsLoad.com may contain links to other websites or third-party content
          originating from or belonging to other websites or organizations. Such external
          links are not investigated, monitored, or checked for accuracy or reliability
          by us. We do not endorse, guarantee, or assume responsibility for the accuracy
          or reliability of any information offered by third-party websites linked through
          our site or any site or feature linked in any banner or other advertising.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Fair Use & Copyright Disclaimer
        </h2>
        <p className="mb-4">
          ShortsLoad does not host any copyrighted content. All videos downloaded via
          ShortsLoad are fetched directly from YouTube’s public content delivery network
          (CDN). Our service is intended strictly for <strong>personal, educational,
          or fair-use purposes</strong>. Users are solely responsible for ensuring that
          downloaded content is used in compliance with applicable copyright laws.
        </p>
        <p className="mb-4">
          We do not encourage, promote, or condone downloading copyrighted content without
          the consent of the content owner. If you believe your copyrighted material has
          been misused, please see our <a href="/dmca" className="text-blue-600 underline">
          DMCA / Copyright Policy</a> page for takedown instructions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Limitation of Liability
        </h2>
        <p className="mb-4">
          Under no circumstances shall ShortsLoad.com or its developers be held liable
          for any direct, indirect, incidental, or consequential damages arising out of
          the use of or inability to use the website or downloaded files.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Advertising Disclaimer
        </h2>
        <p className="mb-4">
          Our website may display advertisements through trusted third-party ad networks
          like <strong>Adsterra</strong> or <strong>Google AdSense</strong>. These ads help
          us maintain the service for free. We do not control the content of these ads.
          Clicking on them is at your own discretion, and we are not responsible for
          any outcome or experience with advertised services or products.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Changes to This Disclaimer
        </h2>
        <p className="mb-4">
          We reserve the right to update or modify this Disclaimer at any time without
          prior notice. Users are encouraged to check this page periodically to stay informed.
        </p>

        <p className="mt-6">
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}
