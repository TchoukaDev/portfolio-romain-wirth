// Navbar mobile (menu hamburger)
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

export default function NavbarMobile({ links, active, scrollToClickedSection, isOpen, setIsOpen, menuRef }) {
  return (
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
              aria-label="Ouvrir ou fermer le menu de navigation"
              aria-expanded={isOpen}
              aria-controls="menu-mobile"
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
                      <li key={link.id} role="none">
                        <button
                          role="menuitem"
                          aria-label={`Aller à la section ${link.name}`}
                          className={`cursor-pointer text-center hover:text-blue-400 transition-colors duration-300 font-medium ${
                            active === link.id
                              ? "text-blue-300 underline underline-offset-4"
                              : ""
                          }`}
                          onClick={() => {setIsOpen(false); scrollToClickedSection(link.id)}}
                        >
                          {link.name}
                        </button>{" "}
                      </li>
                    ))}
                  </motion.ul>
                )}{" "}
              </AnimatePresence>{" "}
              {/* Icônes */}
             
              <li>
                <a
                  aria-label="Se rendre sur le GitHub de Romain WIRTH (TchoukaDev)"
                  href="https://github.com/TchoukaDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
                </a>
              </li>
            
                <li>
              <a href="https://www.linkedin.com/in/romain-wirth-414816196/" target="_blank" rel="noreferrer" aria-label="Se rendre sur le LinkedIn de Romain WIRTH">
              <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" /></a>
            </li>
            
            </ul>
          </motion.div>)}