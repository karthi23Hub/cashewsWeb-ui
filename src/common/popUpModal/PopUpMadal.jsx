import React, { useRef } from "react";
import './PopUpModal.css';
import ReactDOM from "react-dom";

const PopUpModal = (props) => {

    let onClose = props.children?.props.onClose;

    let popUp = useRef();

    const handClick = () => {
        if (onClose) {
            onClose();
        }
    }

    return (
        ReactDOM.createPortal(<div id="popUp-modal" ref={popUp}>
            <div className="popUp-modal-container">
                <div className="title-message-container">
                    karthi
                    <button onClick={handClick}>close Button</button>
                </div>
                <div className="content-message-container">
                    {props.children}
                </div>
            </div>
        </div>, document.getElementById('portal'))

    )
}
export default PopUpModal;