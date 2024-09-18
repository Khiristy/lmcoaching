import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomeAbout from "../../features/Home/About/HomeAbout";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFaq";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomePricingPlan />
      <HomeJourney />
      <HomeFaq />
      <HomeTransformation />
      <HomeReview />
    </div>
  );
};

export default Home;
