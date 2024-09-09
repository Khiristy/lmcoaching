import { useState, useEffect } from "react"; // N'oubliez pas d'importer useState et useEffect
import LoaderLayout from "../features/Shared/Loader/MainLoader/LoaderLayout.jsx";

import HomeHero from "../features/Home/Hero/HomeHero.jsx";
import HomeJourney from "../features/Home/Journey/HomeJourney.jsx";
import HomePersoCard from "../features/Home/PersoCard/HomePersoCard.jsx";
import HomePricingPlan from "../features/Home/PricingPlan/HomePricingPlan.jsx";
import HomeTransformation from "../features/Home/Transformation/HomeTransformation.jsx";
import HomeFaq from "../features/Home/Faq/HomeFaq.jsx";
import HomeReview from "../features/Home/Review/HomeReview.jsx";
import "./Home.scss";

const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false); // Déclarez un état pour l'animation

  useEffect(() => {
    // Vous pouvez ajouter une logique ici pour déclencher l'animation après un délai ou après que certains éléments soient prêts.
    setTimeout(() => {
      setStartAnimation(true); // Déclenchement de l'animation après un délai
    }, 1000); // Délai d'une seconde (modifiable)
  }, []);

  return (
    <div className="home">
      <LoaderLayout startAnimation={startAnimation} />
        <HomeHero />
        <HomeJourney />
        <HomePersoCard />
        <HomePricingPlan />
        <HomeTransformation />
        <HomeFaq />
        <HomeReview />
      
    </div>
  );
};

export default Home;
