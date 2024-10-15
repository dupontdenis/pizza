function addPriceToPizzas(pizzas, prices) {
  return pizzas.map((pizza) => {
    const totalPrice = pizza.ingredients.reduce((acc, ingredient) => {
      if (prices.has(ingredient)) {
        return acc + prices.get(ingredient);
      } else {
        console.warn(`Price for ingredient "${ingredient}" not found.`);
        return acc;
      }
    }, 0);

    return {
      ...pizza,
      price: `$${totalPrice.toFixed(2)}`, // Convert to string with 2 decimal places
    };
  });
}

export default addPriceToPizzas;
