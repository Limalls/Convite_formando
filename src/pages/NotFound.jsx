import { Link } from "react-router-dom";
import { GRADUATES } from "../data/graduates";

export default function NotFound() {
  const slugs = Object.keys(GRADUATES);

  return (
    <div className="min-h-[100svh] flex items-center justify-center px-6 bg-cream text-center">
      <div className="max-w-md">
        <h1 className="font-display text-3xl md:text-4xl text-wine mb-4">
          Convite não encontrado
        </h1>
        <p className="text-ink-soft mb-8">
          O link que você abriu não corresponde a nenhum convite. Confira o endereço
          com quem te enviou, ou escolha abaixo:
        </p>
        <div className="flex flex-col gap-3">
          {slugs.map((slug) => (
            <Link
              key={slug}
              to={`/${slug}`}
              className="px-6 py-3 rounded-full bg-wine text-white hover:bg-wine-soft transition-colors"
            >
              {GRADUATES[slug].graduate.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
