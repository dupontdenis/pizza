// addPricesToPizzas.mjs
function addPricesToPizzas(pizzas, prices) {
  let totalPrice = 0;

  const modifiedPizzas = pizzas.map((pizza) => {
    const pizzaPrice = pizza.ingredients.reduce((acc, ingredient) => {
      if (prices.has(ingredient)) {
        return acc + prices.get(ingredient);
      } else {
        console.warn(`Price for ingredient "${ingredient}" not found.`);
        return acc;
      }
    }, 0);

    totalPrice += pizzaPrice;

    return {
      ...pizza,
      price: `$${pizzaPrice.toFixed(2)}`, // Convert to string with 2 decimal places
    };
  });

  return {
    pizzas: modifiedPizzas,
    totalPrice: `$${totalPrice.toFixed(2)}`, // Convert to string with 2 decimal places
  };
}

export { addPricesToPizzas };
