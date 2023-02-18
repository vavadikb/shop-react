import React from "react";
import "./index.css"

const Header = ({ onClickCart, sum }) => {
  return (
    <header>
      <div className="leftHeader">
        <img
          src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/logo2.svg"
          width={40}
          height={40}
          alt="logo"
        />
        <div className="headerInfo">
          <h3>REACT SHOP</h3>
          <p>The best sneakers shop</p>
        </div>
      </div>
      <ul className="rightHeader">
        <li>
          <button className="cartBtn" onClick={onClickCart}>
            <img src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/cart.svg" alt="cart"/>
          </button>
          <span>{sum + "$"}</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
