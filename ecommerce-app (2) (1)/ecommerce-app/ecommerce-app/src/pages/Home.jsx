import { useState } from "react";
import productsData from "../data/data";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No products found.
          </p>
        )}
      </div>
    </>
  );
}
