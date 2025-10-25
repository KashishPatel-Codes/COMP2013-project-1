// Kashish Patel
import { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(true);

  // toggle
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please select at least 1 item before adding to cart.");
      return;
    }

    const existing = cart.find((item) => item.id === product.id);
    const numericPrice = parseFloat(product.price.replace("$", ""));

    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      const newItem = { ...product, quantity, numericPrice };
      setCart([...cart, newItem]);
    }
  };

  // removing item from cart
  const handleRemoveFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // update item quantity in cart
  const handleUpdateQuantity = (id, newQty) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCart(newCart);
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  // calculate total price
  const total = cart.reduce(
    (acc, item) => acc + item.numericPrice * item.quantity,
    0
  );

  return (
    <div className="AppContainer">
      <NavBar cartCount={cart.length} handleToggleCart={handleToggleCart} />
      <div className="MainContent">
        <ProductsContainer products={products}  handleAddToCart={handleAddToCart}/>
        {showCart && (
          <CartContainer
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleUpdateQuantity={handleUpdateQuantity}
            handleEmptyCart={handleEmptyCart}
            total={total}
          />
        )}
      </div>
    </div>
  );
}
