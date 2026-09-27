import iconeDente from "../assets/images/icone_dente.png";
import { useGraduate } from "../context/GraduateContext";

export const IconWhatsapp = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M16 4C9.4 4 4 9.4 4 16c0 2.2.6 4.3 1.7 6.1L4 28l6.1-1.6A11.9 11.9 0 0 0 16 28c6.6 0 12-5.4 12-12S22.6 4 16 4Z"
      strokeLinejoin="round"
    />
    <path d="M11.3 11.6c.3-.7.6-.7.9-.7h.7c.2 0 .5 0 .7.6.3.7 1 2.3 1.1 2.5.1.2.2.4 0 .7-.1.2-.2.4-.4.6l-.5.6c-.2.2-.3.4-.1.7.2.3 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.9.3.2.5.1.7-.1l.6-.7c.2-.3.4-.2.7-.1l2.2 1c.3.1.5.2.5.4.1.6-.2 1.7-1 2.2-.8.6-1.6.9-2.8.6-1.5-.3-3.7-1.4-6.1-3.7-2.4-2.3-3.6-4.4-3.9-5.9-.2-1.1.1-2 .7-2.6Z" />
  </svg>
);

export const IconCalendar = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="7" width="22" height="20" rx="3" />
    <path d="M5 13h22M11 4v6M21 4v6" strokeLinecap="round" />
  </svg>
);

export const IconClock = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="16" cy="16" r="11" />
    <path d="M16 10v6l4 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconPin = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M16 28s9-8.5 9-15a9 9 0 1 0-18 0c0 6.5 9 15 9 15Z" strokeLinejoin="round" />
    <circle cx="16" cy="13" r="3.2" />
  </svg>
);

export const IconCopy = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="11" y="11" width="16" height="16" rx="3" />
    <path d="M21 11V8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3" />
  </svg>
);

export const IconCheck = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 17l6 6 12-14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconChevron = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M8 12l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconShirt = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M11 5 6 8.5 4 13l4 2v13h16V15l4-2-2-4.5L21 5c0 2.2-2.2 4-5 4s-5-1.8-5-4Z"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

// Ícone de dente do template. Quando a pessoa tem uma logo própria
// cadastrada em graduates.js, ele é substituído por ela automaticamente —
// em TODOS os usos (selo, marcas d'água de fundo, rodapé), sem precisar
// mexer em cada componente. Quem não tem logo própria (ex: Roberta)
// continua vendo o ícone genérico normalmente.
export const IconTooth = ({ className, style }) => {
  const { logo } = useGraduate();
  const src = logo || iconeDente;
  // Filtros como "brightness(0) invert(1)" (usados para deixar o ícone
  // genérico branco em fundos escuros) não fazem sentido para uma logo
  // colorida — nesse caso a gente ignora só o filtro e mantém o resto
  // (opacidade, posição, tamanho) como estava.
  const finalStyle = logo ? { ...style, filter: "none" } : style;
  return <img src={src} alt="" className={className} style={finalStyle} />;
};

// Selo com a logo própria da pessoa (quando ela tiver uma cadastrada em
// graduates.js), caindo de volta no ícone de dente genérico do template
// quando não houver. Usado nos pontos "de assinatura" do convite (o selo
// no topo do Hero e no rodapé) — os padrões decorativos grandes de fundo
// continuam usando sempre o ícone genérico.
export const BrandMark = ({ className, fallbackStyle }) => {
  const { logo, graduate } = useGraduate();

  if (logo) {
    return (
      <img
        src={logo}
        alt={`Logo — ${graduate.name}`}
        className={`${className} rounded-full object-cover border-2 border-blush shadow-sm`}
      />
    );
  }

  return <IconTooth className={className} style={fallbackStyle} />;
};
