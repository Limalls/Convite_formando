// Metadados usados SÓ para a prévia de link (WhatsApp, Instagram, etc).
// Ficam separados de graduates.js porque esse arquivo é lido pelo Node
// (scripts/generate-static-pages.mjs) fora do Vite, sem poder importar
// imagens via bundler — por isso o campo `image` é um caminho de arquivo,
// não um import.
export const SITE_URL = "https://limalls.github.io/Convite_formando";

export const SOCIAL = {
  roberta: {
    title: "Convite de Formatura — Roberta Pimenta",
    description:
      "Roberta Pimenta celebra sua formatura em Odontologia (UNINASSAU). 24 de Abril de 2027 — Requinte Buffet, Mossoró/RN.",
    image: "og/roberta.jpg",
  },
  narija: {
    title: "Convite de Formatura — Nárija Racnela",
    description:
      "Nárija Racnela celebra sua formatura em Odontologia (UNINASSAU). 24 de Abril de 2027 — Requinte Buffet, Mossoró/RN.",
    image: "og/narija.jpg",
  },
};
