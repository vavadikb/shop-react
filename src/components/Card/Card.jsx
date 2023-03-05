import React, { Component } from "react";
import "./index.css"

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
        <div className="infoBtn">
          <div className="info">
            <span>
              Price:
              <br />
              <b>{price}</b>
            </span>
          </div>
          <img
            width={11}
            height={11}
            className="butn"
            onClick={this.onClickBuy}
            src={srcBuy}
            alt="btn"
          />
        </div>
      </div>
    );
  }
}

export default Card;