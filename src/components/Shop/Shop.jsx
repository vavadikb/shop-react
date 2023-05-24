import React, { useEffect, useState } from "react";
import searchImg from "../../img/search.svg";
import Header from "../Header/Header";
import Baner from "../Baner/Baner";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";

import CartContext from "../Contexts/CartContext";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../store/slices/productSlice";
import { addToCart, removeFromCart, toggleCart } from "../../store/slices/cartSlice";
import { useTranslation } from "react-i18next";

function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const cartOpened = useSelector((state) => state.cart.isOpen)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productsItems = useSelector((state) => state.products);
  console.log(useSelector((state) => state.cart))

  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    fetch("https://64139d9ea68505ea73376302.mockapi.io/react-shop/shoes ")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setProducts(json));
      });
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch]);

  const handleKeyPress = (event) => {
    if (event.key === "Control") {
      dispatch(toggleCart());
    }
  };

  const onAddToCart = (obj) => {
    dispatch(addToCart(obj.id));
  };

  const onRemoveFromCart = (obj) => {
    dispatch(removeFromCart(obj.id));
  };

  const handleImageLoaded = () => {
    console.log("Image loaded successfully");
    setLoading(true);
  };

  const handleImageError = () => {
    console.log("Error loading image");
    setLoading(true);
  };

  const checkInCart = (obj) => {
    return cartItems.includes(obj.id)
      ? "https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/bought.svg"
      : "https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btnBuy.svg";
  };

  const onInput = (event) => {
    setSearchValue(event.target.value);
  };

  function sumPricesById(prices, ids) {
    return ids.reduce((accumulator, id) => {
      const index = id - 1;
      if (index >= 0 && index < prices.length) {
        return accumulator + prices[index].price;
      }
      return accumulator;
    }, 0);
  }

  const summ = () => {
    if (!productsItems || !cartItems) {
      return 0;
    }
    return sumPricesById(productsItems, cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems: onRemoveFromCart, productsItems }}>
      <div className="wrapper">
        <Header onClickCart={() => dispatch(toggleCart())} sum={summ()} />
        <Baner onClickCart={() => dispatch(toggleCart())} />
        {cartOpened && <Cart onClose={() => dispatch(toggleCart())} sum={summ()} />}

        <div className="content">
          <div className="search-parent">
            <h1>
              {searchValue
                ? `results for request: ${searchValue}`
                : "All products"}
            </h1>
            <div className="search-block">
              <img
                src={searchImg}
                alt="search-logo"
                onLoad={handleImageLoaded}
                onError={handleImageError}
              />
              <input
                onChange={onInput}
                placeholder={t("translation.search")}
                className="inp"
              />
            </div>
          </div>
          <div className="sneakers">
            {productsItems
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj) => (
                <Card
                  key={obj.id}
                  id={obj.id}
                  title={obj.title}
                  price={obj.price}
                  productImg={obj.productImg}
                  onBuy={() => onAddToCart(obj)}
                  srcBuy={checkInCart(obj)}
                />
              ))}
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default Shop;
