// displays cart items
import CartCard from "./CartCard";
export default function CartContainer({
  cart,
  handleRemoveFromCart,
  handleUpdateQuantity,
  handleEmptyCart,
  total,
}) {
  return (
    <div className="CartContainer">
      <h3>Cart items: {cart.length}</h3>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          ))}

          <div className="cart-footer">
            <button className="empty" onClick={handleEmptyCart}>Empty Cart </button>
            <button
              className="checkout"
              onClick={() => {
                const itemList = cart.map((i) =>`${i.productName} × ${i.quantity} = $${(i.numericPrice * i.quantity ).toFixed(2)}` )
                  .join("\n");
                alert(`🧾 Checkout Summary:\n\n${itemList}\n\nTotal: $${total.toFixed(2)}\n\nThank you for shopping!`
                );
              }}
            >Checkout: ${total.toFixed(2)} </button>
          </div>
        </>
      )}
    </div>
  );
}
