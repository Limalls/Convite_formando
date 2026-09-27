import { useGraduate } from "../context/GraduateContext";
import Reveal from "./Reveal";

export default function Schedule() {
  const { event } = useGraduate();
  const items = event.preEvents;

  if (!items || items.length === 0) return null;

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10 bg-cream text-center">
      <Reveal>
        <p className="tracked-caps uppercase text-sm mb-3 text-blush-deep">Programação</p>
        <h2 className="font-display text-3xl md:text-4xl text-wine mb-14">Outras celebrações</h2>
      </Reveal>

      <div className="max-w-md mx-auto flex flex-col gap-10">
        {items.map((item) => (
          <Reveal key={item.title}>
            <p className="font-display text-xl md:text-2xl text-wine mb-2">{item.title}</p>
            <p className="tracked-caps uppercase text-lg md:text-xl font-bold text-ink">
              {item.date}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
