import { createHeader } from "./createHeader.mjs";
import { createBody } from "./createBody.mjs";
import { createFooter } from "./createFooter.mjs";

export function displayPizzas(pizzas, totalPrice = "", mode = "add") {
  const pizzaTableElement = document.getElementById("pizza-table");

  if (pizzas.length === 0) return;

  const headers = Object.keys(pizzas[0]);

  const footerHTML = totalPrice ? createFooter(totalPrice) : "";

  const tableHTML = `
    <table class="table table-striped table-hover table-bordered">
      ${createHeader(headers)}
      ${createBody(pizzas, headers)}
      ${footerHTML}
    </table>
  `;

  if (mode === "erase") {
    pizzaTableElement.innerHTML = tableHTML;
  } else if (mode === "add") {
    pizzaTableElement.insertAdjacentHTML("beforeend", tableHTML);
  } else {
    console.warn(`Invalid mode: ${mode}. Use "erase" or "add".`);
  }
}
