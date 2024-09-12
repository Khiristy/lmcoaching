import { useMemo } from "react";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const useMotionHeader = (startAnimation, direction = "left") => {
    const controls = useAnimation();

    // Définir `getVariant` pour obtenir la variante selon la direction
    const getVariant = (direction) => {
        switch (direction) {
            case "left":
                return "enterLeft";
            case "right":
                return "enterRight";
            // Ajouter d'autres variantes si nécessaire
            default:
                return "initial";
        }
    };

    // Utiliser useMemo pour ne recalculer les variantes que si `direction` change
    const slideVariants = useMemo(() => ({
        enterLeft: { x: "-100vw" },
        initial: { opacity: 0, x: 0 }, // Retrait de `translateY`
        exit: { opacity: 0, x: "-8px" },
    }), []);

    useEffect(() => {
        if (startAnimation) {
            controls.start(slideVariants[direction] || "initial");
        }
    }, [startAnimation, controls, direction, slideVariants]);

    return { controls, slideVariants, getVariant }; // Retourner `getVariant`
};

export default useMotionHeader;
