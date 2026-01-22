// Navbar Desktop
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface NavbarDesktopProps {
  links: { id: string; name: string }[];
  active: string | null;
  scrollToClickedSection: (id: string) => void;
}
export default function NavbarDesktop({ links, active, scrollToClickedSection }: NavbarDesktopProps) {
  return (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-end items-center gap-6  text-blue-100"
          >
            {/* Liens */}
            {links.map((link) => (
              <li key={link.id}>
                <button
                  aria-current={active === link.id ? "page" : undefined}
                  aria-label={`Aller à la section ${link.name}`}
                  onClick={() => scrollToClickedSection(link.id)}
                  className={`cursor-pointer hover:text-blue-400 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-secondary rounded px-2 py-1 ${
                    active === link.id
                      ? "text-blue-300 underline underline-offset-4"
                      : ""
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}

            {/* Icônes */}
          
            <li>
              <a
                href="https://github.com/TchoukaDev"
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir le profil GitHub de Romain Wirth"
                className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-secondary rounded inline-block"
              >
                <FaGithub className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/romain-wirth-414816196/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Se rendre sur le LinkedIn de Romain WIRTH"
                className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-secondary rounded inline-block"
              >
                <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
              </a>
            </li>
          </motion.ul>)}