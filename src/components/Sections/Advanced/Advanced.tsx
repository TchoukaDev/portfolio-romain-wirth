"use client";
import Button from "@/components/Button/Button";

export default function Advanced() {
  return (
    <section id="advanced" className="card spy">
      <h2>Applications sur-mesure</h2>
      <p className="text-center mb-10 leading-relaxed">
        Vous avez un projet plus complexe en tête ? Plateforme web, outil
        interne, tableau de bord... Je réalise aussi des applications
        sur-mesure.
      </p>
      <Button href="#contact">Parlons-en</Button>
    </section>
  );
}
