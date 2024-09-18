import { useState, useEffect, useCallback, useRef  } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isScrolling, setIsScrolling] = useState(false);

  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const pricingRef = useRef(null);
  const journeyRef = useRef(null);
  const faqRef = useRef(null);
  const transformationRef = useRef(null);
  const reviewRef = useRef(null);

  // Scroll handler
  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      setIsScrolling(true);
      // You can add any additional scrolling logic here if needed
      setTimeout(() => setIsScrolling(false), 800); // Delay to prevent continuous scroll
    }
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="home">

      <Header
        refs={{
          heroRef,
          aboutRef,
          pricingRef,
          journeyRef,
          faqRef,
          transformationRef,
          reviewRef,
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          id="hero"
          ref={heroRef} // Assign the ref
          className="section"
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{ duration: 0.8 }}
        >
          <HomeHero />
        </motion.div>
        <motion.div id="HomeAbout" ref={aboutRef}>
          <HomeAbout />
        </motion.div>
        <motion.div id="pricing" ref={pricingRef}>
          <HomePricingPlan />
        </motion.div>
        <motion.div id="journey" ref={journeyRef}>
          <HomeJourney />
        </motion.div>
        <motion.div id="faq" ref={faqRef}>
          <HomeFaq />
        </motion.div>
        <motion.div id="transformation" ref={transformationRef}>
          <HomeTransformation />
        </motion.div>
        <motion.div id="review" ref={reviewRef}>
          <HomeReview />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;