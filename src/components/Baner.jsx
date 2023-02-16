import React from "react";

const Baner = (props) => {
  return (
    <div className="baner">
      <img
        src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/baner.svg"
        onClick={props.onClickCart}
        alt="baner"
      />
    </div>
  );
};

export default Baner;
