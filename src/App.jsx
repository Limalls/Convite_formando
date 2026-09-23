import Hero from "./components/Hero";
import Quote from "./components/Quote";
import About from "./components/About";
import EventDetails from "./components/EventDetails";
import RSVPSection from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Hero />
      <Quote />
      <About />
      <EventDetails />
      <RSVPSection />
      <Footer />
    </div>
  );
}
