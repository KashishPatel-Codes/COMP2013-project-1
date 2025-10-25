// Mapping
import ProductCard from "./ProductCard";

export default function ProductsContainer({ products, handleAddToCart }) {
  return (
    <div className="ProductsContainer">
      <h3 className="SectionTitle">Available Products</h3>
      <div className="ProductGrid">
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
