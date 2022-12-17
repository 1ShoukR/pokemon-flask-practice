import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
return (
        <nav className="nav-container">
            <li className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/create_account">Create Account</Link>
            </li>
        </nav>
);
};

export default Navbar;
