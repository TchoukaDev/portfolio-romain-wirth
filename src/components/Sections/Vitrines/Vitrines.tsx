"use client";

import { RefreshCcw, HeartHandshake, Globe } from "lucide-react";
import Button from "@/components/Button/Button";
import useProjectFiltersStore from "@/components/ProjectFiltersStore/ProjectFiltersStore";

export default function Vitrines() {
  const setFilter = useProjectFiltersStore((state) => state.setFilter);
  const services = [
    {
      title: "Création de site",
      icon: <Globe className="icon" />,
      highlight: "Un site à votre image et facile à gérer",
      description: [
        "Site vitrine ou petit commerce en ligne",
        "Design professionnel adapté à votre image",
        "Gestion autonome et pratique au quotidien",
      ],
    },
    {
      title: "Refonte de site",
      icon: <RefreshCcw className="icon" />,
      highlight: "Modernisez votre site pour une meilleure expérience utilisateur",
      description: [
        "Modernisation de votre site existant",
        "Nouveau design et meilleure ergonomie",
        "Amélioration de la navigation et des performances",
      ],
    },
    {
      title: "Accompagnement personnalisé",
      icon: <HeartHandshake className="icon" />,
      highlight: "Un suivi humain, du début à la fin.",
      description: [
        "Conseils adaptés à votre projet",
        "Explications claires et sans jargon",
        "Support, disponibilité et réactivité",
      ],
    },
  ];

  const handleProjectsClick = () => {
    setFilter("vitrines");
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="vitrines" className="card spy">
      <h2>Sites vitrines</h2>
      <p className="text-center mb-10">
        Des sites web simples et efficaces, adaptés à vos besoins.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="mb-5 md:mb-6 border border-blue-50 bg-primary p-6 rounded-lg hover:-translate-y-3 transition-all shadow-md hover:shadow-lg shadow-blue-400"
          >
            <div className="flex flex-col items-center justify-center gap-2 mb-8 text-blue-300">
              <h3>{service.title}</h3>
              {service.icon}{" "}
              <p className="text-sm md:text-[13px] text-center mt-1">
                {service.highlight}
              </p>
            </div>
            <ul className="list-disc text-xm md:text-[14px] ml-5 space-y-1 md:space-y-3">
              {service.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        ))}

      </div>
      <div className="cta-container">
        <Button onClick={handleProjectsClick} variant="primary">
          Voir mes projets vitrines
        </Button>
      </div>
    </section>
  );
}
