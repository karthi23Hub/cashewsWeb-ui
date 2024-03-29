import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 text-center py-4 my-4">
                            <h1>Our Contact</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md 5 d-flex justify-content-center">
                            <img src={require('../common/imag/New folder/cashew-nuts-wallpaper-image3.jpg')} alt="Contact Us" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 my-2" id="contactUs-content">
                            <div>
                                <h5>Contact Person:</h5>
                                <label>Karthikeyan.A</label>
                            </div>
                            <div>
                            <h5>Address:</h5>
                           <p>
                             678, Easte Street MutharasanKuppam,Sathipattu(po),<br/> Panruti, Cuddalore(tk), Tamil Nadu 607106.
                           </p>
                            </div>
                            <div>
                                <h5>Contact:</h5>
                                <label>+9159116690</label>
                            </div>
                            <div>
                                <h5>Email:</h5>
                                <label>karthiexports@gmail.com</label>
                            </div> 
                            <div>
                                <h5>Our Time:</h5>
                                <label>Mon-Sat:09:AM-09-00PM</label><br/>
                                <label>Sun:Available</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;