import cartFull from "../assets/cart-full.png";
import cartEmpty from "../assets/cart-empty.png";

export default function NavBar({ cartCount, handleToggleCart }) {
  return (
    <nav className="NavBar">
      <p>Hello, username</p>
      <h2>Groceries App 🍑</h2>
      <div onClick={handleToggleCart} style={{ cursor: "pointer" }}>
        <img src={cartCount > 0 ? cartFull : cartEmpty} alt="Cart" width="40" height="40"/>
      </div>
    </nav>
  );
}
