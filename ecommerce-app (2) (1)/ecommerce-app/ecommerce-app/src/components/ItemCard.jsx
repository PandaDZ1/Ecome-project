import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ItemCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="item-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p>{product.price} DZD ₫</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
