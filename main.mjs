import pizzas from "./pizzas.mjs";
import { displayPizzas } from "./displayPizzas.mjs";
import prices from "./prices.mjs";
import addPriceToPizzas from "./addPriceToPizzas.mjs";

const pizzasWithPrices = addPriceToPizzas(pizzas, prices);

displayPizzas(pizzas);
displayPizzas(pizzasWithPrices);
