import React from "react";

const Card = ({ productImg, title, price, id, onBuy, srcBuy }) => {
  const onClickBuy = () => {
    onBuy({ productImg, title, price, id });
  };

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
          onClick={onClickBuy}
          src={srcBuy}
          alt="btn"
        />
      </div>
    </div>
  );
};

export default Card;
