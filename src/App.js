import React, { useState } from "react";
// import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      {" "}
      {CartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />;
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
