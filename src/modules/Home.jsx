import React from "react";
import './Home.css';
import Aos from "aos";
import 'aos/dist/aos.cjs';
import { useEffect } from "react";
import {Link}  from "react-scroll";




const Home = () => {
   
useEffect(()=>{
   Aos.init()
})
    return (
        <div className="home-container" id="/">
            <div className="home-text-container">
                <h1 className="company-name-content" >
                    Stri Enterprises <span className="companyName-style">Exports</span> Pvt Ltd.
                </h1>
                <p className="announcement-content"  >
                    We are providing all gread of cashew nut with best Quality and affordable price.
                    If you intrest to buy cilck bellow contact us button and more details watch more
                </p> 
                <div className="button-container" >
                   <button className="contact-button" >
                   <Link to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact Us</Link>
                   </button>
                   <button className="watch-more-button" >
                   <a href="https://youtu.be/CXTZVKYYyig?si=ZKUDQZRy41khTap9">Watch More</a>
                   </button>
                </div>
            </div>
            <div className="png-image-container">
                <img src={require('../common/imag/png images/banner2.png')} className="png-image" data-aos="fade-left" data-aos-delay="200"  data-aos-duration="1000"/>
            </div>

        </div>
    )
}
export default Home;