import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [item, setUpdateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    setUpdateItems((prevState) => [...prevState, item]);
  };

  const removeItemFromCartHandler = (id) => {};
  const cartcontext = {
    items: item,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    don: "I am DON",
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
