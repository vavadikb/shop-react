import React, { useState } from "react";

function CartItem(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { title, price, productImg } = props;

  const handleImageLoaded = () => {
    console.log("Image loaded successfully");
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.log("Error loading image");
    setImageError(true);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img
          src={productImg}
          alt="product"
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
        {imageError && <p>Error loading image</p>}
      </div>
      <div className="cart-item-details">
        <p className="cart-item-title">{title}</p>
        <p className="cart-item-price">{price}</p>
      </div>
    </div>
  );
}

export default CartItem;
