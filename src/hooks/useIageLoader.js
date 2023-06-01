import { useState } from 'react';

const useImageLoader = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleImageLoaded = () => {
    console.log("Image loaded successfully");
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    console.log("Error loading image");
    setImageError(true);
  };
  
  return { imageLoaded, imageError, handleImageLoaded, handleImageError };
};

export default useImageLoader;
