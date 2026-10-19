// Roda depois do `vite build`. Gera uma pasta estática por pessoa
// (dist/roberta/index.html, dist/narija/index.html, ...) com as tags de
// título/descrição/Open Graph já embutidas no HTML puro — isso é o que
// permite que cada link tenha uma prévia diferente no WhatsApp/Instagram/etc,
// já que esses apps não executam o JavaScript do React para descobrir o
// título certo, eles só leem o HTML da primeira resposta do servidor.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { SOCIAL, SITE_URL } from "../src/data/social.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const templatePath = path.join(distDir, "index.html");
const template = readFileSync(templatePath, "utf-8");

for (const [slug, meta] of Object.entries(SOCIAL)) {
  const url = `${SITE_URL}/${slug}/`;
  const imageUrl = `${SITE_URL}/${meta.image}`;

  let html = template;

  // <title>
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);

  // <meta name="description">
  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Tags de rede social, inseridas logo antes do </head>
  const socialTags = `
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <link rel="canonical" href="${url}" />
  </head>`;
  html = html.replace(/<\/head>/, socialTags);

  const outDir = path.join(distDir, slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`  ✓ dist/${slug}/index.html (prévia personalizada)`);
}
