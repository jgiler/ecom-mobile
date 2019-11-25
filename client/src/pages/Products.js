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
    // calls the function below fetch products
    this.fetchMongoProducts()
  }

  // Fetching products from Mongo Database
  fetchMongoProducts = () => {
    axios.get('/products').then(res => {
      console.log('>>>>>>>>>>>>>>>>>>>attempt to fetch mongo data<<<<<<<<<<<<<<<<<<,')
      console.log(res.data)
      this.setState({products: res.data})
    }).catch(err => {
      console.log(err, 'mongo fetch failed')
    })
  }

  // componentDidUpdate = prevProps => {
  //   if (this.props.match.params.type !== prevProps.match.params.type) {
  //     this.fetchMongoProducts({ type: this.props.match.params.type });
  //   }
  // };

  handleChange = e => {
    let target = e.target.name;
    this.setState(
      {
        [target]: e.target.value,
      },
      () => {
        if (target === "typeFilter") {
          this.fetchMongoProducts({ type: this.state.typeFilter });
        }
      }
    );
  };

  filterProducts = (products, typeFilter, priceFilter) => {
    // Duplicate Products
    let filteredProducts = products;
    console.log(filteredProducts)

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
        product => product.price <= parseInt(priceFilter) // BUG
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
        <main>
        {/* Filters */}
        <Form>
          <Form.Group className="filter">
            <Form.Label>Filter by Type</Form.Label>
            <Form.Control
              name="typeFilter"
              onChange={this.handleChange}
              as="select"
              defaultValue={typeFilter}
              form='type-form'
              label='dropdown'
            > 
              <option defaultValue={typeFilter === ""} value=''>
                All
              </option>
              <option defaultValue={typeFilter === "item"} value="item">
                Item
              </option>
              <option defaultValue={typeFilter === "bedroom"} value="bedroom">
                Bedroom
              </option>
              <option defaultValue={typeFilter === "clothes"} value="clothes">
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
        </main>
      </div>
    );
  }
}

export default Products;
