import Cart from "./Cart";


const CartItems = ({items=[]}) =>{
    items
    return(
        <div className="cartItem">
              <img
                width={70}
                height={70}
                src={obj.productImg}
                alt="sneakers_photo"
              />
              <div className="discription-product">
                <p>{obj.title}</p>
                <b>{obj.price + obj.currency}</b>
              </div>
              <img
                className="removeBtn"
                onClick={() => {
                  onRemove(items, obj);
                }}
                src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btn-remove.svg"
                alt="remove"
              />
            </div>
    )
}

return CartItems
