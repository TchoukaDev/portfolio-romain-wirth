"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useState } from "react";
import { SiFirebase, SiMongodb, SiStrapi, SiWordpress } from "react-icons/si";
import { SiNextdotjs, SiReact } from "react-icons/si";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Clothilde Baudet - Psychologue",
      imageSrc: "/projects/clothilde-baudet.png",
      description:
        "Site vitrine clair et apaisant pour présenter son activité de psychologue et permettre la prise de contact.",
      url: "https://clothilde-baudet.fr/",
      techno: <SiWordpress />,
      category: "vitrine",
    },
    {
      title: "FlowerPower - Boutique de fleurs",
      imageSrc: "/projects/flowerpower.png",
      description:
        "Site vitrine avec boutique en ligne : catalogue produits, panier, paiement.",
      url: "https://flowerpower.romainwirth.fr/",
      techno: <SiWordpress />,
      category: "vitrine",
    },
    {
      title: "Marche aquatique - Les randonneurs des sables",
      imageSrc: "/projects/lesrandonneurs.png",
      description:
        "Site dynamique pour un club de marche aquatique : actualités, planning, présentation des activités. Certaines sections sont réservées aux membres du club. Gestion de contenu en autonomie par les administrateurs.",
      url: "https://les-randonneurs-des-sables.vercel.app/",
      techno: (
        <>
          <SiNextdotjs />
          <SiStrapi />
        </>
      ),
      category: "sur-mesure",
    },
    {
      title: "Waves - MVP Réseau social",
      imageSrc: "/projects/waves.png",
      description:
        "Waves  contient les principales fonctionnalités d'un réseau social: inscription, authentification, publications, messagerie instantanée, gestion d'un profil, followers... Développé avec React & Firebase.",
      url: "https://waves.romainwirth.fr/",
      techno: (
        <>
          <SiReact />
          <SiFirebase />
        </>
      ),
      category: "sur-mesure",
    },
    {
      title: "Fitbuilder",
      imageSrc: "/projects/fitbuilder.png",
      description:
        "Application de suivi d'entraînement : création de programmes et d'exercices personnalisés, suivi des séances, statistiques de progression.",
      url: "https://fitbuilder.romainwirth.fr/",
      techno: (
        <>
          <SiNextdotjs />
          <SiMongodb />
        </>
      ),
      category: "sur-mesure",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="card spy" id="projects">
      <h2>Réalisations</h2>
      <div className="flex justify-center md:justify-end -mt-5 mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-primary border border-blue-50 rounded-lg text-sm font-medium transition-all cursor-pointer hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="all">Tous les projets</option>
          <option value="vitrine">Sites vitrines</option>
          <option value="sur-mesure">Applications sur-mesure</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
        {filteredProjects.map((p, i) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={p.url}
            className="group py-5 px-4 sm:px-8 bg-primary flex flex-col items-center justify-evenly space-y-5 border border-blue-50 rounded-lg hover:scale-103 transition-all shadow-md hover:shadow-lg shadow-blue-400"
            key={p.url}
          >
            <h3 className="text-center">{p.title}</h3>

            <div className="w-full max-w-[350px] relative aspect-[7/4]">
  <Image
    src={p.imageSrc}
    alt={`projet ${i + 1}`}
    fill
    className="object-contain rounded"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>


            <p className="text-xs sm:text-sm text-center w-full max-w-[350px] leading-relaxed">
              {p.description}
            </p>

            <div className="flex gap-3 justify-center text-xl opacity-60 transition-opacity group-hover:opacity-100">
              {p.techno}
            </div>

            <div className="text-xs transition-colors self-center group-hover:underline group-hover:text-blue-400">
              Cliquer pour accéder
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-15">
        {/* eslint-disable-next-line */}
        <p className="mb-4">Envie d'un site qui vous ressemble?</p>
        <Button href="#contact">Discutons-en</Button>
      </div>
    </section>
  );
}
