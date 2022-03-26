import React from 'react';
import './Modal.css';

const Modal = ({display, closeModal}) => {
    return (
        <div style={{display:display}} className="modal">
            <div className="modal-body">
                <h1>Oops!</h1>
                <h3>You Can not Add more than 4 Gift Item</h3>
                <button onClick={closeModal}>OK</button>
            </div>
        </div>
    );
};

export default Modal;