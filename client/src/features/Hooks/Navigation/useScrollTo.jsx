import { useCallback } from 'react';

const useScrollTo = () => {
  const scrollToSection = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return scrollToSection;
};

export default useScrollTo;