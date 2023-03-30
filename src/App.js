import React, { useEffect, useState } from "react";
import HOCFooter from "./components/Footer/HOCFooter";
import Shop from "./components/Shop/Shop";
import CartContext from "./components/Contexts/CartContext";

function App() {
  const ShopWithFooter = HOCFooter(Shop);
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <ShopWithFooter />
    </CartContext.Provider>
  );
}

export default App;
