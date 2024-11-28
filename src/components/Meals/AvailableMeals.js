import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const dummyMeals = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
    price: 8.99,
  },
  {
    id: 2,
    name: "Cheeseburger",
    description:
      "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce.",
    price: 10.49,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.",
    price: 7.99,
  },
  {
    id: 4,
    name: "Spaghetti Carbonara",
    description: "Pasta with creamy sauce, pancetta, egg, and parmesan cheese.",
    price: 12.99,
  },
  {
    id: 5,
    name: "Grilled Chicken Sandwich",
    description:
      "Marinated grilled chicken breast with lettuce and mayo on a toasted bun.",
    price: 9.49,
  },
  {
    id: 6,
    name: "Vegetable Stir Fry",
    description:
      "A mix of seasonal vegetables stir-fried in a savory soy sauce.",
    price: 8.49,
  },
  {
    id: 7,
    name: "Fish Tacos",
    description:
      "Soft corn tortillas filled with grilled fish, cabbage slaw, and lime crema.",
    price: 11.99,
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a gooey molten center served with vanilla ice cream.",
    price: 6.99,
  },
  {
    id: 9,
    name: "Pancakes",
    description: "Fluffy pancakes served with maple syrup and fresh berries.",
    price: 5.99,
  },
  {
    id: 10,
    name: "Caprese Salad",
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    price: 7.49,
  },
];

const AvailableMeals = () => {
  const mealList = dummyMeals.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
