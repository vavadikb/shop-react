import React from "react";
import "./index.css";
import removeBtnImg from "../../img/btn-remove.svg";
import orderBtn from "../../img/orderBtn.svg";
import { useTranslation } from "react-i18next";

const CartItemsList = ({
  items,
  onDragStart,
  onDragOver,
  onDrop,
  sum,
  onRemove,
  onClose,
}) => {
  const { t } = useTranslation();
  console.log(items, sum)
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="header">
          <h2>{t("translation.cart.title")}</h2>
          <img onClick={onClose} src={removeBtnImg} alt="remove" />
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
                src={removeBtnImg}
                alt="remove"
              />
            </div>
          ))}
          <div className=""> </div>
          <ul className="cartTotal">
            <li>
              <span>{t("translation.cart.total")}</span>
              <div></div>
              <b>{sum + "$"}</b>
            </li>
            <li>
              <span>{t("translation.cart.tax")}</span>
              <div></div>
              <b>{sum / 10 + "$"}</b>
            </li>
            <button
              className="orderBtn"
              onClick= {() => alert(sum ? "Thank you, Your order in progress" : "you have no items in cart")}
            >
              <img src={orderBtn} alt="orderButton" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartItemsList;
