"use client";
import { Monitor, Settings, Handshake } from "lucide-react";
import Button from "@/components/Button/Button";
import useProjectFiltersStore from "@/components/ProjectFiltersStore/ProjectFiltersStore";

export default function CustomMade() {
  const setFilter = useProjectFiltersStore((state) => state.setFilter);

  const services = [
    {
      title: "Sites web dynamiques",
      icon: <Monitor className="icon" />,
      highlight: "Un site sur mesure et performant",
      description: [
        "Interfaces modernes et intuitives",
        "Pages dynamiques et évolutives",
        "Optimisé pour une gestion efficace",
        "Contenus administrables via un CMS headless",
      ],
    },
    {
      title: "Interfaces connectées",
      icon: <Settings className="icon" />,
      highlight: "Vos données à portée de main",
      description: [
        "Connexion à des API et services externes",
        "Tableaux de bord clairs et intuitifs",
        "Gestion efficace de vos contenus et données",
      ],
    },
    {
      title: "Accompagnement technique",
      icon: <Handshake className="icon" />,
      highlight: "Un partenaire technique et disponible",
      description: [
        "Conseils et accompagnement",
        "Communication claire et régulière",
        "Collaboration possible avec d'autres développeurs pour des besoins spécifiques",
      ],
    },
  ];

  const handleProjectsClick = () => {
    setFilter("custom-made");
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="custom-made" className="card spy">
      <h2>Sites web & interfaces sur mesure</h2>
      <p className="text-center mb-10">
        Des sites web et interfaces sur mesure, clairs, fonctionnels et adaptés à votre activité.
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
      <div className="cta-container"><Button variant="primary" onClick={handleProjectsClick}>
        Voir mes projets sur-mesure
      </Button></div>
    </section>
  );
}
