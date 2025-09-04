"use client";
import { useEffect } from "react";

export default function Spy({ isLg, onActiveChange }) {
  useEffect(() => {
    //Sélectionner les sections à observer en fonction de la taille de l'écran
    const spies = isLg
      ? document.querySelectorAll(".spyLg")
      : document.querySelectorAll(".spy");

    // Dès qu'une section entre dans l'écran, envoie son id au parent pour modifier son state "isActive"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onActiveChange(entry.target.id); // on remonte l'info au parent
          }
        });
      },
      {
        root: null,
        rootMargin: "-200px 0px -70% 0px",
        threshold: 0,
      }
    );

    spies.forEach((section) => observer.observe(section));

    return () => {
      spies.forEach((section) => observer.unobserve(section));
    };
  }, [isLg, onActiveChange]);

  return null; // Ce composant ne rend rien à l'écran
}
