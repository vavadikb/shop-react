import React from "react";
import Header from "../Header/Header";
import Baner from "../Baner/Baner";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";
import { products } from "../../database/products";

function Shop() {
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [productsItems, setProductsItems] = React.useState(products);
  const [cartItems,setCartItems] = React.useState()



  const onAddToCart = (obj) => {
    let newArr = []

    productsItems.map((item,index) => 
    item.id===obj.id 
    ? newArr[index] = {...item, inCart:!obj.inCart} 
    : newArr[index] = {...item})
      console.log(newArr)
    setProductsItems(newArr)
    addToItems(newArr)

  };

  const addToItems = (products) => {
    let newArr = []
    console.log(products.map(item=>console.log(item.inCart)))
    products.map(item => !item.inCart ? newArr : newArr= [...newArr, item] )
    setCartItems(newArr)
    console.log(cartItems)
  }

  const onInput = (event) => {
    setSearchValue(event.target.value);
  };

  const summ = () => {
    let sum = 0;
    productsItems.map((obj) => obj.inCart ? sum += obj.price : sum );
    return sum;
  };

  return (
    <div className="wrapper">
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
        sum={summ()}
      />
      <Baner
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      {cartOpened && (
        <Cart
          items={cartItems}
          onRemove={onAddToCart}
          onClose={() => {
            setCartOpened(false);
          }}
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