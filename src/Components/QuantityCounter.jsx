export default function QuantityCounter({ quantity, setQuantity, min }) {
  return (
    <div className="QuantityCounter">
      <button className="QuantityButton" 
      onClick={() => setQuantity(Math.max(min, quantity - 1))} >-</button>
      <span className="CounterValue">{quantity}</span>
      <button className="QuantityButton"
      onClick={() => setQuantity(quantity + 1)} >+</button>
    </div>
  );
}
