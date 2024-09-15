import { motion } from "framer-motion";
import PropTypes from "prop-types";
import useLoaderAnimations  from "../../../Hooks/Loader/useLoaderAnimations"; 
import "./Loader.scss";

const LoaderLayout = ({ isLoading }) => {
    console.log("LoaderLayout - isLoading:", isLoading);

    // Appel du hook des animations en dehors de la condition
    const { slideVariants, fadeVariants } = useLoaderAnimations();

    // Si le loader n'est pas actif, on retourne null
    if (!isLoading) return null;

    return (
        <motion.div 
            className="loader"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeVariants} // Utilisation de fadeVariants pour afficher progressivement
        >
            <div>
                <motion.img
                    src="/media/loader/slide_loader_top.png"
                    alt="Top loader"
                    className="loader-image-top"
                    initial="initial"
                    animate="animate"
                    exit="exitTop"
                    variants={slideVariants.top} // Animation pour l'image du haut
                />
            </div>
            <div>
                <img
                    src="/media/loader/loader_img.png"
                    alt="Center loader"
                    className="loader-image-center"
                />
            </div>
            <div>
                <motion.img
                    src="/media/loader/slide_loader_bot.png"
                    alt="Bottom loader"
                    className="loader-image-bottom"
                    initial="initial"
                    animate="animate"
                    exit="exitBottom"
                    variants={slideVariants.bottom} // Animation pour l'image du bas
                />
            </div>
            <div className="loader-content">
                <img
                    src="/media/main_logo.png"
                    alt="logo"
                    className="loader-logo"
                />
                <h1 className="loader-title">LMCoaching</h1>
            </div>
        </motion.div>
    );
};

LoaderLayout.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default LoaderLayout;
