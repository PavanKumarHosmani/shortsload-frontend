export default function Robots() {
  return null;
}

export async function getServerSideProps({ res }) {
  const content = `
User-agent: *
Allow: /

Sitemap: https://shortsload.com/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.write(content.trim());
  res.end();

  return { props: {} };
}
