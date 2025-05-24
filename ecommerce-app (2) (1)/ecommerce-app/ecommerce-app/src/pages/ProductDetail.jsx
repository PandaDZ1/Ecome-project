import { useParams } from "react-router-dom";
import { useContext } from "react";
import products from "../data/data";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  product.views += 1;

  return (
    <div className="product-detail">
  <img src={product.image} alt={product.name} />
  <h2>{product.name}</h2>

  <div className="info">
    <p>💰 <strong>Price:</strong> {product.price} DZD ₫</p>
    <p>👁️ <strong>Views:</strong> {product.views}</p>
    <p>🛍️ <strong>Sold:</strong> {product.sold}</p>
    <p>⭐ <strong>Reviews:</strong> {product.reviews.length}</p>
  </div>

  <button onClick={() => addToCart(product)}>Add to Cart</button>
</div>

  );
}
