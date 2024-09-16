import { useCallback } from 'react';

const useScrollTo = () => {
  const scrollToSection = useCallback((ref, offset) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (typeof offset === 'number') {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  }, []);

  return scrollToSection;
};

export default useScrollTo;