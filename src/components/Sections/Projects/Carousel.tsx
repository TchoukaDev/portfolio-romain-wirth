import { useState, useEffect } from "react";
import { Project } from "./Projects";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Carousel({ filteredProjects }: { filteredProjects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);

  // Déterminer le nombre d'items par page selon la largeur (breakpoint xl = 1280px)
  const itemsPerPage = windowWidth < 1280 ? 1 : 2;

  // Écouter les changements de taille de fenêtre
  useEffect(() => {
    // Initialiser avec la largeur actuelle
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Projets à afficher actuellement
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setDirection(-1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setDirection(1);
  };

  return (
    <div className="relative">
      {/* Boutons de navigation */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={handlePrevious}
          aria-label="Voir les projets précédents"
          className="p-3 bg-blue-500/20 hover:bg-blue-500/40 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm">
            Page {currentIndex + 1} / {totalPages}
          </span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Voir les projets suivants"
          className="p-3 bg-blue-500/20 hover:bg-blue-500/40 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carrousel */}

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          aria-label="Carrousel de projets"
          className={`grid gap-8 lg:gap-10 ${itemsPerPage === 1
            ? "grid-cols-1 justify-items-center mx-auto"
            : "grid-cols-1 lg:grid-cols-2"
            } min-h-[500px]`}
        >
          {currentProjects.map((p) => (
            <a
              key={p.id}
              target="_blank"
              rel="noreferrer"
              href={p.url}
              aria-label={`Accéder au projet ${p.title}`}
              className="w-full group py-5 px-4 sm:px-8 bg-primary flex flex-col items-center justify-evenly space-y-5 border border-blue-50 rounded-lg hover:scale-103 transition-all shadow-md hover:shadow-lg shadow-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-secondary"
            >
              <h3 className="text-center">{p.title}</h3>

              <div className="w-full max-w-[500px] xl:max-w-[350px] relative aspect-[7/4]">
                <Image
                  src={p.imageSrc}
                  alt={`Aperçu du projet ${p.title}`}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <p className="text-xs sm:text-sm text-center w-full max-w-[350px] leading-relaxed">
                {p.description}
              </p>

              <div
                className="flex gap-3 justify-center text-xl opacity-60 transition-opacity group-hover:opacity-100"
                aria-label={`Technologies utilisées : ${p.technoName}`}
              >
                {p.techno}
                <span className="sr-only">{p.technoName}</span>
              </div>

              <div className="text-xs transition-colors self-center group-hover:underline group-hover:text-blue-400">
                Cliquer pour accéder
              </div>
            </a>
          ))}
        </motion.div>
      </AnimatePresence>


      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à la page ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${index === currentIndex
              ? "bg-blue-400 w-8"
              : "bg-blue-400/30 hover:bg-blue-400/50 cursor-pointer"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
