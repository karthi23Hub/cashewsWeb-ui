import React from "react";
import './About.css';


const About = () => {

    return (
        <div id="about-us">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="col-12 text-center py-5 my-5">
                            <h1 className="about-title-content" data-aos="fade-up" data-aos-delay="200">About Us</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="col ">
                            <div class="py-2 ">
                                <h2>About Karthi Export</h2>
                                <p>Karthi Exports is a bankable name that can be trusted for processing retail and massive product requirements in a professional manner.
                                    We started our company operations as an exporter, supplier, and importer of
                                    Basmati Rice, Non Basmati Rice, Wheat Seeds, Dry Fruits, Fresh Vegetables, Indian Spices, Edible Oil, Peanut Kernels, Medical Products,
                                    Indian Pulses etc. Our offered product line is procured from the trusted names in the market,
                                    stored at our in-house facility, tested for quality and processed further as per the market demands.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="col">
                            <img src={require('../common/imag/New folder/smiling-businessmen.webp')} alt="Contact Us" class="contactPage-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;