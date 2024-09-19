import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomeAbout from "../../features/Home/About/HomeAbout";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFaq";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";

import ReactFullpage from "@fullpage/react-fullpage"; // Import React FullPage
import "fullpage.js/dist/fullpage.css";

import "./Home.scss";

const Home = () => {
  return (
    <ReactFullpage
      licenseKey={"MVJ7H-WNQ18-VIM07-MP547-NMJVM"}
      scrollingSpeed={1200} // Vitesse de défilement
      anchors={[
        "hero",
        "about",
        "pricing",
        "journey",
        "faq",
        "transformation",
        "review",
      ]}
      navigation
      autoScrolling={true}
      fitToSection={true}
      scrollHorizontally={false}
      scrollBar={false}
      scrollOverflow={false} // Désactive la gestion du débordement
      render={() => {
        return (
          <div>
            <div id="Header">
              <Header />
            </div>
            <div className="section" data-anchor="hero">
              <HomeHero />
            </div>
            <div className="section" data-anchor="about">
              <HomeAbout />
            </div>
            <div className="section" data-anchor="pricing">
              <HomePricingPlan />
            </div>
            <div className="section" data-anchor="journey">
              <HomeJourney />
            </div>
            <div className="section" data-anchor="faq">
              <HomeFaq />
            </div>
            <div className="section" data-anchor="transformation">
              <HomeTransformation />
            </div>
            <div className="section" data-anchor="review">
              <HomeReview />
            </div>
          </div>
        );
      }}
    />
  );
};

export default Home;
