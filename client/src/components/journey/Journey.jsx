import "./Journey.module.scss"
import journeyImg from "/media/journey_img.jpg";

const Journey = () => {
  return (
    <section className="journey">
      <figure className="journey_left">
        <img src={journeyImg} alt="" className="journey_img" />
      </figure>
      <div className="journey_right">
        <h2>Welcome to my website! Let me tell you about my journey.</h2>
        <h3>My Beginnings</h3>
        <p>
          My passion for sports started with martial arts like judo, boxing, and
          sanda. These disciplines taught me discipline, resilience, and respect
          for others.
        </p>
      </div>
    </section>
  );
};

export default Journey;
