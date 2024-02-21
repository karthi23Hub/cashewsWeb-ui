import React from "react";
import './Home.css';
import 'animate.css';
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-scroll";



const Home = () => {
    return (
        <div className="home-container" id="/">
            <Carousel style={{ width: "100%", padding: "0.4rem", backgroundColor: "#E5E5E5" }} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Carousel Images/carousel5.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">RajEverGreen Exports</h5>
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
                        <h5 className="animate__backInDown">RajEverGreen Exports</h5>
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
                        <h5 className="animate__backInDown">RajEverGreen Exports</h5>
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
                        <h5 className="animate__backInDown">RajEverGreen Exports</h5>
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
                        <h5 className="animate__backInDown">RajEverGreen Exports</h5>
                        <p className="animate__backInLeft">
                            We are providing best quality with affordable price
                        </p>
                        <button type="button" class="btn btn-outline-dark btn-lg">
                            <Link to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
export default Home;