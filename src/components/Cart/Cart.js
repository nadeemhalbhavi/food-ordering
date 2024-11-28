import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
import Card from "../UI/Card";

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);

  const cartItem = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => (
        <Card>
          <li>{item.name}</li>
          <li>{item.description}</li>
          <li>{item.price}</li>
        </Card>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItem}
      <div className={classes.total} onClick={props.onHideCart}>
        <span>Total Amount</span>
        <span>49.99</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes.buttonAlt}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
