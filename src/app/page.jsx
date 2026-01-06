import CardObserver from "@/components/CardObserver/CardObserver";
import About from "@/components/Sections/About/About";
import Advanced from "@/components/Sections/Advanced/Advanced";
import Contact from "@/components/Sections/Contact/Contact";
import Projects from "@/components/Sections/Projects/Projects";
import Services from "@/components/Sections/Services/Services";
import Stack from "@/components/Sections/Stack/Stack";

export default function Home() {
  return (
    <main>
      {/* Observer pour l'animation des cartes */}
      <CardObserver />

      <div className=" w-9/10 md:w-9/10 lg:w-8/10 space-y-15 my-20 mx-auto">
        {/* ---A propos--- */}
        <About />

        {/* --- Services --- */}
        <Services />

        {/* --- Stack --- */}
        <Stack />

        {/* Projets */}
        <Projects />

        {/* --- Projets avancés --- */}
        <Advanced />

        {/* Contact */}
        <Contact />
      </div>
    </main>
  );
}
