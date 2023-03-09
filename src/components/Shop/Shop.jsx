import React from "react";
import Header from "../Header/Header";
import Baner from "../Baner/Baner";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";
import { products } from "../../database/products";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      cartOpened: false,
      productsItems: products,
      cartItems: [],
    };
  }

  componentDidMount() {
    this.addToItems(this.state.productsItems);
  }

  onAddToCart = (obj) => {
    const { productsItems } = this.state;
    const newArr = productsItems.map((item) =>
      item.id === obj.id ? { ...item, inCart: !obj.inCart } : item
    );

    this.setState({ productsItems: newArr });
    this.addToItems(newArr);
  };

  addToItems = (products) => {
    const newArr = products.filter((item) => item.inCart);
    this.setState({ cartItems: newArr });
  };

  onInput = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  summ = () => {
    const sum = this.state.productsItems.reduce((accumulator, obj) => {
      if (obj.inCart) {
        return accumulator + obj.price;
      }
      return accumulator;
    }, 0);
    return sum;
  };

  render() {
    return (
      <div className="wrapper">
        <Header
          onClickCart={() => {
            this.setState({ cartOpened: true });
          }}
          sum={this.summ()}
        />
        <Baner
          onClickCart={() => {
            this.setState({ cartOpened: true });
          }}
        />
        {this.state.cartOpened && (
          <Cart
            items={this.state.cartItems}
            onRemove={this.onAddToCart}
            onClose={() => {
              this.setState({ cartOpened: false });
            }}
            sum={this.summ()}
          />
        )}
        <div className="content">
          <div className="search-parent">
            <h1>
              {this.state.searchValue
                ? `results for request: ${this.state.searchValue}`
                : "All products"}
            </h1>
            <div className="search-block">
              <img
                src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/search.svg"
                alt="search-logo"
              />
              <input
                onChange={this.onInput}
                placeholder="Search product"
                className="inp"
              />
            </div>
          </div>
          <div className="sneakers">
            {this.state.productsItems
              .filter((item) =>
                item.title
                  .toLowerCase()
                  .includes(this.state.searchValue.toLowerCase())
              )
              .map((obj) => (
                <Card
                  id={obj.id}
                  title={obj.title}
                  price={obj.price}
                  productImg={obj.productImg}
                  onBuy={() => {
                    this.onAddToCart(obj);
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
}

export default Shop;
