import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-content-container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="contact-title">Our Contact</h2>
                    </div>
                </div>
                <div className="row" id="contact-content-container">
                    <div class="col-lg-6" id="contact-card-container" >
                        <div class="card " id="contact-card1" data-aos="fade-left" data-aos-delay="200">
                            <div class="card-body">
                                <i class="bi bi-geo-alt" style={{ fontSize: "2.5rem", color: "cornflowerblue", fontWeight: "bold" }}></i>
                                <h5 class="card-title">Address</h5>
                                <p>  MutharasanKuppam,Sathipattu(po), Panruti, Cuddalore(tk), Tamil Nadu 607106</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 " id="contact-card-container">
                        <div class="card " id="contact-card" data-aos="fade-up-right" data-aos-delay="200">
                            <div class="card-body">
                                <i class="bi bi-person-circle" style={{ fontSize: "2.5rem", color: "cornflowerblue", fontWeight: "bold" }}></i>
                                <h5 class="card-title">Contact Us</h5>
                                <p>+9159116690</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 " id="contact-card-container" >
                        <div class="card " id="contact-card" data-aos="fade-down" data-aos-delay="200">
                            <div class="card-body">
                                <i class="bi bi-envelope-at" style={{ fontSize: "2.5rem", color: "cornflowerblue", fontWeight: "bold" }}></i>
                                <h5 class="card-title">E-Mail Us</h5>
                                <p>karthikeyanarumugam@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="contact-content-container">
                    <div class="col-lg-6" id="contact-card-container">
                        <div class="card " style={{padding:"0%"}} id="contact-card" data-aos="fade-right" data-aos-delay="200">
                            <div class="card-body" style={{padding:"0%"}} id="location-container">
                                <iframe className="office-Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.4434183837184!2d79.57718687482003!3d11.733779888479258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a5536c21eb7d%3A0xcbe860548413cd47!2sMutharasankuppam%20School!5e0!3m2!1sen!2sin!4v1713108679104!5m2!1sen!2sin" 
                              allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6" id="contact-card-container" >
                        <div class="card " id="contact-card5" data-aos="fade-left" data-aos-delay="200">
                            <div class="card-body" id="cardBody">
                                <h1>Frequently Asked Questions</h1>
                                <form className="contact-form-container">
                                    <div class="mb-3">
                                        <label for="exampleForm" class="form-label">Full Name</label>
                                        <input type="text" class="form-control" id="exampleForm" placeholder="Enter Your Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail.com" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="5"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-outline-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;