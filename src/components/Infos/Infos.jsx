import styles from "./Infos.module.css";
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiMysql,
  DiPhp,
  DiReact,
  DiSass,
  DiGit,
} from "react-icons/di";
import {
  SiJavascript,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import CardObserver from "../CardObserver/CardObserver";

export default function Infos({}) {
  const services = [
    {
      title: "Développement web",
      description: [
        "Sites vitrines clairs et fonctionnels",
        "Applications web interactives et sur-mesure",
      ],
    },
    {
      title: "Optimisation & Maintenance",
      description: [
        "Performance et rapidité des sites",
        "Optimisation SEO pour une meilleure visibilité",
        "Suivi et mises à jour régulières",
      ],
    },
    {
      title: "Fonctionnalités avancées",
      description: [
        "Intégration d’API et services tiers (formulaires, paiement, cartes…)",
        "Gestion simple du contenu pour mettre à jour votre site facilement",
      ],
    },
  ];

  const stack = [
    {
      category: "Front-end",
      tech: [
        {
          icon: <DiHtml5 color="#E34F26" className={styles.icon} />,
          name: "HTML5",
        },
        {
          icon: <DiCss3 color="#1572B6" className={styles.icon} />,
          name: "CSS3",
        },
        {
          icon: <DiSass color="#CC6699" className={styles.icon} />,
          name: "Sass",
        },
        {
          icon: <DiBootstrap color="#7952B3" className={styles.icon} />,
          name: "Bootstrap",
        },
        {
          icon: <SiTailwindcss color="#06B6D4" className={styles.icon} />,
          name: "Tailwind",
        },
        {
          icon: <SiJavascript color="#F7DF1E" className={styles.icon} />,
          name: "JavaScript",
        },
      ],
    },
    {
      category: "Back-end",
      tech: [
        {
          icon: <DiPhp color="#777BB4" className={styles.icon} />,
          name: "PHP",
        },
        {
          icon: <DiMysql color="#4479A1" className={styles.icon} />,
          name: "MySQL",
        },
      ],
    },
    {
      category: "Frameworks / Bibliothèques",
      tech: [
        {
          icon: <DiReact color="#61DAFB" className={styles.icon} />,
          name: "React",
        },
        {
          icon: <SiNextdotjs color="#e5e5e5" className={styles.icon} />,
          name: "Next.js",
        },
      ],
    },
    {
      category: "Outils / Services",
      tech: [
        {
          icon: <SiFirebase color="#FFCA28" className={styles.icon} />,
          name: "Firebase",
        },
        {
          icon: <DiGit color="#F05032" className={styles.icon} />,
          name: "Git",
        },
        { icon: <SiGithub className={styles.iconSmall} />, name: "Github" },
      ],
    },
  ];

  return (
    <>
      {/* Observer pour l'animation des cartes */}
      <CardObserver />
      {/* Section principale */}
      <section
        id="infos"
        className="spyLg section bg-[#0d1325] py-6 md:py-16 px-6"
      >
        <div className="max-w-[95%] flex flex-col lg:flex-row gap-10 md:gap-20 items-center justify-evenly mx-auto">
          {/* Colonne gauche desktop */}
          <div className="flex  flex-col gap-10 basis-1/2">
            {/* ---A propos--- */}
            <section id="about" className="card spy">
              <h2>A propos</h2>
              <div className="space-y-3 mb-6">
                <p>
                  Développeur web passionné, je transforme les idées en sites
                  modernes, fluides et accessibles.
                </p>{" "}
                <p>
                  Curieux et persévérant, j’aime relever de nouveaux défis pour
                  créer des expériences en ligne qui allient esthétique et
                  performance.
                </p>{" "}
                <p>
                  Issu du monde de la santé, j’ai à cœur de comprendre les
                  besoins des utilisateurs et de tout mettre en œuvre pour y
                  répondre au mieux.
                </p>
              </div>
            </section>

            {/* --- Services --- */}
            <section id="services" className="card spy">
              <h2>Services</h2>
              {services.map((service) => (
                <div key={service.title} className="mb-5 md:mb-6">
                  <h3>{service.title}</h3>
                  <ul className="list-disc text-xm md:text-[14px] ml-5 space-y-1 md:space-y-3">
                    {service.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* Colonne droite desktop */}
          <div className="w-full basis-1/2">
            {" "}
            {/* --- Stack --- */}
            <section id="stack" className="card spy">
              <h2>Stack</h2>
              {stack.map((group) => (
                <div key={group.category} className="mb-5 md:mb-10">
                  <h3>{group.category}</h3>
                  <div className="flex flex-wrap justify-evenly lg:justify-start gap-5 lg:gap-10">
                    {group.tech.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center justify-between gap-1"
                      >
                        {tech.name} {tech.icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
