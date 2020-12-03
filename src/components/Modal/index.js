import React, { useState } from 'react'
import "../../styles/Modal.scss"
import Calendar from 'react-calendar';
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ show, onCloseClick, closeValue }) => {

    AOS.init();

    console.log(closeValue)

    if (!show) {
        return null;
    }

    return (
        <div className="modal-container">
            <div className="modal" data-aos="zoom-in" >
                <h1 className="modal-header-text">Add your next plan</h1>
                <a className="modal-close" onClick={onCloseClick(true)}>close</a>
                <div className="modal-input">
                    <h3 className="modal-input-txt">Write title of your plan</h3>
                    <input type="text" className="modal-input-input" />
                    <div className="modal-input-calendar">
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal
