import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul className={classes.cartItems}>
      {[{ id: "1", name: "Butter Chicken", amount: "2", price: 12.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
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
