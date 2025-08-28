"use client";
import { useEffect } from "react";

// Animation Fade-in des sous-sections .card
export default function CardObserver() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view"); // on remonte l'info au parent
          }
        });
      },
      {
        threshold: 0,
      }
    );

    cards.forEach((section) => observer.observe(section));

    return () => {
      cards.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return null; // Ce composant ne rend rien à l'écran
}
