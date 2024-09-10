import "./HomeHero.scss";
import heroImg from "/media/hero_img_test-3.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="right_side-container">
        <img src={heroImg} alt="hero" className="hero_img" />
      </div>
    </section>
  );
};

export default Hero;
