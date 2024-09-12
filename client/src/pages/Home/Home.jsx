import "./Home.scss";

// import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import de PropTypes
import { useLoading } from "../../features/Hooks/Loader/useLoading";

import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomePersoCard from "../../features/Home/PersoCard/HomePersoCard";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFAQ";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";

const Home = () => {
  const isLoading = useLoading();

  console.log("Home - isLoading:", isLoading); // Log pour vérifier la valeur reçue

  return (
    <div className="home">
      {isLoading ? (
        "Chargement..." // Afficher un message de chargement
      ) : (
        <>
          <h1>Bienvenue sur la page Home</h1>
          <Header />
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
Home.propTypes = {
  isLoading: PropTypes.bool.isRequired, // isLoading doit être un booléen
};
export default Home;
