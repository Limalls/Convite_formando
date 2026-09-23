export const GRADUATE = {
  name: "Roberta Pimenta",
  fullName: "Roberta Leticia Lima Pimenta",
  course: "Odontologia",
  institution: "UNINASSAU",
};

export const EVENT = {
  dateDisplay: "24 de Abril de 2027",
  dateShort: "24/04/2027",
  weekday: "Sábado",
  timeDisplay: "Horário a confirmar",
  venueName: "Requinte Buffet",
  venueCity: "Mossoró/RN",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Requinte+Buffet+Mossor%C3%B3+RN",
};

export const CONTACT = {
  whatsappDisplay: "(84) 98772-3144",
  whatsappNumber: "5584987723144",
};

export const RSVP = {
  price: "R$ 250,00",
  priceLabel: "Senha (valor por convidado)",
  pixKey: "limaleticiap@gmail.com",
  pixHolder: "Roberta Leticia Lima Pimenta",
  whatsappLink: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Olá! Gostaria de confirmar minha presença na formatura da ${GRADUATE.name} (${EVENT.dateDisplay}) e já providenciar o pagamento da senha de ${"R$ 250,00"}.`
  )}`,
};
