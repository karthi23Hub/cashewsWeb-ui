import React from "react";
import './Home.css';
import Aos from "aos";
import 'aos/dist/aos.cjs';
import { useEffect } from "react";




const Home = () => {
   
useEffect(()=>{
   Aos.init()
})
    return (
        <div className="home-container" id="/">
            {/* <Carousel style={{ width: "100%", padding: "0.4rem", backgroundColor: "#E5E5E5" }} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Carousel Images/carousel5.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Exports</h5>
                        <p className="animate__backInLeft">  We are providing best quality with affordable price</p>
                        <button type="button" class="btn btn-outline-dark btn-lg">
                            <Link to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Carousel Images/carousel2.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Exports</h5>
                        <p className="animate__backInLeft">  We are providing best quality with affordable price</p>
                        <button type="button" class="btn btn-outline-dark btn-lg">
                            <Link to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Carousel Images/carousel3.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Exports</h5>
                        <p className="animate__backInLeft">
                            We are providing bestqualitywith affor dable price
                        </p>
                        <button type="button" class="btn btn-outline-dark btn-lg">
                            <Link to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Carousel Images/carousel4.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Exports</h5>
                        <p className="animate__backInLeft">
                            We are providing best quality with affordable price
                        </p>
                        <button type="button" class="btn btn-outline-dark btn-lg">
                            <Link to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Carousel Images/carousel1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Exports</h5>
                        <p className="animate__backInLeft">
                            We are providing best quality with affordable price
                        </p>
                        <button type="button" class="btn btn-outline-dark btn-lg">
                            <Link to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel> */}
            <div className="home-text-container">
                <h1 className="company-name-content" data-aos="fade-up"  data-aos-delay="100"  data-aos-duration="1500">
                    Karthikeyan <span className="companyName-style">Exports</span> Pvt Ltd.
                </h1>
                <p className="announcement-content" data-aos="fade-up"  data-aos-delay="90"  data-aos-duration="2000">We are providing all gread of cashew nut with best Quality and affordable price.
                    If you intrest to buy cilck bellow contact us button and more details watch more
                </p> 
                <div className="button-container" >
                   <button className="contact-button" data-aos-delay="80"  data-aos-duration="2500">Contact Us</button>
                   <button className="watch-more-button"  data-aos-delay="80"  data-aos-duration="2500">Watch More</button>
                </div>
            </div>
            <div className="png-image-container">
                <img src={require('../common/imag/png images/banner2.png')} className="png-image" data-aos="zoom-in-left" data-aos-delay="100"  data-aos-duration="1000"/>
            </div>

        </div>
    )
}
export default Home;