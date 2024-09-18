import "./HomeAbout.scss";
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx"; // Hook d'animation pour la section principale
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren.jsx"; // Hook d'animation pour les enfants
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren.jsx"; // Composant pour gérer les animations des enfants
import { motion } from "framer-motion";
import aboutImg from "/media/about/homeAbout_img.webp";

const HomeAbout = () => {
  // Utilisation du hook pour l'animation principale de la section
  const { ref, controls: sectionControls } = useScrollAnimation(0.5);

  // Utilisation du hook pour l'animation des enfants
  const { controls: childrenControls, transition: childrenTransition } =
    useAnimateChildren(true);

  return (
    <motion.section
      className="HomeAbout"
      ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
      initial={{ opacity: 0, y: 50 }}
      animate={sectionControls}
      transition={{ duration: 0.5 }}
    >
      <AnimatedChildren
        controls={childrenControls}
        transition={childrenTransition}
      >
        <div className="HomeAbout_container">
          <div className="HomeAbout_container-left">
            <img
              src={aboutImg}
              alt=""
              className="HomeAbout_container-left--img"
            />
          </div>
          <div className="HomeAbout_container-right">
            <i className="fa-solid fa-quote-left"></i>
            <h3 className="HomeAbout_container-right--title">Bienvenue !</h3>
            <p className="HomeAbout_container-right--text">
              Je m&apos;appelle Loïc, j&apos;ai 32 ans et je suis coach sportif
              diplômé d&apos;un BPJEPS Activités de la Forme, avec une
              spécialisation en Musculation et Haltérophilie.
              <br />
              <br /> Passionné de musculation depuis 14 ans, j&apos;ai également
              pratiqué des disciplines comme le judo, la boxe et le basket, qui
              m&apos;ont appris des valeurs essentielles telles que la
              discipline, la résilience, le respect et le dépassement de soi.
              <br />
              <br /> J&apos;ai concouru dans la catégorie Men&apos;s Physique et
              terminé vice-champion de France. Cette expérience a marqué le
              début d&apos;un parcours riche en compétitions et en succès
              sportifs.
              <br />
              <br /> Aujourd&apos;hui, je souhaite transmettre cette passion et
              ces valeurs à tous ceux qui souhaitent les découvrir.
            </p>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <div className="social_link">
            <ul>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/loiicc.m"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="tiktok"
                  href="https://www.tiktok.com/@lm.coaching10?_t=8pTBK3sd7ui&_r=1"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/loiicc.m?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="snapchat"
                  href="https://www.snapchat.com/add/lm.coaching?share_id=kBKPRoB3UZ0&locale=fr-FR"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa-brands fa-snapchat" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedChildren>
    </motion.section>
  );
};

export default HomeAbout;
