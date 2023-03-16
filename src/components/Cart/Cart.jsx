import React from "react";
import CartItemsList from "./CartItemsList";
import "./index.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCartItems: [],
    };
  }

  componentDidMount() {
    this.itemsAdded();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.itemsAdded();
    }
  }

  componentWillUnmount() {
    // cleanup function
  }

  itemsAdded() {
    const newArr = this.props.items.filter((item) => item.inCart);
    this.setState({
      inCartItems: newArr,
    });
  }

  onDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  handleImageLoaded = () => {
    console.log("Image loaded successfully");
    this.setState({ imageLoaded: true });
  };

  handleImageError = () => {
    console.log("Error loading image");
    this.setState({ imageError: true });
  };

  onDrop = (e, index) => {
    const fromIndex = e.dataTransfer.getData("index");
    const { inCartItems } = this.state;
    const newItemList = [...inCartItems];
    const removedItem = newItemList.splice(fromIndex, 1)[0];
    newItemList.splice(index, 0, removedItem);
    this.setState({
      inCartItems: newItemList,
    });
  };

  render() {
    const { onClose, onRemove, sum } = this.props;
    const { inCartItems } = this.state;

    return (
      <div className="overlay">
        <div className="drawer">
          <div className="header">
            <h2>Cart</h2>
            <img
              onClick={onClose}
              src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btn-remove.svg"
              alt="remove"
              onLoad={this.handleImageLoaded}
              onError={this.handleImageError}
            />
          </div>
          <CartItemsList
            onClose={onClose}
            items={inCartItems}
            onRemove={onRemove}
            sum={sum}
            onDragStart={this.onDragStart}
            onDragOver={this.onDragOver}
            onDrop={this.onDrop}
          />
        </div>
      </div>
    );
  }
}
export default Cart;
