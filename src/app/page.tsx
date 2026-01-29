import CardObserver from "@/components/CardObserver/CardObserver";
import About from "@/components/Sections/About/About";
import CustomMade from "@/components/Sections/CustomMade/CustomMade";
import Contact from "@/components/Sections/Contact/Contact";
import Projects from "@/components/Sections/Projects/Projects";
import Vitrines from "@/components/Sections/Vitrines/Vitrines";
import Stack from "@/components/Sections/Stack/Stack";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <main id="main-content">
      {/* Observer pour l'animation des cartes */}
      <CardObserver />

      <div className=" w-9/10 md:w-9/10 lg:w-8/10 space-y-15 my-20 mx-auto">
        {/* ---A propos--- */}
        <About />

        {/* --- Services --- */}
        <Vitrines />

        {/* --- Sur-mesure --- */}
        <CustomMade />

        {/* --- Stack --- */}
        <Stack />

        {/* Projets */}
        <Projects />



        {/* --- Témoignages --- */}
        <Testimonials />

        {/* Contact */}
        <Contact />
      </div>
    </main>
  );
}
