import React from "react";
import logo from "../../img/logo2.svg";
import cart from "../../img/cart.svg";
import "./index.css";

const Header = ({ onClickCart, sum }) => {
  return (
    <header>
      <div className="leftHeader">
        <img src={logo} width={40} height={40} alt="logo" />
        <div className="headerInfo">
          <h3>REACT SHOP</h3>
          <p>The best sneakers shop</p>
        </div>
      </div>
      <ul className="rightHeader">
        <li>
          <button className="cartBtn" onClick={onClickCart}>
            <img src={cart} alt="cart" />
          </button>
          <span>{sum + "$"}</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
