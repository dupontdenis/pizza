export function createHeader(headers) {
  return `
    <thead class="thead-dark">
      <tr>
        ${headers
          .map(
            (header) =>
              `<th>${header.charAt(0).toUpperCase() + header.slice(1)}</th>`
          )
          .join("")}
      </tr>
    </thead>
  `;
}
