import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={classes.navbar}>
      <h1>React Meals</h1>
      <div className={classes.cart}>
        <span className={classes.carttext}>Your Cart</span>
        <span className={classes.Cartnum}>0</span>
      </div>
    </nav>
  );
};

export default Header;
