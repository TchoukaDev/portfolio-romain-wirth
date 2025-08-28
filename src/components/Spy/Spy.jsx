"use client";
import { useEffect } from "react";

export default function Spy({ isLg, onActiveChange }) {
  useEffect(() => {
    const spies = isLg
      ? document.querySelectorAll(".spyLg")
      : document.querySelectorAll(".spy");

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
