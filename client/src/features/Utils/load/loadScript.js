// utils/loadScript.js

export const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => resolve(); // Gérer les erreurs sans bloquer le chargement
      document.head.appendChild(script);
    });
  };
  