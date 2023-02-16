import React from "react";

const CartItem = ({productImg, title, price}) => {
  return (
    <div className="cartItem">
      <img width={70} height={70} src={productImg} alt="sneakers_photo" />
      <div className="discription-product">
        <p>{title}</p>
        <b>{price}</b>
      </div>
      
      <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>
  );
};

export default CartItem;
