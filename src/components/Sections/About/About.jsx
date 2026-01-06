import Button from "@/components/Button/Button";

export default function About() {
  return (
    <section id="about" className="card spy">
      <h2>A propos</h2>
      <div className="space-y-3 leading-relaxed">
        <p>Je suis Romain Wirth, développeur web freelance.</p>{" "}
        <p>
          J'accompagne les artisans, indépendants et petites entreprises qui
          veulent un site à leur image : clair, professionnel et facile à faire
          vivre au quotidien.
        </p>{" "}
        <p>
          Que ce soit pour créer votre premier site, moderniser un site existant
          ou y ajouter des fonctionnalités pratiques, je m'adapte à vos besoins
          et vous explique tout, simplement.
        </p>
        <p className="font-bold text-center my-10">
          Un interlocuteur unique, disponible et à l'écoute, pour un site qui
          vous ressemble et qui travaille pour vous.
        </p>
        <Button href="#projects">Voir mes réalisations</Button>
      </div>
    </section>
  );
}
