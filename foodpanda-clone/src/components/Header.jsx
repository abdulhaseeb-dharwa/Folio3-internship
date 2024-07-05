import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>Foodpanda Clone</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
