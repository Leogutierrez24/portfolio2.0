import React from "react";
import closeIcon from "../assets/images/general-icons/x-lg.svg";
import "./modal.scss";

const Modal = (props) => {
    return(
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <span onClick={props.handleModalClose}>
                        <img src={closeIcon} alt="close-modal-icon" className="modal-button"/>
                    </span>
                </div>
                <div className="modal-body">
                    <h3 className="modal-message">I'm still working in this form but you can contact me <a href="mailto:leoalegutierrez97@gmail.com">here</a> or in the icons below</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;