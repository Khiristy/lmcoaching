// utils/loadImage.js

export const loadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Même en cas d'erreur, on considère la ressource comme "chargée"
    });
  };
  