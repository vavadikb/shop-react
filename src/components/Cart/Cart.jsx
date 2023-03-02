import React from "react";
import "./index.css"

function Cart({ onClose, items = [], onRemove, sum }) {

  const [inCartItems,setInCartItems] = React.useState()

  const itemsAdded = () => {
    let newArr = []
    items.map((item)=>item.inCart ? newArr=[...newArr, item] : item)
    console.log(newArr, items )
    setInCartItems(newArr)
    console.log(inCartItems)

  }

  return (
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
          {items.map((obj) => (
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src={obj.productImg}
                alt="sneakers_photo"
              />
              <div className="discription-product">
                <p>{obj.title}</p>
                <b>{obj.price + obj.currency}</b>
              </div>
              <img
                className="removeBtn"
                onClick={() => {
                  itemsAdded()
                  onRemove(obj);
                }}
                src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
        <ul className="cartTotal">
          <li>
            <span>Tolal:</span>
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
  );
}

export default Cart;
