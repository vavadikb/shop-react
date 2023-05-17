import React from "react";
import { useTranslation } from "react-i18next";

const InfoButton = ({ price, onClickBuy, srcBuy }) => {
  const { t } = useTranslation();
  return (
    <div className="infoBtn">
      <div className="info">
        <span>
          {t("translation.price")}
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
