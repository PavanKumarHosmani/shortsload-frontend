import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 Page Not Found — ShortsLoad",
    description:
      "The page you're looking for could not be found. Return to ShortsLoad.com to download YouTube Shorts in MP4 format for free.",
    url: "https://shortsload.com/404",
  };

  return (
    <>
      <Head>
        <title>404 Page Not Found — ShortsLoad</title>
        <meta
          name="description"
          content="Oops! The page you’re looking for doesn’t exist. Go back to ShortsLoad.com to download YouTube Shorts easily in MP4 format."
        />
        <link rel="canonical" href="https://shortsload.com/404" />
        <meta name="robots" content="noindex, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Oops! The page you’re looking for doesn’t exist or may have been
            moved. Don’t worry — you can still download YouTube Shorts below.
          </p>

          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            ⬅️ Go Back to Home
          </Link>

          <div className="mt-10 text-gray-500 text-sm">
            <p>
              Need help?{" "}
              <Link href="/contact" className="text-blue-600 underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-12 text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} ShortsLoad.com — Free YouTube Shorts Downloader
        </footer>
      </main>
    </>
  );
}
