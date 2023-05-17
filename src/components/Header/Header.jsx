import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../img/logo2.svg";
import cart from "../../img/cart.svg";
import "./index.css";
import LanguageSwitch from "./LanguageSwitch";

const Header = ({ onClickCart, sum }) => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="leftHeader">
        <img src={logo} width={40} height={40} alt="logo" />
        <div className="headerInfo">
          <h3>{t("translation.shopName")}</h3>
          <p>{t("translation.shopDescription")}</p>
        </div>
      </div>
      <ul className="rightHeader">
        <li>
          <button className="cartBtn" onClick={onClickCart}>
            <img src={cart} alt="cart" />
          </button>
          <span>{sum + "$"}</span>
        </li>
        <li>
          <LanguageSwitch />
        </li>
      </ul>
    </header>
  );
};

export default Header;
