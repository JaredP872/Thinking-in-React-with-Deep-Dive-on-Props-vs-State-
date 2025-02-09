// This line imports React and StrictMode from the react package, and createRoot from the react-dom/client package. In order to group the products by category. Allowing the user to filter the products by name and to show only the products that are in stock. The ProductCategoryRow component is a table row that displays the category of the products. The ProductRow component is a table row that displays the name and price of a product. The ProductTable component is a table that displays the products. The FilterableProductTable component is a container that displays the search bar and the product table. The App component is a container that displays the FilterableProductTable component. The App component is rendered inside the root element with the id of root. The root element is created using the createRoot function. The App component is wrapped in a StrictMode component to enable additional checks and warnings for the component tree. The App component is rendered inside the root element using the render method of the root object.
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//  This line imorts the styles.css file.
import "./styles.css";

//  This line imports the App component from the App.js file.
import App from "./App";

//  This line creates a root element with the id of root.
const root = createRoot(document.getElementById("root"));

//  This line renders the App component inside the root element.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
