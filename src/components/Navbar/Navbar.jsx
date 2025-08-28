"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function Navbar({ active, isLg }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const allLinks = [
    { name: "Présentation", id: "infos", show: isLg }, // seulement sur desktop
    { name: "À propos", id: "about", show: !isLg }, // seulement sur mobile
    { name: "Services", id: "services", show: !isLg }, // seulement sur mobile
    { name: "Stack", id: "stack", show: !isLg }, // seulement sur mobile
    { name: "Projets", id: "projects", show: true }, // toujours affiché
  ];

  const links = allLinks.filter((link) => link.show);

  const menuRef = useRef();
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 px-6 py-3 bg-[#0a0f1f] shadow-md md:shadow-lg shadow-blue-900/50 border-b border-blue-800/30">
      {isLg ? (
        // Navbar Desktop
        <ul className="flex justify-end items-center gap-6  text-blue-100">
          {/* Liens */}
          {links.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer hover:text-blue-400 transition-colors duration-300 font-medium ${
                active === link.id
                  ? "text-blue-300 underline underline-offset-4"
                  : ""
              }`}
              onClick={() => {
                const section = document.getElementById(link.id);
                if (section) {
                  const y =
                    section.getBoundingClientRect().top + window.scrollY - 80; // 80px = hauteur navbar
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
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
        </ul>
      ) : (
        // Navbar mobile (menu hamburger)
        <div className="relative flex  justify-end gap-6">
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
                      onClick={() => {
                        const section = document.getElementById(link.id);
                        if (section) {
                          const y =
                            section.getBoundingClientRect().top +
                            window.scrollY -
                            80; // 80px = hauteur navbar
                          window.scrollTo({ top: y, behavior: "smooth" });
                          setIsOpen(false);
                        }
                      }}
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
        </div>
      )}
    </nav>
  );
}
