import React from "react";
import { Form } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios"; // Promise based HTTP client for the browser and node.js. Allows making http requests from node.js. Axios works on more browsers. LESS WORK.

class Products extends React.Component {
  state = {
    products: [],
    typeFilter: "",
    priceFilter: false,
  };

  componentDidMount() {
    // used to setState to update your component when the date is retrieved
    const { type } = this.props.match.params; // declares variable that finds parameter set in app.js
    this.fetchProducts({ type }); // calls the function below fetch products
  }

  // fetches API endpoints
  fetchProducts = ({ type }) => {
    let ajaxRequest;
    if (type) {
      // we want to filter on type
      ajaxRequest = axios.get("/api/productfilter/" + encodeURIComponent(type)); // encoder escapes certain characters so server wont misintrepet them and send something else. this encodes them first and then sends response
    } else {
      ajaxRequest = axios.get("/api/products/"); // if no type specifed in url then return all products
    }
    ajaxRequest
      .then(res => {
        this.setState({ products: res.data.products });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidUpdate = prevProps => {
    // user
    if (this.props.match.params.type !== prevProps.match.params.type) {
      this.fetchProducts({ type: this.props.match.params.type });
    }
  };

  handleChange = e => {
    let target = e.target.name;
    this.setState(
      {
        [target]: e.target.value,
      },
      () => {
        if (target === "typeFilter") {
          this.fetchProducts({ type: this.state.typeFilter });
        }
      }
    );
  };

  filterProducts = (products, typeFilter, priceFilter) => {
    // Duplicate Products
    let filteredProducts = products;
    console.log("before filter", typeFilter, filteredProducts.length);
    // Apply Filters
    // Type/Category
    if (typeFilter) {
      filteredProducts = filteredProducts.filter(
        product => product.category.toLowerCase() === typeFilter.toLowerCase()
      );
    }
    console.log("after type filter", typeFilter, filteredProducts.length);
    // Price
    if (priceFilter) {
      filteredProducts = filteredProducts.filter(
        product => product.price <= parseInt(priceFilter) // JONATHAN PROBLEM
      );
    }

    // Return out filtered products
    return filteredProducts;
  };

  render() {
    const { products, typeFilter, priceFilter } = this.state;

    // Filtering our Products
    const filteredProducts = this.filterProducts(
      products,
      typeFilter,
      priceFilter
    );

    return (
      <div className="wrapper">
        {/* Filters */}
        <Form>
          <Form.Group className="filter">
            <Form.Label>Filter by Type</Form.Label>
            <Form.Control
              name="typeFilter"
              onChange={this.handleChange}
              as="select"
              defaultValue={typeFilter}
            >
              <option selected={typeFilter === ""} value="">
                All
              </option>
              <option selected={typeFilter === "item"} value="item">
                Item
              </option>
              <option selected={typeFilter === "bedroom"} value="bedroom">
                Bedroom
              </option>
              <option selected={typeFilter === "clothes"} value="clothes">
                Clothes
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="filter">
            <Form.Label>Enter Your Maximum Price</Form.Label>
            <Form.Control
              name="priceFilter"
              type="number"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        <div className="product-grid">
          {filteredProducts.length > 1 ? (
            filteredProducts.map((product, index) => (
              <Product key={index} {...product} />
            ))
          ) : (
            <p>No Products Meet that Criteria</p>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
