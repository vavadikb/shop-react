import React, { useState, useEffect, useContext, useMemo } from "react";
import CartItemsList from "./CartItemsList";
import "./index.css";

const Cart = ({ items, onClose, onRemove, sum }) => {
  const [inCartItems, setInCartItems] = useState([]);

  useEffect(() => {
    itemsAdded();
  }, [items]);

  const itemsAdded = () => {
    const newArr = items.filter((item) => item.inCart);
    setInCartItems(newArr);
  };

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleImageLoaded = () => {
    console.log("Image loaded successfully");
    setInCartItems((prevState) => ({ ...prevState, imageLoaded: true }));
  };

  const handleImageError = () => {
    console.log("Error loading image");
    setInCartItems((prevState) => ({ ...prevState, imageError: true }));
  };

  const onDrop = (e, index) => {
    const fromIndex = e.dataTransfer.getData("index");
    const newItemList = [...inCartItems];
    const removedItem = newItemList.splice(fromIndex, 1)[0];
    newItemList.splice(index, 0, removedItem);
    setInCartItems(newItemList);
  };

  return (
    <CartItemsList
      onClose={onClose}
      items={inCartItems}
      onRemove={onRemove}
      sum={sum}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    />
  );
};

export default Cart;
