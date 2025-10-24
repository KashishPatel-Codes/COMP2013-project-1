// Kashish Patel

import { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(true);

  // this will toggle the cart panel
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  // this will handle adding products to the cart
  const handleAddToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please select at least 1 item before adding to cart.");
      return;
    }

    const existing = cart.find((item) => item.id === product.id);
    const numericPrice = parseFloat(product.price.replace("$", ""));

    if (existing) {
      const updatedCart = cart.map((item) =>  //update if already exists
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      const newItem = { ...product, quantity, numericPrice }; //add new product
      setCart([...cart, newItem]);
    }
  };


  const handleRemoveFromCart = (id) => {       //  this will remove a product from the cart
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleUpdateQuantity = (id, newQty) => {      //  this will handle quantity updates 
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCart(newCart);
  };

  // empty cart
  const handleEmptyCart = () => {
    setCart([]);
  };

  //total cost
  const total = cart.reduce(
    (acc, item) => acc + item.numericPrice * item.quantity,
    0
  );

  // app layout
  return (
    <div>
      <NavBar cartCount={cart.length} handleToggleCart={handleToggleCart} />
      <div className="app-container"
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <ProductsContainer products={products} handleAddToCart={handleAddToCart} />
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
