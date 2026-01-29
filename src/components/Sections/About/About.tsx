import Button from "@/components/Button/Button";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="card spy leading-relaxed">
      <h2>A propos</h2>
      <p className="text-center font-semibold mb-10">
        {/* eslint-disable-next-line */}
        Démarrage d'activité le 11 mars 2026 — mais vous pouvez d'ores et déjà me contacter.
      </p>
      <div className="flex flex-col xl:flex-row justify-center lg:justify-evenly items-center gap-8 lg:gap-10 xl:gap-15">

        <div className="space-y-5 text-center xl:text-left ">
          <p>
            Je suis Romain Wirth, développeur web freelance.
            Mon objectif : créer des sites web clairs, fonctionnels et adaptés à vos besoins.
          </p>

          <p>
            Pour les artisans, indépendants et petites entreprises, je développe des sites vitrines qui reflètent votre image et améliorent votre présence en ligne.
          </p>

          <p>
            Pour des projets plus spécifiques, je crée aussi des sites web sur mesure avec des technologies fiables et modernes, pour des interfaces dynamiques et évolutives.
          </p>

          <p>
            Je vous accompagne à chaque étape et vous explique simplement les solutions choisies, pour que vous gardiez le contrôle de votre outil.
          </p>
        </div>
        <div className="relative lg:size-64 md:size-52 size-40 shrink-0 shadow-2xl shadow-blue-500/50 rounded-full">
          <Image src="/assets/images/photopro_blue.png" alt="Romain Wirth" fill className="rounded-full shrink-0 aspect-square object-cover" sizes="(min-width: 1024px) 256px, (min-width: 768px) 208px, 160px" priority fetchPriority="high" />

        </div>

      </div>
      <p className="font-bold text-center my-10">{/* eslint-disable-next-line */}
        Un interlocuteur unique, disponible et à l'écoute, pour un projet qui
        vous ressemble et qui travaille pour vous.
      </p>
      <div className="cta-container">
        <Button href="#vitrines" variant="secondary">
          Construire votre site vitrine
        </Button>
        <Button href="#custom-made" variant="primary">
          Créer votre projet sur mesure
        </Button>
      </div>
    </section>
  );
}
