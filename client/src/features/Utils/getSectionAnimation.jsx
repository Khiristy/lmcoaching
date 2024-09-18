export const getSectionAnimation = (activeIndex, sectionIndex) => {
  return {
    initial: { opacity: sectionIndex === 0 ? 1 : 0 }, // Le hero (index 0) a une opacité 1 au chargement
    animate: { opacity: activeIndex === sectionIndex ? 1 : 0 }, // Gère l'opacité en fonction de l'activeIndex
    exit: { opacity: 0 },
    transition: { duration: 1.2 },
  };
};
