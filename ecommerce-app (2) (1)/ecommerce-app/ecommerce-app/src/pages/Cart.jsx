import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>💰{item.price} DZD x {item.qty}</p>
          <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          
          
        </div>
      ))}
      <h3>Total: {total} DZD</h3>
      <button className="order-btn">Order</button>
    </div>
  );
}
