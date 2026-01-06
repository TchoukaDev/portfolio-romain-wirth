import { Code2, Globe, HeartHandshake } from "lucide-react";
import styles from "../Sections.module.css";

export default function Services() {
  const services = [
    {
      title: "Création de site",
      icon: <Globe className={styles.icon} />,
      description: [
        "Site vitrine ou e-commerce",
        "Design professionnel à votre image",
        "Gestion en autonomie",
      ],
    },
    {
      title: "Refonte de site",
      icon: <Code2 className={styles.icon} />,
      description: [
        "Modernisation de votre site existant",
        "Nouveau design et meilleure ergonomie",
        "Un site plus clair et plus efficace",
      ],
    },
    {
      title: "Accompagnement",
      icon: <HeartHandshake className={styles.icon} />,
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
              {service.icon}
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
