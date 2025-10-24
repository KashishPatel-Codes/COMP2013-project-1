// display single product information
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ product, handleAddToCart }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} className="product-image"/>
      <h4>{product.productName}</h4>
      <p>{product.brand}</p>
      <p>{product.quantity}</p>
      <p>{product.price}</p>

      <QuantityCounter quantity={quantity} setQuantity={setQuantity} min={0} />

      <button className="add-button" onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}
