import { IconTooth } from "./Icons";
import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10 text-center bg-blush-tint overflow-hidden">
      <IconTooth className="watermark-icon w-[300px] h-[300px] left-1/2 -translate-x-1/2 -top-16" />
      <Reveal className="relative max-w-2xl mx-auto">
        <p className="font-display text-2xl md:text-3xl leading-relaxed text-wine">
          "Cada sorriso que aprendi a cuidar começou com o sonho de chegar até aqui."
        </p>
        <p className="tracked-caps uppercase text-xs md:text-sm text-blush-deep mt-6">
          Roberta Pimenta
        </p>
      </Reveal>
    </section>
  );
}
