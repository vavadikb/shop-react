import React from "react";
import "./index.css";
import InfoButton from "./InfoButton";
import useImageLoader from "../../hooks/useIageLoader";

const Card = (props) => {
  const { imageLoaded, imageError, handleImageLoaded, handleImageError } = useImageLoader();

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
