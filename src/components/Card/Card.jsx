import React, { useState } from "react";
import "./index.css";
import InfoButton from "./InfoButton";

const Card = (props) => {
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

  const onClickBuy = () => {
    const { onBuy } = props;
    onBuy();
  };

  const { productImg, title, price, srcBuy } = props;

  return (
    <div className="card">
      <div className="favorite"></div>
      <img
        src={productImg}
        alt="sneakers_photo"
        width={133}
        height={112}
        onLoad={handleImageLoaded}
        onError={handleImageError}
      />
      <p>{title}</p>
      <InfoButton price={price} onClickBuy={onClickBuy} srcBuy={srcBuy} />
    </div>
  );
};

export default Card;
