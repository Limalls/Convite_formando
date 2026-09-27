import { useRef, useState } from "react";
import { useGraduate } from "../context/GraduateContext";
import { IconPlay, IconPause } from "./Icons";

export default function MusicPlayer() {
  const { music } = useGraduate();
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  if (!music?.src) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {
      });
    }
    setPlaying((p) => !p);
  };

  return (
    <>
      <audio ref={audioRef} src={music.src} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        title={music.label || (playing ? "Pausar música" : "Tocar música")}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-wine text-white shadow-lg flex items-center justify-center hover:bg-wine-soft transition-transform hover:scale-105"
      >
        {playing ? <IconPause className="w-5 h-5" /> : <IconPlay className="w-5 h-5 ml-0.5" />}
      </button>
    </>
  );
}
