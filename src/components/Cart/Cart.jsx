import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemsList from "./CartItemsList";
import CartContext from "../Contexts/CartContext";
import { cartOpenFunc, productsFunc, itemsFunc } from "../../store/selectorFunc";
import { removeFromCart } from "../../store/slices/cartSlice";

const Cart = ({ onClose, sum }) => {
  const cartItems = useSelector(itemsFunc);
  console.log(cartItems, onClose, sum, 'cart items ')
  const productsItems = useSelector(productsFunc);
  console.log(productsItems)
  const dispatch = useDispatch();
  const [selectedData, setSelectedData] = useState([]);
  

  useEffect(() => {
    itemsAdded();
  }, [cartItems, productsItems]);

  const itemsAdded = () => {
    if (Array.isArray(productsItems)) {
      const selectedItems = productsItems.filter((item) =>
        cartItems.includes(item.id)
      );
      setSelectedData(selectedItems);
      console.log(selectedData, selectedItems)
    }
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

  const onRemove = (obj) => {
    dispatch(removeFromCart(obj.id));
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
