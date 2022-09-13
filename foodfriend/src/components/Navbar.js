import React from "react";
import './Navbar.css';
import Friends from "../pages/friends";
import Resta from "../pages/resta";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" classname="logo">LOGO</a>
            <ul>
                <li>
                    <a href="/Resta" className="resta"> Restaurants </a>
                </li>
                <li>
                    <a href="/friends"> Friends </a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;