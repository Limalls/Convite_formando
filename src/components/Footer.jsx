import { useGraduate } from "../context/GraduateContext";
import { BrandMark } from "./Icons";

export default function Footer() {
  const { graduate, event } = useGraduate();

  return (
    <footer className="py-12 px-6 text-center bg-wine-deep">
      <div className="flex justify-center mb-4">
        <BrandMark
          className="w-10 h-10"
          fallbackStyle={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
        />
      </div>
      <p className="font-display text-white/90 text-lg">{graduate.name}</p>
      <p className="tracked-caps uppercase text-xs text-white/50 mt-2">
        {graduate.course} · {graduate.institution}
      </p>
      <p className="text-white/40 text-sm mt-6">{event.dateDisplay}</p>
      <p className="text-white/30 text-xs mt-6">Com carinho, até lá!</p>
    </footer>
  );
}
