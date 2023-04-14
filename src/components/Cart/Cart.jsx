import React, { useState, useEffect, useContext } from "react";
import CartItemsList from "./CartItemsList";
import "./index.css";
import CartContext from "../Contexts/CartContext";

const Cart = ({ items, onClose, onRemove, sum }) => {
  const { cartItems, productsItems } = useContext(CartContext);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    itemsAdded();
  }, [items]);

  const itemsAdded = () => {
    const selectedItems = productsItems.filter((item) =>
      cartItems.includes(item.id)
    );
    setSelectedData(selectedItems);
  };

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleImageLoaded = () => {
    console.log("Image loaded successfully");
    setSelectedData((prevState) => ({ ...prevState, imageLoaded: true }));
  };

  const handleImageError = () => {
    console.log("Error loading image");
    setSelectedData((prevState) => ({ ...prevState, imageError: true }));
  };

  const onDrop = (e, index) => {
    const fromIndex = e.dataTransfer.getData("index");
    const newItemList = [...selectedData];
    const removedItem = newItemList.splice(fromIndex, 1)[0];
    newItemList.splice(index, 0, removedItem);
    setSelectedData(newItemList);
  };

  return (
    <CartItemsList
      onClose={onClose}
      items={selectedData}
      onRemove={onRemove}
      sum={sum}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    />
  );
};

export default Cart;
