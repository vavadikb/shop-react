import React, { Component } from "react";
import "./index.css";
import InfoButton from "./InfoButton";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickBuy = () => {
    const { productImg, title, price, id, onBuy } = this.props;
    onBuy({ productImg, title, price, id });
  };

  render() {
    const { productImg, title, price, srcBuy } = this.props;
    return (
      <div className="card">
        <div className="favorite"></div>
        <img src={productImg} alt="sneakers_photo" width={133} height={112} />
        <p>{title}</p>
        <InfoButton
          price={price}
          onClickBuy={this.onClickBuy}
          srcBuy={srcBuy}
        />
      </div>
    );
  }
}

export default Card;
