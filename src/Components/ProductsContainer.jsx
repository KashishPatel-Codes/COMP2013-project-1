// Mapping
import ProductCard from "./ProductCard";

export default function ProductsContainer({ products, handleAddToCart }) {
  return (
    <div className="ProductsContainer">
      <h3>Available Products</h3>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
