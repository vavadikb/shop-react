import React, { useContext } from "react";
import "./index.css";

const Baner = ({ onClickCart }) => {
  return (
    <div className="baner">
      <img
        src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/baner.svg"
        onClick={onClickCart}
        alt="baner"
        onLoad={() => console.log("img loaded sucssesfully")}
        onError={() => console.log("img loaded with err")}
      />
    </div>
  );
};

export default Baner;
