import Button from "../Button/Button";
export default function Header() {
  return (
    <header
      id="home"
      className="relative flex flex-col justify-center items-center text-center p-6 md:p-16 bg-gradient-to-b from-[#0a0f1f] via-[#0d1325] to-[#05070d]"
    >
      {/* Halo */}
      <div className="absolute w-[320px] h-[160px] md:h-[320px] bg-blue-600/20 blur-3xl rounded-full top-12"></div>


      {/* Nom */}
      <h1 className="text-3xl md:text-6xl font-bold tracking-wide text-white drop-shadow-lg mt-8">
        <span className="text-blue-50">Romain</span>{" "}
        <span className="text-blue-400">WIRTH</span>
      </h1>

      {/* Ligne */}
      <div className="animatedLine h-[2px] w-24 md:w-48 bg-blue-500 mt-4 mb-6" />

      {/* Proposition */}
      <p className="animatedRole text-sm md:text-xl font-light tracking-wide text-blue-50 max-w-xl">
        Je crée des sites web clairs et efficaces pour les petites entreprises et les indépendants.
      </p>

      {/* Slogan */}
      <p className="animatedSlogan italic mt-6 text-blue-300 text-sm md:text-lg font-playfair">
        "Your vision. My code."
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-15  mt-8">
        <Button href="#vitrines" variant="secondary">
          Découvrir mes services
        </Button>
        <Button href="#contact" variant="primary">
          Me contacter
        </Button>
      </div>
    </header>
  );
}
