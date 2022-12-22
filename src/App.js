import React from "react";
import Baner from "./components/Baner";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { products } from "./database/products";
// import Component from "../public/img/Masdasd";

function App() {
  const [cartItems,setCartItems] = React.useState([])
  const [searchValue,setSearchValue] = React.useState('')
  const [cartOpened,setCartOpened] = React.useState(false)

  const onAddToCart = (obj) => {
    if(!obj.inCart) {
      setCartItems(prev =>[...prev,obj])
      obj.inCart=true
    }
    else{
      onRemoveCartItem(cartItems,obj)
      obj.inCart=false
    }    
  }

  const onInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveCartItem = (items,obj) => {
    let newArr = [...items]
    let indexOfItem = items.indexOf(obj)
    newArr.splice(indexOfItem,1)
    obj.inCart=false
    setCartItems(newArr)
  }

  const summ = () =>{
    let sum = 0
    cartItems.map((obj) => sum+=obj.price )
    return sum
  }


  return (
    <div className="wrapper">
      <Header onClickCart={()=>{setCartOpened(true)}} sum={summ()}/>
      <Baner onClickCart={()=>{setCartOpened(true)}}/>
      {cartOpened && <Cart items={cartItems} onRemove={onRemoveCartItem} onClose={()=>{setCartOpened(false)}} sum={summ()}/>}
      <div className="content">
        <div className="search-parent">
          <h1>{searchValue ? `results for request: ${searchValue}` : "All products"}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search-logo"/>
            <input onChange={onInput} placeholder="Search product" className="inp"/>
          </div>
        </div>
        <div className="sneakers">
          {products.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => (
            <Card
              id={obj.id}
              title={obj.title} 
              price={obj.price} 
              productImg={obj.productImg} 
              onBuy={() => {onAddToCart(obj)}}
              srcFav={obj.isFavoirte ? "/img/liked.svg" : "/img/unliked.svg"}
              srcBuy={obj.inCart ?  "/img/bought.svg" : "/img/btnBuy.svg"}
            /> 
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;