import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [item, setUpdateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setUpdateItems((prevState) => [...prevState, item]);
  };

  const removeItemFromCartHandler = (id) => {
    setUpdateItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);

      const existingItem = prevItems[existingItemIndex];

      if (existingItem.quantity === 1) {
        // Remove item if quantity is 1
        return prevItems.filter((item) => item.id !== id);
      } else {
        // Decrease quantity if more than 1
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      }
    });
  };
  const cartcontext = {
    items: item,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
