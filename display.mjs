import { createHeader } from "./createHeader.mjs";
import { createBody } from "./createBody.mjs";
import { createFooter } from "./createFooter.mjs";

export function displayPizzas(pizzas, totalPrice) {
  const pizzaTableElement = document.getElementById("pizza-table");

  if (pizzas.length === 0) return;

  const headers = Object.keys(pizzas[0]);

  const tableHTML = `
    <table class="table table-striped table-hover table-bordered">
      ${createHeader(headers)}
      ${createBody(pizzas, headers)}
      ${createFooter(totalPrice)}
    </table>
  `;

  pizzaTableElement.innerHTML = tableHTML;
}
