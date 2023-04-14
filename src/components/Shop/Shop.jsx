import React, { useState, useEffect, useMemo } from "react";
import searchImg from "../../img/search.svg";
import Header from "../Header/Header";
import Baner from "../Baner/Baner";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";
import CartContext from "../Contexts/CartContext";

function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [productsItems, setProductsItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setImageLoaded] = useState(false);
  const [error, setImageError] = useState(null);

  useEffect(() => {
    fetch("https://64139d9ea68505ea73376302.mockapi.io/react-shop/shoes ")
      .then((response) => response.json())
      .then((json) => {
        setProductsItems(json);
      });
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Control") {
      setCartOpened(true);
    }
  };

  const handleImageLoaded = () => {
    console.log("Image loaded successfully");
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.log("Error loading image");
    setImageError(true);
  };

  const onAddToCart = (obj) => {
    const index = cartItems.indexOf(obj.id);
    if (cartItems.includes(obj.id)) {
      setCartItems([...removeItem(cartItems, index)]);
    } else {
      setCartItems((pervItems) => [...pervItems, obj.id]);
    }

    addToItems(cartItems);
  };

  const removeItem = (arr, index) => {
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const checkInCart = (obj) => {
    const candidate = cartItems.includes(obj.id);
    if (candidate)
      return "https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/bought.svg";
    if (!candidate)
      return "https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btnBuy.svg";
  };

  const addToItems = (products) => {};

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
  // const summ = useMemo(() => {
  //   return sumPricesById(productsItems, cartItems);
  // }, [productsItems, cartItems]);
  const summ = () => {
    if (!productsItems || !cartItems) {
      return 0;
    }
    return sumPricesById(productsItems, cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, productsItems }}>
      <div className="wrapper">
        <Header onClickCart={() => setCartOpened(true)} sum={summ()} />
        <Baner onClickCart={() => setCartOpened(true)} />
        {cartOpened && (
          <Cart
            items={cartItems}
            onRemove={onAddToCart}
            onClose={() => setCartOpened(false)}
            sum={summ()}
          />
        )}

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
                placeholder="Search product"
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
                  id={obj.id}
                  title={obj.title}
                  price={obj.price}
                  productImg={obj.productImg}
                  onBuy={() => {
                    onAddToCart(obj);
                  }}
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
