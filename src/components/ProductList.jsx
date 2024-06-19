/* eslint-disable react/prop-types */
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div>
      <div className="container">
        <h1>Product List</h1>
        <div className="products">
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
