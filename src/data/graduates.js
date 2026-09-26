import robertaHero from "../assets/images/roberta/formatura_2.jpg";
import robertaAbout from "../assets/images/roberta/formatura_1.jpg";
import narijaHero from "../assets/images/narija/hero.jpg";
import narijaAbout from "../assets/images/narija/about.jpg";
import narijaLogo from "../assets/images/narija/logo.png";

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
    images: { hero: narijaHero, about: narijaAbout },
    logo: narijaLogo,
    event: EVENT,
    contact: CONTACT,
    rsvp: buildRSVP("Nárija Racnela"),
  },
};

export const DEFAULT_SLUG = "roberta";
