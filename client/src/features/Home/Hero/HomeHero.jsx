import "./HomeHero.scss";
import MainBtn from "../../Shared/Buttons/MainBtn/MainBtn.jsx";
// import heroImg from "/media/hero_img.png";
import heroImg from "/media/hero_img_test-3.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left_side-container">
        <h1>
          Atteignez vos objectifs
          <br />
          plus rapidement
        </h1>
        <p>
          Transforme ton corps avec notre coaching en musculation, que ce soit
          pour la prise de masse, la perte de poids, ou le développement de tes
          capacités physiques : force, endurance, et bien plus encore.
        </p>
        <MainBtn />
      </div>
      <div className="right_side-container">
        <img src={heroImg} alt="" className="hero_img" />
      </div>
    </section>
  );
};

export default Hero;
