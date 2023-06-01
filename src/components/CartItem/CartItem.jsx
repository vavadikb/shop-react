import React, { useState } from "react";
import useImageLoader from "../../hooks/useIageLoader";

function CartItem(props) {
  const { title, price, productImg } = props;
  const { imageLoaded, imageError, handleImageLoaded, handleImageError } = useImageLoader();

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
