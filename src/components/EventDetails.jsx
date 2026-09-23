import { EVENT } from "../data/event";
import { IconCalendar, IconClock, IconPin, IconTooth } from "./Icons";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: IconCalendar, label: "Data", value: `${EVENT.dateDisplay}`, sub: EVENT.weekday },
  { icon: IconClock, label: "Horário", value: EVENT.timeDisplay, sub: "Fique de olho, avisaremos em breve" },
  { icon: IconPin, label: "Local", value: EVENT.venueName, sub: EVENT.venueCity, href: EVENT.mapsLink },
];

export default function EventDetails() {
  return (
    <section id="evento" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden bg-wine">
      <IconTooth
        className="watermark-icon w-[380px] h-[380px] -right-24 -top-24"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.06 }}
      />
      <IconTooth
        className="watermark-icon w-[260px] h-[260px] -left-16 bottom-0"
        style={{ filter: "brightness(0) invert(1)", opacity: 0.06 }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="tracked-caps uppercase text-sm mb-3 text-blush">O Grande Dia</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-14">Detalhes da celebração</h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="card-hover h-full bg-white/10 border border-white/15 rounded-[26px] px-6 py-9 flex flex-col items-center">
                <span className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 mb-5">
                  <Icon className="w-7 h-7 text-blush" />
                </span>
                <span className="tracked-caps uppercase text-xs text-white/50 mb-2">{item.label}</span>
                <span className="font-display text-xl text-white mb-1">{item.value}</span>
                <span className="text-sm text-white/60">{item.sub}</span>
              </div>
            );
            return (
              <Reveal key={item.label}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
