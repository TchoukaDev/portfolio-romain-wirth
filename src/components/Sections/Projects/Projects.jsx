import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Clothilde Baudet - Psychologue",
      imageSrc: "/projects/clothilde-baudet.png",
      description:
        "Site vitrine clair et apaisant pour présenter son activité de psychologue et permettre la prise de contact.",
      url: "https://https://clothilde-baudet.fr/",
    },
    {
      title: "Les randonneurs des sables",
      imageSrc: "/projects/lesrandonneurs.png",
      description:
        "Site Web pour un club de marche aquatique. Réalisé avec NextJs pour la partie frontend et SEO. Backend headless avec Strapi pour la gestion de contenu. Base de données PostgresSQL",
      url: "https://les-randonneurs-des-sables.vercel.app/",
    },
    {
      title: "Waves",
      imageSrc: "/projects/waves.png",
      description:
        "Waves est un MVP qui contient les principales fonctionnalités d'un réseau social: inscription, authentification, publications, messagerie instantanée, gestion d'un profil, followers... Développé avec React, PHP pour l'upload d'images et Firebase pour la base de données.",
      url: "https://waves.romainwirth.fr/",
    },
  ];

  return (
    <section className="card spy" id="projects">
      <h2>Réalisations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
        {projects.map((p, i) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={p.url}
            className="group py-5 px-4 sm:px-8 bg-primary flex flex-col items-center justify-evenly space-y-5 border border-blue-50 rounded-lg hover:scale-103 transition-all shadow-md hover:shadow-lg shadow-blue-400"
            key={p.url}
          >
            <h3 className="text-center">{p.title}</h3>

            <div className="w-full max-w-[350px]">
              <Image
                width={350}
                height={0}
                alt={`projet ${i + 1}`}
                className="h-auto w-full object-cover rounded"
                src={p.imageSrc}
                priority
              />
            </div>

            <p className="text-xs sm:text-sm text-center w-full max-w-[350px] leading-relaxed">
              {p.description}
            </p>

            <div className="text-xs transition-colors self-center group-hover:underline group-hover:text-blue-400">
              Cliquer pour accéder
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-15">
        <p className="mb-4">Envie d'un site qui vous ressemble?</p>
        <Button href="#contact">Discutons-en</Button>
      </div>
    </section>
  );
}
