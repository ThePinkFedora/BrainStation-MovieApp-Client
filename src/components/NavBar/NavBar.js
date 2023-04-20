import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar({ watchlistCount }) {
  return (
    <header className="nav-bar">
      <NavLink to="/">
        <h2 className="nav-bar__logo">MOVIE APP</h2>
      </NavLink>
      <NavLink to="/watchlist">
        <h2 className="nav-bar__link">Watchlist ({watchlistCount})</h2>
      </NavLink>
    </header>
  );
}
