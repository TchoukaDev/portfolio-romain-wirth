"use client";

import { useEffect, useRef, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import dynamic from "next/dynamic";

const Spy = dynamic(() => import("../Spy/Spy"), { ssr: false });

export default function Navbar() {
  // Variables
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [active, setActive] = useState<string | null>(null);


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
  const menuRef = useRef<HTMLUListElement | null>(null);

  // Functions
  // Fermeture du menu hamburger au clic extérieur
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef?.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);

      [menuRef, setIsOpen];
    };
  });

  const scrollToClickedSection = (id: string) => {
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
        <div className="hidden lg:block">
          <NavbarDesktop links={links} active={active} scrollToClickedSection={scrollToClickedSection} />
        </div>
        <div className="block lg:hidden">
          <NavbarMobile links={links} active={active} isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} scrollToClickedSection={scrollToClickedSection} />
        </div>
      </nav>
    </>
  );
}
