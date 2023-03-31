import React from "react";
import HOCFooter from "./components/Footer/HOCFooter";
import Shop from "./components/Shop/Shop";

function App() {
  const ShopWithFooter = HOCFooter(Shop);

  return <ShopWithFooter />;
}

export default App;
