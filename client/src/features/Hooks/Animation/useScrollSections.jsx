import { useRef, useState, useEffect } from "react";
import React from "react";
export const useScrollSections = (numSections) => {
  const sectionRefs = useRef([...Array(numSections)].map(() => React.createRef()));
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]?.current) {
      sectionRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0 && activeIndex < numSections - 1) {
      scrollToSection(activeIndex + 1);
    } else if (event.deltaY < 0 && activeIndex > 0) {
      scrollToSection(activeIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeIndex]);

  return { sectionRefs, activeIndex, scrollToSection };
};
