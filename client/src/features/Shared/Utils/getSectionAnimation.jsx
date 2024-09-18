export const getSectionAnimation = (activeIndex, sectionIndex) => {
    return {
      initial: { opacity: 0 }, // Opacité initiale à 0 (invisible)
      animate: { opacity: activeIndex === sectionIndex ? 1 : 0 }, // Affiche la section active
      exit: { opacity: 0 }, // Cache la section quand elle n'est plus active
      transition: { duration: 0.8 }, // Durée de la transition
    };
  };
  