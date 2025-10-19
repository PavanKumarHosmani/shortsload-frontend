export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const baseUrl = "https://shortsload.com";
  const pages = ["", "about", "privacy", "terms", "dmca", "contact"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${page === "" ? "1.0" : "0.7"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}
