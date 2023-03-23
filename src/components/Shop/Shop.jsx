import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Baner from "../Baner/Baner";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";

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
        let newArr = json.map((obj) => ({ ...obj, inCart: false }));
        setProductsItems(newArr);
      });
    addToItems(productsItems);
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
    setProductsItems(
      productsItems.map((item) =>
        item.id === obj.id ? { ...item, inCart: !obj.inCart } : item
      )
    );
    addToItems(productsItems);
  };

  const addToItems = (products) => {
    const newArr = products.filter((item) => item.inCart);
    setCartItems(newArr);
  };

  const onInput = (event) => {
    setSearchValue(event.target.value);
  };

  const summ = () => {
    const sum = productsItems.reduce((accumulator, obj) => {
      if (obj.inCart) {
        return accumulator + obj.price;
      }
      return accumulator;
    }, 0);
    return sum;
  };

  return (
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
              src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/search.svg"
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
                srcBuy={
                  obj.inCart
                    ? "https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/bought.svg"
                    : "https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btnBuy.svg"
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
