import { useRef, useCallback } from 'react';

const useSmoothScroll = () => {
  const sectionRefs = useRef({});

  const registerSection = useCallback((id, ref) => {
    sectionRefs.current[id] = ref;
  }, []);

  const scrollToSection = useCallback((id) => {
    const sectionRef = sectionRefs.current[id];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { registerSection, scrollToSection };
};

export default useSmoothScroll;
