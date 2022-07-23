import {React, useState} from "react";
import Modal from "../modal/Modal";
import github from "../assets/images/contact-icons/github.svg";
import linkedin from "../assets/images/contact-icons/linkedin.svg";
import "./contact.scss";

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

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
                <button className="contact-btn" onClick={handleModal}>send</button>
            </div>
            <div className="other-contacts">
                <a href="https://www.linkedin.com/in/leonel-gutierrez97/" target="_blank" rel="noreferrer noopener">
                    <img src={linkedin} alt="linkedin" className="linkedin-logo" />
                </a>
                <a href="https://github.com/Leogutierrez24" target="_blank" rel="noreferrer noopener">
                    <img src={github} alt="github" className="github-logo" />
                </a>
            </div>
            {
                showModal === true && <Modal handleModalClose={handleModalClose} />
            }
        </div>
    );
};

export default Contact;