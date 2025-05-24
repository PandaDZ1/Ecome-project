import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">🏠 Home</Link>
        <Link to="/cart">🛒 Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}
