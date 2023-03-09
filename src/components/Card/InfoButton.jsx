import React from "react";

const InfoButton = ({ price, onClickBuy, srcBuy }) => {
  return (
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
  );
};

export default InfoButton;
