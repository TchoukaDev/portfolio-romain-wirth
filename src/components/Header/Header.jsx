"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header
      id="home"
      className="relative flex flex-col justify-center items-center text-center p-4 md:p-12 bg-gradient-to-b from-[#0a0f1f] via-[#0d1325] to-[#05070d]"
    >
      {/* Halo bleu derrière le nom */}
      <div className="absolute w-[300px] h-[100px] md:h-[300px] bg-blue-600/20 blur-3xl rounded-full top-10"></div>

      {/* Nom */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl md:text-6xl font-bold tracking-wide text-white drop-shadow-lg"
      >
        <span className="text-blue-50">Romain</span>{" "}
        <span className="text-blue-400">WIRTH</span>
      </motion.h1>

      {/* Ligne animée */}
      <motion.div
        className="h-[2px] w-25 md:w-50 bg-blue-500 mt-4 mb-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Rôle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-sm md:text-xl font-light tracking-wide text-blue-50"
      >
        Développeur FullStack
      </motion.p>

      {/* Slogan */}
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
        className="italic mt-6  text-blue-300 text-sm md:text-xl font-playfair"
      >
        "Your vision. My code."
      </motion.p>
    </header>
  );
}
