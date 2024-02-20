import React from "react";
import './About.css';




const About = () => {



    return (
        <div id="about-us">
            <div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 text-center py-4 my-4"> 
                            <h1>About Us</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6 my-2">
                            <div className="py-5 my-5 px-2">
                                <h2>About Raj Ever Green Export</h2>
                                <p>Karthi Exports is a bankable name that can be trusted for processing retail and massive product requirements in a professional manner.
                                    We started our company operations as an exporter, supplier, and importer of
                                    Basmati Rice, Non Basmati Rice, Wheat Seeds, Dry Fruits, Fresh Vegetables, Indian Spices, Edible Oil, Peanut Kernels, Medical Products,
                                    Indian Pulses etc. Our offered product line is procured from the trusted names in the market,
                                    stored at our in-house facility, tested for quality and processed further as per the market demands.
                                </p>
                            </div>
                        </div>
                        <div className="col-md 5 d-flex justify-content-center">
                            <img src={require('../common/imag/New folder/smiling-businessmen.webp')} alt="Contact Us" className="img-fluid"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;