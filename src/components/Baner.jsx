import React from "react";

const Baner = (props) =>{

    return(
        <div className="baner">
            <img src="/img/baner.svg" onClick={props.onClickCart} alt="baner"/>
        </div>
    )
}

export default Baner