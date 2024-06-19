import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart items={cartItems} />
    </div>
  );
};

export default CartPage;
