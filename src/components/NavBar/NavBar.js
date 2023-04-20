import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="NavBar">
			<NavLink to="/">
				<h2>Movie App</h2>
			</NavLink>
		</header>
	);
}
