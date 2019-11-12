/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Product = ({ product, price, about, url, category }) => {
  return (
    <div className="product-card">
      <div className="product-card--img">
        <img src={url} />
      </div>
      <div className="product-card--content">
        <strong>{product}</strong>
        <p> {about}</p>
      </div>
      <div className="product-card--meta">
        <strong>${price}</strong>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default Product;
