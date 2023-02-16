import React from "react";

const CartItem = (props) => {
  return (
    <div className="cartItem">
      <img width={70} height={70} src={props.productImg} alt="sneakers_photo" />
      <div className="discription-product">
        <p>{props.title}</p>
        <b>{props.price}</b>
      </div>
      
      <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>
  );
};

export default CartItem;
