import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  item,
  handleRemoveFromCart,
  handleUpdateQuantity,
}) {
  // this function handles quantity change
  const handleChange = (newQty) => {
    if (newQty <= 0) {
      const confirmRemove = window.confirm(`Set quantity to 0 for ${item.productName}? This will remove it from the cart.`);
      if (confirmRemove) {
        handleRemoveFromCart(item.id);
      } else {
        handleUpdateQuantity(item.id, 1);
      }
      return;
    }
    handleUpdateQuantity(item.id, newQty);
  };

  const priceNum = parseFloat(item.price.replace("$", ""));
  const subtotal = (priceNum * item.quantity).toFixed(2);

  return (
    <div className="CartCard">
      <div className="cart-item-info">
        <img src={item.image} alt={item.productName} className="cart-image" />
        <div>
          <h4>{item.productName}</h4>
          <p>{item.price}</p>
          <p>
            <strong>Total: ${subtotal}</strong>
          </p>
          <QuantityCounter quantity={item.quantity} setQuantity={handleChange} min={0} />
        </div>
      </div>

      <button className="remove" onClick={() => handleRemoveFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
}
