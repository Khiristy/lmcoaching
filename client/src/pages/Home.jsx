import "./Home.module.scss";
import Hero from "/src/components/hero/Hero.jsx";
import Journey from "/src/components/journey/Journey.jsx";
import PersoCardLayer from "/src/components/persoCard/PersoCardLayer.jsx";
import PricingPlanSection from "/src/components/priceCard/PricingPlanSection.jsx";
import TransformationSection from "/src/components/transformation/TransformationSection.jsx";
import FaqSection from "/src/components/faq/FaqSection.jsx";
import ReviewSection from "/src/components/review/ReviewSection.jsx";


const Home = () => (
  
    <div className="home">
      <Hero />
      <Journey />
      <PersoCardLayer />
      <PricingPlanSection />
      <TransformationSection />
      <FaqSection />
      <ReviewSection />
    </div>

);
export default Home;
