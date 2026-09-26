import { useState } from "react";
import { useGraduate } from "../context/GraduateContext";
import { IconWhatsapp, IconCopy, IconCheck, IconTooth } from "./Icons";
import Reveal from "./Reveal";

export default function RSVPSection() {
  const { rsvp } = useGraduate();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rsvp.pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      // fallback silencioso — o usuário ainda pode selecionar o texto manualmente
      console.error("Não foi possível copiar automaticamente:", err);
    }
  };

  return (
    <section id="confirmar" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <IconTooth className="watermark-icon hidden md:block w-[420px] h-[420px] -right-32 top-10 -rotate-12" />

      <div className="relative max-w-xl mx-auto text-center">
        <Reveal>
          <p className="tracked-caps uppercase text-sm mb-3 text-blush-deep">Confirmação</p>
          <h2 className="font-display text-3xl md:text-4xl text-wine mb-5">Confirme sua presença</h2>
          <p className="text-base md:text-lg leading-relaxed text-ink-soft mb-10">
            Para garantir seu lugar na celebração, confirme presença e envie o comprovante do
            pagamento da senha diretamente pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal>
          <div className="bg-blush-tint rounded-[28px] p-8 md:p-10 text-left">
            <div className="flex items-center justify-between mb-6">
              <span className="tracked-caps uppercase text-xs text-blush-deep">{rsvp.priceLabel}</span>
              <span className="font-display text-2xl text-wine">{rsvp.price}</span>
            </div>

            <div className="border-t border-blush/40 pt-6">
              <span className="tracked-caps uppercase text-xs text-blush-deep block mb-2">
                Chave PIX (e-mail)
              </span>
              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5">
                <span className="flex-1 text-ink font-medium break-all">{rsvp.pixKey}</span>
                <button
                  onClick={handleCopy}
                  aria-label="Copiar chave PIX"
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-wine text-white hover:bg-wine-soft transition-colors"
                >
                  {copied ? <IconCheck className="w-5 h-5" /> : <IconCopy className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-sm text-ink-soft mt-2">
                Titular: {rsvp.pixHolder}
                {copied && <span className="text-wine font-medium"> · Chave copiada!</span>}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <a
            href={rsvp.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-base bg-wine transition-transform hover:-translate-y-0.5 shadow-lg"
          >
            <IconWhatsapp className="w-5 h-5" />
            Confirmar presença no WhatsApp
          </a>
          <p className="text-sm text-ink-soft mt-4">
            Envie o comprovante do PIX na mesma conversa para garantir sua senha.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
