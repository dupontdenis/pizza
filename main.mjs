import pizzas from "./pizzas.mjs";
// import { displayPizzas } from "./displayPizzas.mjs";
import { displayPizzas } from "./display.mjs";
import prices from "./prices.mjs";
import { addPricesToPizzas } from "./addPricesToPizzas.mjs";

const { pizzas: pizzasWithPrices, totalPrice } = addPricesToPizzas(
  pizzas,
  prices
);

displayPizzas(pizzas);
displayPizzas(pizzasWithPrices, totalPrice);
