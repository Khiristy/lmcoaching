import { useState, useEffect } from 'react';
import { loadImage } from '../Utils//load/loadImage';
import { loadScript } from '../Utils/load/loadScript';

// Fonction pour simuler un délai (par exemple 2 secondes)
const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const useResourceLoader = (resources) => {
  const [loading, setLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(0);
  const [loadingTime, setLoadingTime] = useState(0); // State pour stocker la durée de chargement
  const totalResources = resources.length;

  useEffect(() => {
    const loadResources = async () => {
      const startTime = performance.now(); // Enregistrer le temps de début du chargement

      for (let i = 0; i < resources.length; i++) {
        const resource = resources[i];

        if (resource.type === 'image') {
          await loadImage(resource.src);
        } else if (resource.type === 'script') {
          await loadScript(resource.src);
        }

        // Simuler un délai de 2 secondes (par exemple)
        await simulateDelay(2000);

        // Mise à jour du compteur de ressources chargées
        setResourcesLoaded((prev) => prev + 1);
      }

      const endTime = performance.now(); // Enregistrer le temps de fin du chargement
      setLoadingTime(Math.round(endTime - startTime)); // Calculer la durée en millisecondes

      setLoading(false);
    };

    loadResources();
  }, [resources]);

  return { loading, resourcesLoaded, totalResources, loadingTime };
};
