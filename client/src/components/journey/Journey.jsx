import "./Journey.module.scss";
import journeyImg from "/media/journey_img-2.jpg";

const Journey = () => {
  return (
    <section className="journey">
      <div className="journey_content">
        <h2>Bienvenue sur mon site!</h2>
        <h3>Mes Débuts</h3>
        <p>
          Ma passion pour le sport le
          judo, la boxe et le basket.
          <br /> Ces pratiques m&apos;ont appris la discipline, la résilience,
          le respect des autres ainsi que le dépassement de soi. Aujourd&apos;hui,
          je souhaite de transmettre cette passion et ces valeurs à tous
          ceux qui souhaitent les découvrir.
        </p>
      </div>
      <figure>
        <img src={journeyImg} alt="" className="journey_img" />
      </figure>
    </section>
  );
};

export default Journey;
