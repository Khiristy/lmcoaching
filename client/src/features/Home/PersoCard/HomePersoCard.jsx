import './HomePersoCard.scss';
import useScrollAnimation from '../../Hooks/Animation/useScrollAnimation';
import useAnimateChildren from '../../Hooks/Animation/useAnimateChildren';
import AnimatedHomePersoCard from './AnimatedHomePersoCard';
import AnimatedChildren from '../../Shared/Animation/AnimatedChildren';
import PersoCardList from './PersoCardList';

const HomePersoCard = () => {
  // Utilisation du hook pour l'animation principale de la section
  const { ref, controls: sectionControls } = useScrollAnimation(0.5);

  // Utilisation du hook pour l'animation des enfants
  const { controls: childrenControls, transition: childrenTransition } = useAnimateChildren(true);


  return (
      <AnimatedHomePersoCard ref={ref} controls={sectionControls}>
        <div className="persoCard_container">
          <div className="persoCard_text">
              <h2 className="persoCard_title">Bienvenue sur mon site !</h2>
              <p className="persoCard_description">
                  Ma passion pour le judo, la boxe et le basket m&apos;ont appris la discipline, la résilience, le respect.
                  Aujourd&apos;hui, je souhaite transmettre ces valeurs à tous ceux qui souhaitent les découvrir.
              </p>
          </div>

          {/* Section animée pour les cartes */}
          <AnimatedChildren
              controls={childrenControls}
              transition={childrenTransition}
          >
              <PersoCardList />
          </AnimatedChildren>
          </div>
      </AnimatedHomePersoCard>
  );
};

export default HomePersoCard;