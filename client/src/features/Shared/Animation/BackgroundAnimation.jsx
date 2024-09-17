import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo} from "react";
import PropTypes from 'prop-types';
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {
  // Initialise le moteur de particules au chargement du composant
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);  // Chargement léger des particules
    });
  }, []); // setInit ajouté comme dépendance

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 120,

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
          repulse: {
            distance: 100,
            duration: 10,
        } 
        }
      },
      particles: {
        color: {
          value: "#a52a2a",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

ParticlesComponent.propTypes = {
  id: PropTypes.string.isRequired, // Déclarez 'id' comme requis
};

export default ParticlesComponent;
