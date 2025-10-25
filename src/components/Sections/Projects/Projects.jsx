export default function Projects() {
  const projects = [
    {
      titre: "Les randonneurs des sables",
      imageSrc: "/projects/lesrandonneurs.png",
      description:
        "Site Web pour un club de marche aquatique. Réalisé avec NextJs pour la partie frontend, avec optimisation SEO. Backend headless avec Strapi pour gérer le contenu des pages",
      url: "https://les-randonneurs-des-sables.vercel.app/",
    },
  ];
  return (
    <section className="card spy" id="projects">
      <h2>Projets réalisés</h2>
      <div className="flex gap-15 items-center justify-center">
        <div className="p-5">
          <h3>Les randonneurs des Sables</h3>
        </div>
      </div>
    </section>
  );
}
