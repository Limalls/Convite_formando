import { useGraduate } from "../context/GraduateContext";
import { IconTooth, IconChevron, BrandMark } from "./Icons";

export default function Hero() {
  const { graduate, event, images } = useGraduate();

  return (
    <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
      {/* foto de fundo — versão celular */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={images.hero}
          alt={`${graduate.name} em sua formatura`}
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(92,30,39,0.15) 0%, rgba(52,25,25,0.4) 50%, rgba(35,17,17,0.94) 100%)",
          }}
        />
      </div>

      {/* fundo — versão desktop (split) */}
      <div className="hidden md:block absolute inset-0 bg-cream" />
      <IconTooth className="watermark-icon hidden md:block w-[520px] h-[520px] -left-40 -top-16 rotate-12" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center pb-16 md:pb-0 pt-28 md:pt-0">
        <div className="animate-fadeRise text-white md:text-ink order-2 md:order-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3 mb-6 md:mb-8">
            <BrandMark className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <p className="tracked-caps uppercase text-sm md:text-base text-blush mb-3">Convite de Formatura</p>
          <h1 className="font-display leading-[1.2] text-[2.4rem] sm:text-5xl md:text-6xl">
            {graduate.name}
          </h1>
          <p className="tracked-caps uppercase mt-4 text-sm md:text-base text-white/80 md:text-ink-soft">
            {graduate.course} — {graduate.institution}
          </p>

          <div className="mt-9 inline-flex flex-col items-center md:items-start gap-1 border-t border-b border-white/25 md:border-blush-tint py-5 px-2 md:px-0 md:border-t-0 md:border-b-0">
            <span className="font-display text-2xl md:text-3xl text-blush">{event.dateDisplay}</span>
            <span className="text-sm text-white/70 md:text-ink-soft">
              {event.venueName} · {event.venueCity}
            </span>
          </div>
        </div>

        <div className="order-1 md:order-2 hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-5 rounded-blob bg-blush-tint animate-floatSlow" />
            <div className="relative rounded-blob overflow-hidden w-[360px] h-[460px] border-4 border-blush">
              <img
                src={images.hero}
                alt={`${graduate.name} em sua formatura`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#historia"
        aria-label="Rolar para baixo"
        className="hidden md:flex absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-ink-soft"
      >
        <span className="text-xs tracked-caps uppercase">Ver convite</span>
        <IconChevron className="w-5 h-5 animate-bounceArrow" />
      </a>
    </section>
  );
}
