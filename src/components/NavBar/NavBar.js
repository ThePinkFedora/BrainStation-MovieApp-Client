import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav-bar">
      <NavLink to="/">
        <h2 class="nav-bar__logo">MOVIE APP</h2>
      </NavLink>
      <NavLink to="/watchlist">
        <h2 class="nav-bar__link">Watchlist</h2>
      </NavLink>
    </header>
  );
}
