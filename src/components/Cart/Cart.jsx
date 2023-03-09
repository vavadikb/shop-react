import React from "react";
import CartItemsList from "./CartItemsList";
import "./index.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCartItems: [],
    };
    this.itemsAdded = this.itemsAdded.bind(this);
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
    let newArr = [];
    this.props.items.forEach((item) => {
      if (item.inCart) {
        newArr.push(item);
      }
    });
    this.setState({
      inCartItems: newArr,
    });
  }

  render() {
    const { onClose, items, sum } = this.props;
    const { inCartItems } = this.state;
    return (
      // <div className="overlay">
      //   <div className="drawer">
      //     <div className="header">
      //       <h2>Cart</h2>
      //       <img
      //         onClick={onClose}
      //         src="https://raw.githubusercontent.com/vavadikb/shop-react/main/public/img/btn-remove.svg"
      //         alt="remove"
      //       />
      //     </div>
      <CartItemsList
        onClose={onClose}
        items={inCartItems}
        onRemove={this.props.onRemove}
        sum={sum}
      />
      //   </div>
      // </div>
    );
  }
}

export default Cart;
