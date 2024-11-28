import React, { useContext } from "react";
import CartContext from "../../../store/Cart-Context";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    console.log(props.id);
    const quantity = document.getElementById("amount_" + props.id).value;
    // cartCtx.addItem(props.item);
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <form className={classes.form}>
      {console.log("inside render", cartCtx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
