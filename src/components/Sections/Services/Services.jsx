import { Code2, Globe, HeartHandshake } from "lucide-react";
import styles from "../Sections.module.css";

export default function Services() {
  const services = [
    {
      title: "Sites web & E-commerce",
      icon: <Globe className={styles.icon} />,
      // ou : <Package />
      description: [
        "Du site vitrine à la boutique en ligne",
        "Design professionnel et interface intuitive",
        "Gestion de contenu en toute autonomie",
      ],
    },
    {
      title: "Applications web",
      icon: <Code2 className={styles.icon} />,
      // ou : <Sparkles />
      description: [
        "Solutions métier personnalisées",
        "Interfaces modernes et performantes",
        "Évolutives selon vos besoins",
      ],
    },
    {
      title: "Accompagnement complet",
      icon: <HeartHandshake className={styles.icon} />,
      // ou : <Handshake />
      description: [
        "Conseil et analyse de vos besoins",
        "Optimisation et maintenance",
        "Formation et support technique",
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
            className="mb-5  md:mb-6 border border-blue-400 bg-primary  p-5 rounded-lg hover:-translate-y-3 transition-all shadow-md hover:shadow-lg shadow-blue-400"
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
