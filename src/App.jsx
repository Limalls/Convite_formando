import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { GRADUATES, DEFAULT_SLUG } from "./data/graduates";
import { GraduateProvider } from "./context/GraduateContext";
import NotFound from "./pages/NotFound";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import About from "./components/About";
import EventDetails from "./components/EventDetails";
import RSVPSection from "./components/RSVP";
import Footer from "./components/Footer";

function Invite({ data }) {
  useEffect(() => {
    document.title = `Convite de Formatura — ${data.graduate.name}`;
  }, [data]);

  return (
    <GraduateProvider data={data}>
      <div>
        <Hero />
        <Quote />
        <About />
        <EventDetails />
        <RSVPSection />
        <Footer />
      </div>
    </GraduateProvider>
  );
}

export default function App() {
  const { slug } = useParams();
  const data = GRADUATES[slug];

  if (!data) return <NotFound />;
  return <Invite data={data} />;
}

// Rota "/" (sem slug): redireciona para o convite padrão.
export function RootRedirect() {
  return <Navigate to={`/${DEFAULT_SLUG}`} replace />;
}
