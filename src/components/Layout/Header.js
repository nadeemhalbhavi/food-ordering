import React, { useContext } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import { RiShoppingCartLine } from "@remixicon/react";
import CartContext from "../../store/Cart-Context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity = 0;
  cartCtx.items.forEach((item) => (quantity += Number(item.quantity)));

  return (
    <React.Fragment>
      <nav className={classes.navbar}>
        <h1>ReactMeals</h1>
        <div className={classes.carttext}>
          <button onClick={props.onShowCart} className={classes.cart}>
            <RiShoppingCartLine className={classes.carticon} size={34} />
            Your Cart <span className={classes.Cartnum}>{quantity}</span>
          </button>
        </div>
      </nav>
      <div className={classes.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
