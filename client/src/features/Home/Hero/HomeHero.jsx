import './HomeHero.scss';
import MainBtn from '../../Shared/Buttons/MainBtn/MainBtn.jsx';
import heroImg from '/media/hero_img_test-3.jpg';

const Hero = () => {
  return (
      <section className="hero">
          {/* Contenu de gauche */}
          <div className="left_side-container">
              <h1>Atteignez vos objectifs <br /> plus rapidement</h1>
              <p>Transforme ton corps avec notre coaching en musculation...</p>
              <MainBtn />
          </div>

          {/* Contenu de droite */}
          <div className="right_side-container">
              <img 
                  src={heroImg}
                  alt="hero"
                  className="hero_img"
              />
          </div>
      </section>
  );
};


export default Hero;