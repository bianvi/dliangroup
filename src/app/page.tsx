import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import CoreValues from "../components/CoreValues";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <MissionVision />
      <Testimonials />
      <CoreValues />
      <Contact />
    </>
  );
}
