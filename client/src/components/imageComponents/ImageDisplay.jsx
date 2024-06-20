import { useState, useEffect } from 'react';
import { fetchAllImages } from '../api/imageApi';

const ImageDisplay = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageList = await fetchAllImages();
        setImages(imageList);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div key={image.name}>
          <h3>{image.name}</h3>
          <img src={`data:${image.contentType};base64,${image.image}`} alt={image.name} />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;