import formatura1 from "../assets/images/formatura_1.jpg";
import { GRADUATE } from "../data/event";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="historia" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 md:order-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-5 rounded-blob-alt bg-blush-tint" />
            <div className="relative rounded-blob-alt overflow-hidden w-[300px] h-[380px] md:w-[340px] md:h-[430px] border-4 border-blush">
              <img
                src={formatura1}
                alt={`${GRADUATE.name} em sua formatura`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2">
          <p className="tracked-caps uppercase text-sm mb-3 text-blush-deep">A Formanda</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-wine">
            Uma conquista de muita dedicação
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-ink-soft mb-5">
            Depois de anos de estudo, esforço e amor pela Odontologia, {GRADUATE.name} celebra a
            conclusão de mais uma etapa importante da sua trajetória, formada pela {GRADUATE.institution}.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-ink-soft">
            Nada seria possível sem quem esteve ao lado dela em cada passo — por isso, nada será mais
            especial do que dividir esse momento com vocês.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
