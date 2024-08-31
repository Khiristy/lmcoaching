import "./Journey.module.scss";
import journeyImg from "/media/journey_img.jpg";

const Journey = () => {
  return (
    <section className="journey">
      <figure className="journey_left">
        <img src={journeyImg} alt="" className="journey_img" />
      </figure>
      <div className="journey_right">
        <h2>Bienvenue sur mon site!</h2>
        <h3>Mes Débuts</h3>
        <p>
          Ma passion pour le sport a commencé avec les arts martiaux comme le
          judo, la boxe et le sanda. Ces disciplines m&apos;ont appris la discipline,
          la résilience et le respect des autres.
        </p>
      </div>
    </section>
  );
};

export default Journey;
