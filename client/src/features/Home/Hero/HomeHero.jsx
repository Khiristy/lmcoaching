import "./HomeHero.scss";
import heroImg from "/media/homeHero/hero_img.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="right_side-container">
        <div className="hero_img-bckgrd"></div>
        <img src={heroImg} alt="hero" className="hero_img" />
      </div>

    </section>
  );
};

export default Hero;
