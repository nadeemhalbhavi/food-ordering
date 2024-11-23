import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <nav className={classes.navbar}>
        <h1>React Meals</h1>
        <div className={classes.carttext}>
          <button className={classes.cart}>
            Your Cart <span className={classes.Cartnum}>0</span>
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
