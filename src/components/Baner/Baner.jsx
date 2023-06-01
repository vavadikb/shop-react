import "./index.css";
import banerImg from "../../img/baner.svg";

const Baner = ({ onClickCart }) => {
  return (
    <div className="baner">
      <img
        src={banerImg}
        onClick={onClickCart}
        alt="baner"
        onLoad={() => console.log("img loaded sucssesfully")}
        onError={() => console.log("img loaded with err")}
      />
    </div>
  );
};

export default Baner;
