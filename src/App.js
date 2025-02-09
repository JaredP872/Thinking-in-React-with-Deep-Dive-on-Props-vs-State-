// This line useState from the react package.
import { useState } from "react";

// This line creates a FilterableProductTable component that takes a products prop.
function FilterableProductTable({ products }) {
  // This line defines the filterText and setFilterText variables using the useState hook. The filterText variable is initialized with an empty string.
  const [filterText, setFilterText] = useState("");
  // This line defines the inStockOnly and setInStockOnly variables using the useState hook. The inStockOnly variable is initialized with false.
  const [inStockOnly, setInStockOnly] = useState(false);

  // This line returns a div element that contains a SearchBar component and a ProductTable component. The SearchBar component takes the filterText, inStockOnly, setFilterText, and setInStockOnly props. The ProductTable component takes the products, filterText, and inStockOnly props.
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

// This line creates a ProductCategoryRow component that takes a category prop.
function ProductCategoryRow({ category }) {
  // This line returns a table row element that contains a table header element with the category prop as its text content.
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

// This line creates a ProductRow component that takes a product prop.
function ProductRow({ product }) {
  // This line creates a name variable that contains a span element with the product name as its text content. If the product is not in stock, the span element is styled with red text
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  //  This line returns a table row element that contains a table data element with the name variable as its text content and a table data element with the product price as its text content.
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

// This line creates a ProductTable component that takes a products, filterText, and inStockOnly props.
function ProductTable({ products, filterText, inStockOnly }) {
  // This line creates an empty array called rows.
  const rows = [];

  // This line creates a variable called lastCategory and initializes it with null.
  let lastCategory = null;

  // This line iterates over each product in the products array.
  products.forEach((product) => {
    // This line checks if the product name does not contain the filter text. If it does not, the function returns.
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    // This line checks if the inStockOnly variable is true and the product is not in stock. If it is, the function returns.
    if (inStockOnly && !product.stocked) {
      return;
    }
    // This line checks if the product category is different from the lastCategory. If it is, a ProductCategoryRow component is added to the rows array.
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    // This line adds a ProductRow component to the rows array.
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  // This line returns a table element that contains a table head element with two table header elements. The table head element contains a table body element with the rows array as its children.
  return (
    <table>
      <thead>
        <tr>
          {/* This line create a th with the text Name */}
          <th>Name</th>
          {/* This line create a th with the text Price */}
          <th>Price</th>
        </tr>
      </thead>

      {/* This line create a tbody with the rows array as its children */}
      <tbody>{rows}</tbody>
    </table>
  );
}

// This line creates a SearchBar component that takes a filterText, inStockOnly, onFilterTextChange, and onInStockOnlyChange props.
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  // This line returns a form element that contains an input element and a label element with an input element. The input element has a value prop set to the filterText variable, a placeholder prop set to "Search...", and an onChange event handler that calls the onFilterTextChange function with the input value. The label element contains an input element with a checked prop set to the inStockOnly variable, and an onChange event handler that calls the onInStockOnlyChange function with the input checked value.
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

// This line creates a constant called PRODUCTS that contains an array of product objects.
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

// This line exports the App component as the default export of this module.
export default function App() {
  // This line returns a FilterableProductTable component with the PRODUCTS array as its products prop.
  return <FilterableProductTable products={PRODUCTS} />;
}
