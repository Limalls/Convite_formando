import { GRADUATE, EVENT } from "../data/event";
import { IconTooth } from "./Icons";

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center bg-wine-deep">
      <div className="flex justify-center mb-4">
        <IconTooth className="w-8 h-8" style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }} />
      </div>
      <p className="font-display text-white/90 text-lg">{GRADUATE.name}</p>
      <p className="tracked-caps uppercase text-xs text-white/50 mt-2">
        {GRADUATE.course} · {GRADUATE.institution}
      </p>
      <p className="text-white/40 text-sm mt-6">{EVENT.dateDisplay}</p>
      <p className="text-white/30 text-xs mt-6">Com carinho, até lá!</p>
    </footer>
  );
}
