import React from "react";
import './Home.css';
import 'animate.css';
import Carousel from "react-bootstrap/Carousel";



const Home = () => {
    return (
        <div className="home-container" id="/">
            <Carousel style={{ width: "100%" }} data-bs-theme="dark">
            <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Cashew-Apple1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Export</h5>
                        <p className="animate__backInLeft">  We are providing best quilaty and affordable price</p>
                        <button className="animate__backInUp">Contact Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Cashew-Apple2.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Export</h5>
                        <p className="animate__backInLeft">  We are providing best quilaty and affordable price</p>
                        <button className="animate__backInUp">Contact Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-images"
                        src={require('../common/imag/Cashew-Apple.2.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="animate__backInDown">Karthi Export</h5>
                        <p className="animate__backInLeft">
                            We are providing best quilaty and affordable price
                        </p>
                        <button className="animate__backInUp">Contact Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Home;