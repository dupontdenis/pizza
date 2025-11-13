# Pizza Project

## Overview

This project demonstrates how to dynamically create and display a pizza menu using JavaScript modules. It is designed as a learning resource for students to understand modular code structure and dynamic UI generation.

## File Explanations

### `display.mjs`

- **Purpose:** Contains generic functions for rendering HTML elements and tables dynamically. It is not specific to pizzas and can be reused for other data types.
- **Key Role:** Provides the logic to create table headers and rows based on any array of objects, making it a flexible display utility.

### `displayPizzas.mjs`

- **Purpose:** Specializes the generic display logic for pizzas. It imports functions from `display.mjs` and applies them to pizza-specific data.
- **Key Role:** Handles pizza-specific formatting, such as which pizza properties to show and how to present them.

**Difference:**

- `display.mjs` is a reusable, generic display utility.
- `displayPizzas.mjs` is a pizza-specific module that uses the generic display logic for the pizza menu.

## Using Object.keys for Dynamic Headers

When working with arrays of objects, you often want to generate table headers based on the properties of those objects. JavaScript's `Object.keys()` method is perfect for this:

```js
const pizza = { name: "Margherita", price: 10 };
const headers = Object.keys(pizza); // ["name", "price"]
```

```js
const user = { username: "alice", email: "alice@email.com", role: "admin" };
const headers = Object.keys(user); // ["username", "email", "role"]
```

This allows you to automatically extract the property names from any object, making your table generation code even more flexible and generic.

**Reference:**

- [MDN Web Docs: Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## Main Point: Dynamic Table Header Generation

```js
<tr>
  $
  {headers
    .map(
      (header) => `<th>${header.charAt(0).toUpperCase() + header.slice(1)}</th>`
    )
    .join("")}
</tr>
```

### Example: Flexible Data Handling

**Example 1: Pizza Data**

```js
const headers = ["name", "price"];
```

**Resulting HTML:**

```html
<tr>
  <th>Name</th>
  <th>Price</th>
</tr>
```

**Example 2: User Data**

```js
const headers = ["username", "email", "role"];
```

**Resulting HTML:**

```html
<tr>
  <th>Username</th>
  <th>Email</th>
  <th>Role</th>
</tr>
```

With this single code snippet, you can generate headers for any data type, avoiding the need to write out each table header by hand.

### Why is this important?

- **Dynamic UI Creation:** This code dynamically generates table headers based on the data's property names. It means you don't have to hardcode the headers, making your code more flexible and maintainable.
- **How it works:**
  - `headers` is an array of property names (e.g., `["name", "price"]`).
  - `.map(...)` transforms each header into a `<th>` element, capitalizing the first letter.
  - `.join("")` combines all `<th>` elements into a single string.
  - The result is a table row (`<tr>`) with dynamic headers.
- **Learning Value:** Students learn how to use JavaScript to generate HTML based on data, a key skill for building dynamic web applications.

---

This project is a great starting point for understanding modular JavaScript and dynamic UI generation!
