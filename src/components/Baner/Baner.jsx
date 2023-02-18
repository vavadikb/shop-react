import React from "react";
import "./index.css"

const Baner = ({onClickCart}) => {
  return (
    <div className="baner">
      <img
        src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/baner.svg"
        onClick={onClickCart}
        alt="baner"
      />
    </div>
  );
};

export default Baner;
