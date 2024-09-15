// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { stopLoading } from "../../redux/loadingSlice";
// import useLoader from "../../features/Hooks/Loader/useLoader"; // Utilise le hook personnalisé
// import LoaderLayout from "../../features/Shared/Loader/MainLoader/LoaderLayout";
// import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomePersoCard from "../../features/Home/PersoCard/HomePersoCard";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFAQ";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";
import Footer from "../../features/Home/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <HomePersoCard />
      <HomePricingPlan />
      <HomeJourney />
      <HomeFaq />
      <HomeTransformation />
      <HomeReview />
      <Footer />
    </div>
  );
};

export default Home;
