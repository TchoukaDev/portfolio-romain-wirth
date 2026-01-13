import { Code2, HeartHandshake, RefreshCcw } from "lucide-react";
import styles from "../Sections.module.css";

export default function Services() {
  const services = [
    {
      title: "Création de site",
      icon: <Code2 className={styles.icon} />,
      highlight: "Un site qui attire vos clients et reflète votre activité",
      description: [
        "Site vitrine ou petit commerce en ligne",
        "Design professionnel à votre image",
        "Gestion en autonomie",
      ],
    },
    {
      title: "Refonte de site",
      icon: <RefreshCcw className={styles.icon} />,
      highlight: "Transformez votre site en un outil clair et efficace",
      description: [
        "Modernisation de votre site existant",
        "Nouveau design et meilleure ergonomie",
        "Amélioration des performances et de l'accessibilité",
      ],
    },
    {
      title: "Accompagnement",
      icon: <HeartHandshake className={styles.icon} />,
      highlight: "Un suivi humain, du début à la fin.",
      description: [
        "Conseils adaptés à vos besoins",
        "Ajout de fonctionnalités utiles",
        "Support et disponibilité",
      ],
    },
  ];
  return (
    <section id="services" className="card spy">
      {/* titre */}
      <h2>Services</h2>
      {/* Descriptif */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="mb-5  md:mb-6 border border-blue-50 bg-primary  p-6 rounded-lg hover:-translate-y-3 transition-all shadow-md hover:shadow-lg shadow-blue-400"
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
    </section>
  );
}
