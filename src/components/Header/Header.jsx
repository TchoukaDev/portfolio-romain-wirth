import styles from "./Header.module.css";

export default function Header() {
  return (
    <header
      id="home"
      className="relative flex flex-col justify-center items-center text-center p-4 md:p-12 bg-gradient-to-b from-[#0a0f1f] via-[#0d1325] to-[#05070d]"
    >
      {/* Halo bleu derrière le nom */}
      <div className="absolute w-[300px] h-[100px] md:h-[300px] bg-blue-600/20 blur-3xl rounded-full top-10"></div>

      {/* Nom */}
      <h1
        className={`${styles.animatedName} text-xl md:text-6xl font-bold tracking-wide text-white drop-shadow-lg transition-all`}
      >
        <span className="text-blue-50">Romain</span>{" "}
        <span className="text-blue-400">WIRTH</span>
      </h1>

      {/* Ligne animée */}
      <div
        className={`${styles.animatedLine} h-[2px] w-25 md:w-50 bg-blue-500 mt-4 mb-6`}
      />

      {/* Rôle */}
      <p
        className={`${styles.animatedRole} text-sm md:text-xl font-light tracking-wide text-blue-50`}
      >
        Développeur FullStack
      </p>

      {/* Slogan */}
      <p
        className={`${styles.animatedSlogan} italic mt-6  text-blue-300 text-sm md:text-xl font-playfair`}
      >
        "Your vision. My code."
      </p>
    </header>
  );
}
