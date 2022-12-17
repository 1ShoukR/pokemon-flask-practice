import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <div>
        <nav>
            <li>
                <Link to="/">Home</Link>
                <Link to="/create_account">Create Account</Link>
            </li>
        </nav>
    </div>
);
};

export default Navbar;
