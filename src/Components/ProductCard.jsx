// Display product information
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ product, handleAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} className="ProductImage"/>
      <h4 className="ProductTitle">{product.productName}</h4>
      <p className="ProductBrand">{product.brand}</p>
      <p className="ProductQuantity">{product.quantity}</p>
      <p className="ProductPrice">{product.price}</p>

      <QuantityCounter quantity={quantity} setQuantity={setQuantity} min={0} />

      <button className="AddButton"
        onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}
