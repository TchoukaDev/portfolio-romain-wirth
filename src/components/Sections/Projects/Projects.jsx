import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Les randonneurs des sables",
      imageSrc: "/projects/lesrandonneurs.png",
      description:
        "Site Web pour un club de marche aquatique. Réalisé avec NextJs pour la partie frontend et SEO. Backend headless avec Strapi pour la gestion de contenu",
      url: "https://les-randonneurs-des-sables.vercel.app/",
    },
  ];
  return (
    <section className="card spy" id="projects">
      <h2>Projets réalisés</h2>
      <div className="grid grid-cols-2 gap-15">
        {projects.map((p, i) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={p.url}
            className="group py-5 px-8 bg-primary  flex flex-col items-center justify-center space-y-5 border border-blue-400 rounded-lg hover:scale-103 transition-all shadow-md hover:shadow-lg shadow-blue-400"
            key={p.url}
          >
            <h3>{p.title}</h3>
            <Image
              width={350}
              height={0}
              alt={`projet ${i + 1}`}
              className="h-auto object-cover"
              src={p.imageSrc}
              priority
            />
            <p className="text-sm inline-block w-[350px] text-center">
              {p.description}
            </p>
            <div className="text-xs self-end transition-colors ">
              <span className="group-hover:underline group-hover:text-blue-400">
                Cliquer pour accéder
              </span>{" "}
              <span className="group-hover:text-blue-400">⭢</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
