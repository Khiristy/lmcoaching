import "./Home.scss";

import {useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { stopLoading } from '../../redux/loadingSlice';

import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomePersoCard from "../../features/Home/PersoCard/HomePersoCard";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFAQ";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";

const Home = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();
  const [startAnimation, setStartAnimation] = useState(false);  // Définir l'état pour l'animation

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(stopLoading());
      setStartAnimation(true);  // Activer l'animation après le chargement
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="home">
      {isLoading ? (
        "Chargement..." // Afficher un message de chargement
      ) : (
        <>
          <Header startAnimation={startAnimation}/>
          <HomeHero />
          <HomePersoCard />
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
