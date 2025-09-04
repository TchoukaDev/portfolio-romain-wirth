"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Spy from "../Spy/Spy";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  // Variables
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(null);
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  const allLinks = [
    { name: "Présentation", id: "infos", show: isLg }, // seulement sur desktop
    { name: "À propos", id: "about", show: !isLg }, // seulement sur mobile
    { name: "Services", id: "services", show: !isLg }, // seulement sur mobile
    { name: "Stack", id: "stack", show: !isLg }, // seulement sur mobile
    { name: "Projets", id: "projects", show: true }, // toujours affiché
  ];

  const links = allLinks.filter((link) => link.show);

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
      <nav className="sticky top-0 z-50 px-6 py-3 bg-[#0a0f1f] shadow-md md:shadow-lg shadow-blue-900/50 border-b border-blue-800/30">
        <div className="h-6"></div>
      </nav>
    );
  }

  return (
    <>
      <Spy onActiveChange={setActive} />
      <nav className="sticky top-0 z-50 px-6 py-3 bg-[#0a0f1f] shadow-md md:shadow-lg shadow-blue-900/50 border-b border-blue-800/30">
        {isLg ? (
          // Navbar Desktop
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-end items-center gap-6  text-blue-100"
          >
            {/* Liens */}
            {links.map((link) => (
              <li
                key={link.id}
                className={`cursor-pointer hover:text-blue-400 transition-colors duration-300 font-medium ${
                  active === link.id
                    ? "text-blue-300 underline underline-offset-4"
                    : ""
                }`}
                onClick={() => scrollToClickedSection(link.id)}
              >
                {link.name}
              </li>
            ))}

            {/* Icônes */}
            <li>
              <Mail className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </li>
            <li>
              <FaGithub className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </li>
            <li>
              <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            </li>
          </motion.ul>
        ) : (
          // Navbar mobile (menu hamburger)
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex  justify-end gap-6"
          >
            {/*Bouton hamburger/croix */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-100 text-2xl cursor-pointer "
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* Menu déroulant */}
            <ul
              ref={menuRef}
              className="flex justify-end items-center gap-3 text-blue-100"
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 top-full mt-3 w-full bg-[#0a0f1f] border border-blue-800/50 shadow-lg flex flex-col gap-3 p-4 text-blue-100"
                  >
                    {links.map((link) => (
                      <li
                        key={link.id}
                        className={`cursor-pointer text-center hover:text-blue-400 transition-colors duration-300 font-medium ${
                          active === link.id
                            ? "text-blue-300 underline underline-offset-4"
                            : ""
                        }`}
                        onClick={() => scrollToClickedSection(link.id)}
                      >
                        {link.name}
                      </li>
                    ))}
                  </motion.ul>
                )}{" "}
              </AnimatePresence>{" "}
              {/* Icônes */}
              <li>
                <Mail
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300"
                />
              </li>
              <li>
                <FaGithub className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
              </li>
              <li>
                <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
}
