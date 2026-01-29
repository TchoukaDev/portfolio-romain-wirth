import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiSass,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiStrapi,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

export default function Stack() {
  const stack = [
    {
      category: "Front-end",
      subtitle: "Des interfaces claires et modernes",
      tech: [
        { icon: <DiHtml5 color="#E34F26" className="icon w-10 h-10" />, name: "HTML5" },
        { icon: <DiCss3 color="#1572B6" className="icon w-10 h-10" />, name: "CSS3" },
        { icon: <SiTypescript color="#3178C6" className="icon w-10 h-10" />, name: "TypeScript" },
        { icon: <DiSass color="#CC6699" className="icon w-10 h-10" />, name: "Sass" },
      ],
    },
    {
      category: "Back-end & Bases de données",
      subtitle: "Une gestion de données centralisée et sécurisée",
      tech: [
        { icon: <SiPostgresql color="#31648C" className="icon w-10 h-10" />, name: "PostgreSQL" },
        { icon: <SiMongodb color="#00ed64" className="icon w-10 h-10" />, name: "MongoDB" },
        { icon: <SiFirebase color="#FFCA28" className="icon w-10 h-10" />, name: "Firebase" },
      ],
    },
    {
      category: "Frameworks & Bibliothèques",
      subtitle: "Outils modernes pour construire des sites web performants",
      tech: [
        { icon: <DiReact color="#61DAFB" className="icon w-10 h-10" />, name: "React" },
        { icon: <SiNextdotjs color="#e5e5e5" className="icon w-10 h-10" />, name: "Next.js" },
        { icon: <SiTailwindcss color="#06B6D4" className="icon w-10 h-10" />, name: "TailwindCSS" },
      ],
    },
    {
      category: "CMS & Outils",
      subtitle: "Des sites faciles à gérer et une collaboration efficace",
      tech: [
        { icon: <FaWordpress className="icon w-10 h-10" />, name: "WordPress" },
        { icon: <DiGit color="#F05032" className="icon w-10 h-10" />, name: "Git" },
        { icon: <SiStrapi className="icon w-10 h-10" />, name: "Strapi" },
      ],
    },
  ];

  return (
    <section id="stack" className="card spy">
      <h2>Technologies utilisées</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {stack.map((group) => (
          <div
            key={group.category}
            className="p-10 bg-primary border border-blue-50 rounded-lg hover:-translate-y-3 transition-all shadow-md hover:shadow-lg shadow-blue-400"
          >
            <h3 className="mb-2 text-center">{group.category}</h3>
            {/* mini-sous-titre avec style highlight */}
            <p className="text-sm md:text-[13px] text-center text-blue-300 mb-6">
              {group.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
              {group.tech.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-between gap-1 text-center"
                >
                  {tech.icon}
                  <span className="mt-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
