import robertaHero from "../assets/images/roberta/formatura_2.jpg";
import robertaAbout from "../assets/images/roberta/formatura_1.jpg";
import narijaHero from "../assets/images/narija/hero.jpg";
import narijaAbout from "../assets/images/narija/about.jpg";
import narijaLogo from "../assets/images/narija/logo.png";
import anaHero from "../assets/images/ana/hero.jpg";
import anaAbout from "../assets/images/ana/about.jpg";
import anaLogo from "../assets/images/ana/logo.png";

// Dados compartilhados por toda a turma (mesmo evento de formatura).
// Se algum(a) formando(a) tiver data, local ou contato de pagamento
// diferentes, é só sobrescrever esses campos dentro do objeto dele(a).
const EVENT = {
  dateDisplay: "24 de Abril de 2027",
  dateShort: "24/04/2027",
  weekday: "Sábado",
  timeDisplay: "Horário a confirmar",
  venueName: "Requinte Buffet",
  venueCity: "Mossoró/RN",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Requinte+Buffet+Mossor%C3%B3+RN",
  dressCode: {
    label: "Traje social",
    note: "Pedimos para evitar as cores verde e bordô — são reservadas aos formandos.",
  },
  // Outras solenidades da turma antes da festa. Para adicionar mais uma,
  // é só copiar um objeto do array e trocar título/data.
  preEvents: [
    { title: "Ato Ecumênico", date: "20 | Abril | 2027" },
    { title: "Aula da Saudade", date: "22 | Abril | 2027" },
  ],
};

// Música de fundo do convite (compartilhada por padrão). Coloque o arquivo
// em public/audio/trilha.mp3 — ele fica acessível em runtime no caminho
// abaixo independente de quem estiver vendo o convite. Se quiser uma
// música diferente para alguém específico, é só criar um objeto `music`
// dentro do bloco daquela pessoa (mesmo padrão do `logo`).
const MUSIC = {
  src: "/Convite_formando/audio/trilha.mp3",
  label: "Música do convite",
};

const CONTACT = {
  whatsappDisplay: "(84) 98772-3144",
  whatsappNumber: "5584987723144",
};

const PIX = {
  price: "R$ 250,00",
  priceLabel: "Senha (valor por convidado)",
  pixKey: "limaleticiap@gmail.com",
  pixHolder: "Roberta Leticia Lima Pimenta",
};

function buildRSVP(graduateName) {
  return {
    ...PIX,
    whatsappLink: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Olá! Gostaria de confirmar minha presença na formatura da ${graduateName} (${EVENT.dateDisplay}) e já providenciar o pagamento da senha de ${PIX.price}.`
    )}`,
  };
}

// Adicione uma nova pessoa copiando um bloco abaixo e trocando a chave
// (o slug, usado na URL: .../roberta, .../narija, .../fulana...),
// o nome, a citação e as duas fotos (hero = capa, about = seção "A Formanda").
export const GRADUATES = {
  roberta: {
    slug: "roberta",
    graduate: {
      name: "Roberta Pimenta",
      fullName: "Roberta Leticia Lima Pimenta",
      course: "Odontologia",
      institution: "UNINASSAU",
    },
    quote: "Cada sorriso que aprendi a cuidar começou com o sonho de chegar até aqui.",
    images: { hero: robertaHero, about: robertaAbout },
    event: EVENT,
    contact: CONTACT,
    music: MUSIC,
    rsvp: buildRSVP("Roberta Pimenta"),
  },

  narija: {
    slug: "narija",
    graduate: {
      name: "Nárija Racnela",
      fullName: "Nárija Racnela Vieira de Alencar",
      course: "Odontologia",
      institution: "UNINASSAU",
    },
    quote:
      "Cada paciente que sorriu de volta me lembrou por que escolhi esse caminho — hoje esse sonho se realiza.",
    // Trocado a pedido: a foto de capa (Hero) agora é a do jaleco branco,
    // e a da seção "A Formanda" passou a ser a do gorro azul.
    images: { hero: narijaAbout, about: narijaHero },
    logo: narijaLogo,
    event: EVENT,
    contact: CONTACT,
    music: MUSIC,
    rsvp: {
      price: "R$ 250,00",
      priceLabel: "Senha (valor por convidado)",
      pixKey: "84998685136",
      pixKeyType: "celular",
      pixHolder: "Nárija Racnela vieira de alencar",
      whatsappLink: `https://wa.me/5584998685136?text=${encodeURIComponent(
        "Olá! Gostaria de confirmar minha presença na formatura da Nárija Racnela (24 de Abril de 2027) e já providenciar o pagamento da senha de R$ 250,00."
      )}`,
    },
  },
};

// WhatsApp para onde vai o botão "Confirmar presença" da Ana.
// PREENCHER: só números, com 55 + DDD (ex: "5584999998888").
// Enquanto estiver vazio, o botão usa o número compartilhado (CONTACT).
const ANA_WHATSAPP = "";

GRADUATES.ana = {
  slug: "ana",
  graduate: {
    name: "Ana Newman Azevedo",
    fullName: "Ana Newman Alves de Azevedo Queiroz",
    course: "Odontologia",
    institution: "UNINASSAU",
  },
  quote:
    "Entre estudos e sonhos, aprendi que cuidar de sorrisos é cuidar de pessoas — hoje celebro essa conquista com quem esteve comigo.",
  // Fotos reserva na mesma pasta: spare_seringa.jpg e spare_notebook.jpg
  images: { hero: anaHero, about: anaAbout },
  logo: anaLogo,
  event: EVENT,
  contact: CONTACT,
  music: MUSIC,
  rsvp: {
    price: "R$ 250,00",
    priceLabel: "Senha (valor por convidado)",
    pixKey: "07660466488",
    pixKeyType: "CPF",
    pixHolder: "Ana Newman Alves de Azevedo Queiroz",
    whatsappLink: `https://wa.me/558487035688?text=${encodeURIComponent(
      "Olá! Gostaria de confirmar minha presença na formatura da Ana Newman Azevedo (24 de Abril de 2027) e já providenciar o pagamento da senha de R$ 250,00."
    )}`,
  },
};

export const DEFAULT_SLUG = "roberta";
