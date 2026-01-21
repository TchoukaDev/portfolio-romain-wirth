import Button from "@/components/Button/Button";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="card spy leading-relaxed">
      <h2>A propos</h2>
              <p className="text-center font-semibold mb-10">
          Démarrage d'activité le 11 mars 2026 — mais vous pouvez d'ores et déjà me contacter.
        </p>
      <div className="flex flex-col xl:flex-row justify-center lg:justify-evenly items-center gap-8 lg:gap-10 xl:gap-15">
        
      <div className="space-y-5 text-center lg:text-left ">

        <p>
          Je suis Romain Wirth, développeur web freelance en reconversion
          professionnelle.
        </p>{" "}
        <p>
          J'accompagne les artisans, indépendants et petites entreprises qui
          veulent un site à leur image : clair, professionnel et facile à faire
          vivre au quotidien. </p><p>J'aide également les associations à développer
          leur présence en ligne.
        </p>{" "}
        <p>
          Que ce soit pour créer votre premier site, moderniser un site existant
          ou y ajouter des fonctionnalités pratiques, je m'adapte à vos besoins
          et vous explique tout, simplement.
        </p>
       </div>
       <div className="relative lg:size-64 md:size-52 size-40 shrink-0 shadow-2xl shadow-blue-500/50 rounded-full">
          <Image src="/assets/images/photopro.png" alt="Romain Wirth" fill className="rounded-full shrink-0 aspect-square object-cover"  sizes="(min-width: 1024px) 256px, (min-width: 768px) 208px, 160px" priority />
          <div className="absolute  inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-900/20"></div>
        </div>
      
      </div>
       <p className="font-bold text-center my-10">
          Un interlocuteur unique, disponible et à l'écoute, pour un site qui
          vous ressemble et qui travaille pour vous.
          </p>
      <Button href="#projects">Voir mes réalisations</Button>
    </section>
  );
}
