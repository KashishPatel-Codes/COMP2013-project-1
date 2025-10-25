// username and cart icon
import cartFull from "../assets/cart-full.png";
import cartEmpty from "../assets/cart-empty.png";

export default function NavBar({ cartCount, handleToggleCart }) {
  return (
    <nav className="NavBar">
      <p className="UserGreeting">Hello, username</p>
      <h2 className="AppTitle">Groceries App 🍑</h2>
      <div className="CartIcon" onClick={handleToggleCart}>
        <img src={cartCount > 0 ? cartFull : cartEmpty} alt="Cart" className="CartImage"
        />
      </div>
    </nav>
  );
}
