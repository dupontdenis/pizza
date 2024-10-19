// createFooter.mjs
export function createFooter(totalPrice) {
  return `
    <tfoot class="table-info">
      <tr>
        <td colspan="2">Total</td>
        <td>${totalPrice}</td>
      </tr>
    </tfoot>
  `;
}
