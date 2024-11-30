import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";

import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);
  let totalPrice = cartCtx.items.reduce((acc, cv) => {
    return acc + cv.price * cv.quantity;
  }, 0);

  const hasItem = cartCtx.items.length > 0;

  const RemoveItemHandler = (id) => {
    console.log("Removing item", id);
    cartCtx.removeItem(id);
  };

  const AddItemHandler = (id) => {
    console.log("Adding item", id);
    cartCtx.addItem(id);
    // cartCtx.addItem({
    //   ...cartCtx.items.find((item) => item.id === id),
    //   quantity: cartCtx.items.find((item) => item.id === id).quantity + 1,
    // });
  };

  const cartItem = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          summary={item.description}
          price={item.price}
          quantity={item.quantity}
          key={item.id}
          onRemove={() => RemoveItemHandler(item.id)}
          onAdd={() => AddItemHandler(item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItem}
      <div className={classes.total} onClick={props.onHideCart}>
        <span>Total Amount</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes.buttonAlt}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
