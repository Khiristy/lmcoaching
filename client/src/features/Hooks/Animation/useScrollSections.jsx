import { useRef, useState, useEffect, useCallback } from "react";
import React from "react";

export const useScrollSections = (numSections) => {
  const sectionRefs = useRef([...Array(numSections)].map(() => React.createRef()));
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = useCallback((index) => {
    if (sectionRefs.current[index]?.current) {
      sectionRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index); // Met à jour l'index actif pour que la section soit visible
    }
  }, [sectionRefs]);

  const handleScroll = useCallback(
    (event) => {
      if (event.deltaY > 0 && activeIndex < numSections - 1) {
        scrollToSection(activeIndex + 1);
      } else if (event.deltaY < 0 && activeIndex > 0) {
        scrollToSection(activeIndex - 1);
      }
    },
    [activeIndex, numSections, scrollToSection] // Ajout des dépendances nécessaires
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]); // Ajout de handleScroll comme dépendance

  return { sectionRefs, activeIndex, scrollToSection };
};
