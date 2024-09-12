import HomeHero from "../../Home/Hero/HomeHero";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useMotionHeader from "../../Hooks/Animation/useMotionHeader"; // Le hook que nous venons de créer

const LoaderHero = forwardRef(({ children, direction, startAnimation }, ref) => {
    const { controls, slideVariants, getVariant } = useMotionHeader(startAnimation, direction);

    return (
        <motion.div
            className="loader_hero"
            ref={ref}
            variants={slideVariants}
            initial={getVariant(direction)} // Utilisation correcte de `getVariant`
            animate={controls}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 2.3, ease: "easeInOut" }}
            style={{ willChange: "opacity, transform", background: "linear-gradient(270deg, rgba(30, 30, 30, 0) 39.35%, #1E1E1E 100%)" }}
        >
            <HomeHero>{children}</HomeHero>
        </motion.div>
    );
});

LoaderHero.propTypes = {
    children: PropTypes.node,
    direction: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
    startAnimation: PropTypes.bool.isRequired,
};

LoaderHero.displayName = "LoaderHero";

export default LoaderHero;