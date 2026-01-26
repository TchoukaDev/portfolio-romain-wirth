"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useState } from "react";
import { SiFirebase, SiMongodb, SiStrapi, SiWordpress } from "react-icons/si";
import { SiNextdotjs, SiReact } from "react-icons/si";
import Carousel from "./Carousel";

export type Project = {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  url: string;
  techno: React.ReactNode;
  technoName: string;
  category: string;
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Clothilde Baudet - Psychologue",
      imageSrc: "/projects/clothilde-baudet.png",
      description:
        "Site vitrine clair et apaisant pour présenter son activité de psychologue et permettre la prise de contact.",
      url: "https://clothilde-baudet.fr/",
      techno: <SiWordpress />,
      technoName: "WordPress",
      category: "vitrine",
    },
    {
      id: 2,
      title: "FlowerPower - Boutique de fleurs",
      imageSrc: "/projects/flowerpower.png",
      description:
        "Site vitrine avec boutique en ligne : catalogue produits, panier, paiement.",
      url: "https://flowerpower.romainwirth.fr/",
      techno: <SiWordpress />,
      technoName: "WordPress",
      category: "vitrine",
    },
    {
      id: 3,
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
      technoName: "Next.js et Strapi",
      category: "sur-mesure",
    },
    {
      id: 4,
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
      technoName: "React et Firebase",
      category: "sur-mesure",
    },
    {
      id: 5,
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
      technoName: "Next.js et MongoDB",
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
          aria-label="Filtrer les projets par catégorie"
          className="px-4 py-2 bg-primary border border-blue-50 rounded-lg text-sm font-medium transition-all cursor-pointer hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="all">Tous les projets</option>
          <option value="vitrine">Sites vitrines</option>
          <option value="sur-mesure">Applications sur-mesure</option>
        </select>
      </div>
      <Carousel filteredProjects={filteredProjects} />

      <div className="text-center mt-15">
        {/* eslint-disable-next-line */}
        <p className="mb-4">Envie d'un site qui vous ressemble?</p>
        <Button aria-label="Discutons-en" href="#contact">Discutons-en</Button>
      </div>
    </section>
  );
}
