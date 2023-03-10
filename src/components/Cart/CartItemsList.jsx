import React from "react";
import "./index.css";

const CartItemsList = ({
  items,
  onDragStart,
  onDragOver,
  onDrop,
  sum,
  onRemove,
  onClose,
}) => (
  <div className="overlay">
    <div className="drawer">
      <div className="header">
        <h2>Cart</h2>
        <img
          onClick={onClose}
          src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btn-remove.svg"
          alt="remove"
        />
      </div>
      <div className="item">
        {items.map((obj, index) => (
          <div
            key={obj.id}
            className="cartItem"
            draggable={true}
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
          >
            <img
              width={70}
              height={70}
              src={obj.productImg}
              alt="sneakers_photo"
            />
            <div className="discription-product">
              <p>{obj.title}</p>
              <b>
                {obj.price}
                {obj.currency}
              </b>
            </div>
            <img
              className="removeBtn"
              onClick={() => onRemove(obj)}
              src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        ))}
        <div className=""> </div>
        <ul className="cartTotal">
          <li>
            <span>Total:</span>
            <div></div>
            <b>{sum + "$"}</b>
          </li>
          <li>
            <span>Tax:</span>
            <div></div>
            <b>{sum / 10 + "$"}</b>
          </li>
          <button
            className="orderBtn"
            onClick={
              sum
                ? () => alert("Thank you, Your order in progress")
                : () => alert("you have no items in cart")
            }
          >
            <img
              src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/orderBtn.svg"
              alt="orderButton"
            />
          </button>
        </ul>
      </div>
    </div>
  </div>
);
export default CartItemsList;
