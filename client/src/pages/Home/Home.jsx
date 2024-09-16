import { useRef } from "react";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomePersoCard from "../../features/Home/PersoCard/HomePersoCard";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFAQ";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";
import Footer from "../../features/Home/Footer/Footer";
import Header from "../../features/Home/Header/Header";
import ScrollTest from "../../features/Home/ScrollTest";
// Import the custom scroll hook
import useScrollTo from "../../features/Hooks/Navigation/useScrollTo";

const Home = () => {
  // Create references for each section
  const heroRef = useRef(null);
  const persoCardRef = useRef(null);
  const pricingPlanRef = useRef(null);
  const journeyRef = useRef(null);
  const faqRef = useRef(null);
  const transformationRef = useRef(null);
  const reviewRef = useRef(null);
  const footerRef = useRef(null);

  // Use the custom hook to handle scrolling
  const scrollToSection = useScrollTo();

  return (
    <div className="home">
      <Header />
      <button onClick={() => scrollToSection(heroRef)}>Go to Hero</button>
      <button onClick={() => scrollToSection(persoCardRef)}>
        Go to Perso Card
      </button>
      <button onClick={() => scrollToSection(pricingPlanRef)}>
        Go to Pricing Plan
      </button>

      <div ref={heroRef}>
        <HomeHero />
        
      </div>
      <div ref={persoCardRef}>
        <HomePersoCard />
      </div>
      <div ref={pricingPlanRef}>
        <HomePricingPlan />
      </div>
      <div ref={journeyRef}>
        <HomeJourney />
      </div>
      <div ref={faqRef}>
        <HomeFaq />
      </div>
      <div ref={transformationRef}>
        <HomeTransformation />
      </div>
      <div ref={reviewRef}>
        <HomeReview />
      </div>
      <div ref={reviewRef}>
        <ScrollTest />
      </div>
      <Footer ref={footerRef} />
    </div>
  );
};

export default Home;
