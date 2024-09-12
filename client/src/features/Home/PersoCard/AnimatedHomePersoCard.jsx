import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const AnimatedHomePersoCard = forwardRef(({ children, controls }, ref) => {
    console.log("Ref dans AnimatedHomePersoCard:", ref);
    console.log("Controls dans AnimatedHomePersoCard:", controls);

    return (
        <motion.section
            className="section persoCard_content animated-home-persocard"
            ref={ref} // Correctement utilisé ici avec forwardRef
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.section>
    );
});

AnimatedHomePersoCard.displayName = 'AnimatedHomePersoCard';

AnimatedHomePersoCard.propTypes = {
    children: PropTypes.node.isRequired, // Assure que les children sont bien passés
    controls: PropTypes.object.isRequired, // Assure que les controls sont bien passés
};

export default AnimatedHomePersoCard;
