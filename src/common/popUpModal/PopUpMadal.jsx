import React, { useRef } from "react";
import './PopUpModal.css';
import ReactDOM from "react-dom";
import { Fab } from "@mui/material";
import  Close  from "@mui/icons-material/Close";


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
                    <Fab  size="medium" variant="extended" aria-label="close" onClick={handClick} color="error">
                     <Close sx={{mr:0.5}}></Close>close
                </Fab>  
                </div>
                <div className="content-message-container">
                    {props.children}
                </div>
            </div>
        </div>, document.getElementById('portal'))

    )
}
export default PopUpModal;