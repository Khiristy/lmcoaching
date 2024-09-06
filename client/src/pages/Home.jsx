import "./Home.scss";
import HomeHero from "../features/Home/Hero/HomeHero.jsx";
import HomeJourney from "../features/Home/Journey/HomeJourney.jsx";
import HomePersoCard from "../features/Home/PersoCard/HomePersoCard.jsx";
import HomePricingPlan from "../features/Home/PricingPlan/HomePricingPlan.jsx";
import HomeTransformation from "../features/Home/Transformation/HomeTransformation.jsx";
import HomeFaq from "../features/Home/Faq/HomeFaq.jsx";
import HomeReview from "../features/Home/Review/HomeReview.jsx";

const Home = () => (
  
    <div className="home">
      <HomeHero />
      <HomeJourney />
      <HomePersoCard />
      <HomePricingPlan />
      <HomeTransformation />
      <HomeFaq />
      <HomeReview />
    </div>

);
export default Home;
