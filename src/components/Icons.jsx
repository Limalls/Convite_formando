import iconeDente from "../assets/images/icone_dente.png";

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

export const IconTooth = ({ className, style }) => (
  <img src={iconeDente} alt="" className={className} style={style} />
);
