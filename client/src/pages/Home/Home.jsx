import { useState, useEffect } from "react";
import LoaderLayout from "../../features/Shared/Loader/MainLoader/LoaderLayout";
import MotionHomeHeader from "../../features/Shared/Loader/MotionHomeHeader";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomePersoCard from "../../features/Home/PersoCard/HomePersoCard";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFaq";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";
import "./Home.scss";

const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un délai avant l'animation du Loader
    setTimeout(() => {
      setStartAnimation(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Délai modifiable
    }, []);
  }, []);

  return (
    <div className="home">
      {loading ? (
        // Affiche Loader tant que loading est true
        <LoaderLayout startAnimation={startAnimation} />
      ) : (
        // Affiche les autres composants après le chargement
        <>
          <MotionHomeHeader startAnimation={true} />
          <HomeHero>
            <div>Home</div>
          </HomeHero>
          <HomePersoCard>
          <h1>qvvqvqscv</h1>
          </HomePersoCard>
          <HomePricingPlan />
          <HomeJourney />
          <HomeFaq />
          <HomeTransformation />
          <HomeReview />
        </>
      )}
    </div>
  );
};

export default Home;
