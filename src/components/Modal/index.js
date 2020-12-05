import React, { useState } from 'react'
import "../../styles/Modal.scss"
import Calendar from 'react-calendar';
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ showModal, onCloseModal }) => {

    const style = {
        calendar: {

        }
    }

    const onCloseModalClick = () => {
        onCloseModal(false)
    }

    AOS.init();

    if (!showModal) {
        return null;
    }
    return (
        <div className="modal-container" style={showModal ? {} : { display: "none" }}>
            <div className="modal" data-aos="zoom-in" >
                <h1 className="modal-header-text">Add your next plan</h1>
                <a className="modal-close" onClick={onCloseModalClick}>close</a>
                <div className="modal-input">
                    <h3 className="modal-input-txt">Write title of your plan</h3>
                    <input type="text" className="modal-input-input" />
                    <div className="modal-input-calendar">
                    </div>
                    {/* <Calendar style={style.calendar} /> */}

                </div>
            </div>
        </div>

    )
}

export default Modal
