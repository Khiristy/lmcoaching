import { useState, useEffect } from "react";

import LoaderLayout from "../../features/Shared/Loader/MainLoader/LoaderLayout.jsx";
import MotionHomeHeader from "../../features/Shared/Loader/MotionHomeHeader.jsx";

import HomeHero from "../../features/Home/Hero/HomeHero.jsx";
import HomeJourney from "../../features/Home/Journey/HomeJourney.jsx";
import HomePersoCard from "../../features/Home/PersoCard/HomePersoCard.jsx";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan.jsx";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation.jsx";
import HomeFaq from "../../features/Home/Faq/HomeFaq.jsx";
import HomeReview from "../../features/Home/Review/HomeReview.jsx";
import "./Home.scss";

const Home = () => {
    const [startAnimation, setStartAnimation] = useState(false); // Déclarez un état pour l'animation
    const [loading, setLoading] = useState(true); // Déclarez un état pour le chargement

    useEffect(() => {
        // Simulez un délai avant que l'animation du Loader ne soit terminée
        setTimeout(() => {
            setStartAnimation(true); // Déclencher l'animation
            setTimeout(() => {
                setLoading(false); // Arrêtez le Loader et affichez le contenu
            }, 2900); // Délai de l'animation du Loader (modifiable)
        },); // Délai initial avant le début de l'animation
    }, []);

    return (
        <div className="home">
            {loading ? (
                // Affichez LoaderLayout tant que loading est true
                <LoaderLayout startAnimation={startAnimation} />
            ) : (
                // Affichez les autres composants une fois le chargement terminé
                <>
                <MotionHomeHeader startAnimation={true} />
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
