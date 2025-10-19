import Head from "next/head";

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of Use — ShortsLoad</title>
        <meta
          name="description"
          content="Read the official Terms of Use for ShortsLoad.com. Understand user responsibilities, copyright rules, and limitations when using our YouTube Shorts Downloader."
        />
        <meta
          name="keywords"
          content="ShortsLoad Terms of Use, YouTube Shorts Downloader Terms, user agreement, ShortsLoad legal disclaimer, copyright notice"
        />
        <link rel="canonical" href="https://shortsload.com/terms" />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>

        <p className="mb-4">
          Welcome to <strong>ShortsLoad.com</strong>. By accessing or using this
          website, you agree to be bound by these Terms of Use and our{" "}
          <a
            href="/privacy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </a>
          . If you do not agree with these terms, you must stop using our
          service immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Legal Usage</h2>
        <p className="mb-4">
          ShortsLoad is designed as a free online tool to download{" "}
          <strong>YouTube Shorts</strong> videos that are publicly accessible on
          the YouTube platform. The tool is intended for personal, educational,
          and fair use only. Users must comply with all applicable copyright and
          intellectual property laws.
        </p>
        <p className="mb-4">
          You are solely responsible for how you use downloaded content. ShortsLoad
          strictly prohibits downloading copyrighted videos or re-uploading content
          for commercial gain without the explicit permission of the content owner.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. No Affiliation</h2>
        <p className="mb-4">
          ShortsLoad is an independent platform and has no affiliation, partnership,
          or endorsement from <strong>YouTube</strong>, <strong>Google LLC</strong>,
          or any of their subsidiaries. “YouTube” and “Google” are registered
          trademarks of Google LLC. The use of these names is purely for
          descriptive purposes and does not imply any association.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
        <p className="mb-4">
          By using ShortsLoad, you agree that:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>You will not use this tool for unlawful or harmful purposes.</li>
          <li>You will not attempt to disrupt or exploit the website in any manner.</li>
          <li>
            You will respect copyright owners’ rights and adhere to YouTube’s{" "}
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Terms of Service
            </a>
            .
          </li>
          <li>
            You understand that downloading copyrighted material without permission
            may violate laws in your jurisdiction.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Disclaimer of Warranties</h2>
        <p className="mb-4">
          The ShortsLoad service is provided “as is” and “as available.” We make no
          warranties or representations about the functionality, reliability, or
          accuracy of the website or its output. While we strive to provide a
          smooth and secure experience, we cannot guarantee that the website will
          be error-free, uninterrupted, or immune from external interference.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          ShortsLoad, its developers, or affiliates are not liable for any direct,
          indirect, incidental, or consequential damages arising from the use or
          inability to use our service. This includes — but is not limited to —
          data loss, copyright infringement, device damage, or legal consequences
          resulting from improper usage of downloaded materials.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Content</h2>
        <p className="mb-4">
          ShortsLoad may include external links or third-party advertisements (e.g.,
          <strong> Adsterra</strong>) to support our service. We are not responsible
          for the content, practices, or policies of third-party websites. Visiting
          these sites is at your own discretion and risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property</h2>
        <p className="mb-4">
          All content on ShortsLoad, including text, graphics, layout, and design,
          is owned by ShortsLoad.com or its licensors. You may not copy, modify,
          redistribute, or republish any part of this site without written
          permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Modifications to the Service</h2>
        <p className="mb-4">
          We reserve the right to modify, suspend, or discontinue any feature or
          service at any time without prior notice. We may also update these Terms
          periodically, and your continued use of ShortsLoad after such updates
          implies acceptance of the new Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
        <p className="mb-4">
          These Terms of Use are governed by and construed under the laws of your
          local jurisdiction, without regard to conflict of law principles. Any
          disputes shall be resolved in the courts of competent jurisdiction within
          your country or state of residence.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Information</h2>
        <p className="mb-4">
          If you have any questions regarding these Terms or encounter issues while
          using the site, please reach out to us at{" "}
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

        {/* ✅ SEO Add-on Section */}
        <section className="mt-10 text-gray-700 space-y-3">
          <h2 className="text-xl font-semibold">About ShortsLoad</h2>
          <p>
            <strong>ShortsLoad</strong> is a privacy-friendly, browser-based
            downloader for YouTube Shorts. It uses safe, client-side technology
            powered by <strong>FFmpeg</strong> and <strong>yt-dlp</strong> to
            merge audio and video files locally. No downloads or conversions are
            stored on our servers.
          </p>
          <p>
            Our mission is to provide a clean, fast, and secure alternative to
            existing downloaders — free from pop-ups, malware, and fake download
            buttons. ShortsLoad is built with <strong>Next.js</strong> for
            lightning-fast performance and SEO optimization.
          </p>
          <p>
            By using our service, you acknowledge and agree that ShortsLoad is
            solely a technical utility and not a media distribution platform.
          </p>
        </section>
      </main>
    </>
  );
}
