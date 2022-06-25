import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../mobileMenu/MobileMenu";
import menuIcon from "../assets/images/general-icons/list.svg";
import "./navBar.scss";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(true);
    }

    const handleMenuClose = () => {
        setOpenMenu(false);
    }

    return(
        <div className="topNav-container">
            <nav className="navBar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about-me" className="nav-link">About me</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
            </nav>
            <div className="navContact">
                <Link to="/contact" className="nav-button">Contact</Link>
            </div>
            <button className="mobile-menu__button" onClick={handleMenuOpen}>
                <img src={menuIcon} alt="menu-icon" className="menu-icon" />
            </button>
            <MobileMenu handleMenuClose={handleMenuClose} openMenu={openMenu} />
        </div>
    )
}

export default NavBar;