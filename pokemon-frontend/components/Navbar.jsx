import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
    const globalUserData = useSelector((state) => state.pokemonSet.pokemon)
    console.log(`This is globalUserData: ${globalUserData.username}`)
return (
	<div>
		{globalUserData.username ? (
			<nav className="nav-container">
				<li className="navbar-links">
					<Link to="/">Home</Link>
					<Link to="/create_account">Create Account</Link>
                    <p>Welcome {globalUserData.username}</p>
				</li>
			</nav>
		) : (
			<nav className="nav-container">
				<li className="navbar-links">
					<Link to="/">Home</Link>
					<Link to="/create_account">Create Account</Link>
				</li>
			</nav>
		)}
	</div>
);
};

export default Navbar;
