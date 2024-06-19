/* eslint-disable react/prop-types */
const Cart = ({ items }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
