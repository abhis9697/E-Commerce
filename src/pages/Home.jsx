import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="banner">Men&apos;s Outwear</div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
