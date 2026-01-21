"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Spy from "../Spy/Spy";
import { useMediaQuery } from "react-responsive";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  // Variables
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(null);
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  const links = [
    { name: "À propos", id: "about" },
    { name: "Services", id: "services" },
    { name: "Stack", id: "stack" },
    { name: "Réalisations", id: "projects" },
    { name: "Applications sur-mesure", id: "advanced" },
    { name: "Témoignages", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  // Références
  const menuRef = useRef();

  // Functions
  // Fermeture du menu hamburger au clic extérieur
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);

      [menuRef, setIsOpen];
    };
  });

  const scrollToClickedSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 80; // 80px = hauteur navbar
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder avec la même hauteur que la navbar finale
  if (!mounted) {
    return (
      <nav
        aria-label="Barre de navigation principale"
        className="sticky top-0 z-50 px-6 py-3 bg-secondary  shadow-md md:shadow-lg shadow-blue-900/50 border-b border-blue-800/30"
      >
        <div className="h-6"></div>
      </nav>
    );
  }

  return (
    <>
      <Spy onActiveChange={setActive} />
      <nav
        aria-label="Barre de navigation principale"
        className="sticky top-0 z-50 px-6 py-3 bg-secondary  shadow-md md:shadow-lg shadow-blue-900/50 border-b border-blue-800/30"
      >
        {isLg ? (
         <NavbarDesktop links={links} active={active} scrollToClickedSection={scrollToClickedSection} />
        ) : (
         <NavbarMobile links={links} active={active} isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} scrollToClickedSection={scrollToClickedSection} />
        )}
      </nav>
    </>
  );
}
