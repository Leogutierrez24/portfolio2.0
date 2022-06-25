import React from "react";
import { Link } from "react-router-dom";
import "./mobileMenu.scss";
import closeIcon from "../assets/images/general-icons/x-lg.svg";

const MobileMenu = (props) => {

    return(
        <div className={props.openMenu ? "mobile-menu__container opened" : "mobile-menu__container closed"} onClick={props.handleMenuClose}>
            <div className="mobile-menu" >
                <span className="close-menu__btn" onClick={props.handleMenuClose}><img src={closeIcon} alt="close-menu-icon" className="close-btn-img"/></span>
                <Link to="/" className="mobile-menu__link" onClick={props.handleMenuClose}>Home</Link>
                <Link to="/about-me" className="mobile-menu__link" onClick={props.handleMenuClose}>About Me</Link>
                <Link to="/projects" className="mobile-menu__link" onClick={props.handleMenuClose}>Projects</Link>
                <Link to="/contact" className="mobile-menu__link" onClick={props.handleMenuClose}>Contact</Link>
            </div>
        </div>
    );
};

export default MobileMenu;