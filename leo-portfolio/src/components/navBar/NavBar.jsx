import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
    return(
        <div className="topNav-container">
            <nav className="navBar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about-me" className="nav-link">About me</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
            </nav>
            <div className="navContact">
                <Link to="/" className="nav-button">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;