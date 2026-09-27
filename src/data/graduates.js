import robertaHero from "../assets/images/roberta/formatura_2.jpg";
import robertaAbout from "../assets/images/roberta/formatura_1.jpg";
import narijaHero from "../assets/images/narija/hero.jpg";
import narijaAbout from "../assets/images/narija/about.jpg";
import narijaLogo from "../assets/images/narija/logo.png";


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
    rsvp: {
      price: "R$ 250,00",
      priceLabel: "Senha (valor por convidado)",
      pixKey: "84998685136",
      pixHolder: "Nárija Racnela vieira de alencar",
      whatsappLink: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
        "Olá! Gostaria de confirmar minha presença na formatura da Nárija Racnela (24 de Abril de 2027) e já providenciar o pagamento da senha de R$ 250,00."
      )}`,
    },
  },
};

export const DEFAULT_SLUG = "roberta";
