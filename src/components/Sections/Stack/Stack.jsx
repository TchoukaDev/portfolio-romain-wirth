import styles from "../Sections.module.css";
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
  SiStrapi,
  SiMongodb,
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

export default function Stack() {
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
          name: "TailwindCSS",
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
          icon: <SiMongodb className={styles.icon} color="#00ed64" />,
          name: "MongoDB",
        },
        {
          icon: <DiGit color="#F05032" className={styles.icon} />,
          name: "Git",
        },
        { icon: <SiGithub className={styles.iconSmall} />, name: "Github" },
        { icon: <SiStrapi className={styles.icon} />, name: "Strapi" },
        { icon: <FaWordpress className={styles.icon} />, name: "WordPress" },
      ],
    },
  ];
  return (
    <section id="stack" className="card spy">
      <h2>Stack</h2>
      {/* Grille */}
      <div className="grid  grid-cols-1 xl:grid-cols-2 gap-10">
        {stack.map((group) => (
          // Catégories
          <div
            key={group.category}
            className="p-10 bg-primary border border-blue-400 rounded-lg hover:-translate-y-3 transition-all shadow-md hover:shadow-lg shadow-blue-400"
          >
            <h3 className="mb-10 text-center">{group.category}</h3>
            <div className="flex flex-wrap  justify-center  gap-5 lg:gap-10">
              {/* Techno */}
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
      </div>
    </section>
  );
}
