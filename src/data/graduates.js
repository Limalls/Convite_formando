import robertaHero from "../assets/images/roberta/formatura_2.jpg";
import robertaAbout from "../assets/images/roberta/formatura_1.jpg";

import narijaHero from "../assets/images/narija/hero.jpg";
import narijaAbout from "../assets/images/narija/about.jpg";

import { EVENT } from "./event";

function buildRSVP({
  graduateName,
  price,
  priceLabel,
  pixKey,
  pixHolder,
  whatsappDisplay,
  whatsappNumber,
}) {
  const message = encodeURIComponent(
    `Olá! Gostaria de confirmar minha presença na formatura da ${graduateName} (${EVENT.dateDisplay}) e já providenciar o pagamento da senha de ${price}.`
  );

  return {
    price,
    priceLabel,
    pixKey,
    pixHolder,
    whatsappDisplay,
    whatsappNumber,
    whatsappLink: `https://wa.me/${whatsappNumber}?text=${message}`,
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

    quote:
      "Cada sorriso que aprendi a cuidar começou com o sonho de chegar até aqui.",

    images: {
      hero: robertaHero,
      about: robertaAbout,
    },

    event: EVENT,

    rsvp: buildRSVP({
      graduateName: "Roberta Pimenta",
      price: "R$ 250,00",
      priceLabel: "Senha (valor por convidado)",
      pixKey: "limaleticiap@gmail.com",
      pixHolder: "Roberta Leticia Lima Pimenta",
      whatsappDisplay: "(84) 98772-3144",
      whatsappNumber: "5584987723144",
    }),
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

    images: {
      hero: narijaHero,
      about: narijaAbout,
    },

    event: EVENT,

    rsvp: buildRSVP({
      graduateName: "Nárija Racnela",

      // ==============================
      // DADOS EXCLUSIVOS DA NÁRIJA
      // ==============================

      price: "R$ 250,00",
      priceLabel: "Senha (valor por convidado)",

      pixKey: "84998685136",
      pixHolder: "Nárija Racnela Vieira de Alencar",

      whatsappDisplay: "(84) 99868-5136",
      whatsappNumber: "5584998685136",
    }),
  },
};

export const DEFAULT_SLUG = "roberta";