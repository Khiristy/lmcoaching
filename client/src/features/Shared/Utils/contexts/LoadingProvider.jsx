import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useLoaderAnimations  from "../../../Hooks/Loader/useLoaderAnimations"; 
// Crée le contexte
const LoaderContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Appel du hook des animations en dehors du callback
    const { slideVariants, fadeVariants } = useLoaderAnimations();

    useEffect(() => {
        const handleLoad = () => {
            setIsPageLoaded(true);
        };

        window.addEventListener("load", handleLoad);

        const timer = setTimeout(() => {
            setIsLoading(false);
            // Tu peux maintenant utiliser slideVariants et fadeVariants pour les animations
            console.log("Animations initialisées", slideVariants, fadeVariants);

        }, 5000);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timer);
        };
    }, [slideVariants, fadeVariants]); // Ajoute ces dépendances si nécessaire

    return (
        <LoaderContext.Provider value={{ isLoading, isPageLoaded }}>
            {children}
        </LoaderContext.Provider>
    );
};

LoadingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { LoaderContext };
