// Navbar Desktop
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function NavbarDesktop({ links, active, scrollToClickedSection }) {
  return (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-end items-center gap-6  text-blue-100"
          >
            {/* Liens */}
            {links.map((link) => (
              <li
                aria-current={active === link.id ? "page" : undefined}
                aria-label={`Aller à la section ${link.name}`}
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
              <a
                href="https://github.com/TchoukaDev"
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir le profil GitHub de Romain Wirth (TchoukaDev)"
              >
                <FaGithub className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/romain-wirth-414816196/" target="_blank" rel="noreferrer" aria-label="Se rendre sur le LinkedIn de Romain WIRTH">
              <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" /></a>
            </li>
          </motion.ul>)}