import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fallbackImg from '/media/weight_card.png'; // Assure-toi que le chemin est correct
import "./JourneyCarrousel.scss"; // Styles CSS

const ImageCarousel = () => {
  const [loadedImages, setLoadedImages] = useState({});

  // Fonction pour gérer les erreurs de chargement des images
  const handleImageError = (index) => {
    console.log(`Erreur lors du chargement de l'image à l'index ${index}, fallback activé.`);
    setLoadedImages((prevState) => ({
      ...prevState,
      [index]: fallbackImg // Remplace par l'image de fallback
    }));
  };

  // Paramètres du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    lazyLoad: 'ondemand', // Active le lazy loading
  };

  // Liste des chemins des images
  const images = [
    "/media/journey_imgTest-1.png",
    "/media/journey_imgTest-2.png",
    "/media/journey_imgTest-3.png"
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => {
          console.log(`Rendu de l'image ${image} à l'index ${index}`);
          return (
            <div key={index}>
              <img
                src={loadedImages[index] || image}
                alt={`Slide ${index + 1}`}
                onError={() => handleImageError(index)}
              />
            </div>
          );
        })}
      </Slider>
      <img src="/media/journey_imgTest-1.png" alt="Test Image" />
    </div>
  );
};

export default ImageCarousel;
