import React from "react";
import github from "../assets/images/contact-icons/github.svg";
import linkedin from "../assets/images/contact-icons/linkedin.svg";
import "./contact.scss";

const Contact = () => {
    return(
        <div className="contact">
            <h3 className="contact-title">Contact me <span>here</span>!</h3>
            <div className="contactForm-container">
                <form id="contact-form">
                    <label htmlFor="name">Name<br/>
                        <input type="text" id="name" />
                    </label>
                    <label htmlFor="email">Email<br/>
                        <input type="email" id="email" />
                    </label>
                    <label htmlFor="message">Your message<br/>
                        <textarea cols="20" id="message"></textarea>
                    </label>
                </form>
                <button className="contact-btn">send</button>
            </div>
            <div className="other-contacts">
                <a href="https://www.linkedin.com/in/leonel-gutierrez97/">
                    <img src={linkedin} alt="linkedin" className="linkedin-logo" />
                </a>
                <a href="https://github.com/Leogutierrez24">
                    <img src={github} alt="github" className="github-logo" />
                </a>
            </div>
        </div>
    );
};

export default Contact;