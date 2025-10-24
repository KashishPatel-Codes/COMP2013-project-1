export default function QuantityCounter({ quantity, setQuantity, min }) {
  return (
    <div className="QuantityCounter">
      <button onClick={() => setQuantity(Math.max(min, quantity - 1))}>-</button>
      <span className="counter-value">{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
