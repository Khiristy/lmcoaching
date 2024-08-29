import "./Hero.module.scss";
// import heroImg from "/media/hero_img.png";
import heroImg from "/media/img_hero-test.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left_side-container">
        <h1>
          Achieve Your
          <br /> Goals Faster
        </h1>
        <p>
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <a href="" className="main_btn">
          Réserver maintenant !
        </a>
      </div>
      <div className="right_side-container">
        {/* <div className="divider_top" />
        <div className="divider_bottom" /> */}
        <img src={heroImg} alt="" className="hero_img" />
      </div>
    </section>
  );
};

export default Hero;
