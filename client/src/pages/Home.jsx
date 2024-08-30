import "./Home.module.scss";
import Hero from "/src/components/hero/Hero.jsx";
import Journey from "/src/components/journey/Journey.jsx";
import PersoCardLayer from "/src/components/persoCard/PersoCardLayer.jsx";
import PricingPlanSection from "/src/components/priceCard/PricingPlanSection.jsx";


const Home = () => (
  
    <div className="home">
      <h1>Welcome to lmcoaching</h1>
      <Hero />
      <Journey />
      <PersoCardLayer />
      <PricingPlanSection />
    </div>

);
export default Home;
