/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div key={product.id} className="product">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
