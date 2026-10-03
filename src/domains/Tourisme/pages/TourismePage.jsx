import Hero from "../components/Hero";
import Ganvie from "../components/Ganvie";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import ContactCTA from "../components/ContactCTA";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

const TourismePage = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Ganvie />
      <Destinations />
      <Services />
      <Testimonials />
      <ContactCTA />
    </main>
  );
};

export default TourismePage;
