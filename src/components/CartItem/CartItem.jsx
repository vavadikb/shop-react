import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
      imageError: false,
    };
  }

  handleImageLoaded = () => {
    console.log("Image loaded successfully");
    this.setState({ imageLoaded: true });
  };

  handleImageError = () => {
    console.log("Error loading image");
    this.setState({ imageError: true });
  };

  render() {
    const { title, price, productImg } = this.props;
    const { imageLoaded, imageError } = this.state;
    return (
      <div className="cart-item">
        <div className="cart-item-image">
          <img
            src={productImg}
            alt="product"
            onLoad={this.handleImageLoaded}
            onError={this.handleImageError}
          />
          {imageError && <p>Error loading image</p>}
        </div>
        <div className="cart-item-details">
          <p className="cart-item-title">{title}</p>
          <p className="cart-item-price">{price}</p>
        </div>
      </div>
    );
  }
}

export default CartItem;
