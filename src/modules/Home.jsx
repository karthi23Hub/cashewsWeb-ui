import React from "react";
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home = () => {
    return (
        <div className="carousel-container">
            <Carousel >
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={require('../imag/cashew-nuts-wallpaper-image1.jpg')} alt="cashew-nut-image"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img  src={require('../imag/cashew-nuts-wallpaper-image2.jpg')} alt="cashew-nut-image"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} alt="cashew-nut-image"/>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                
            </div>
        </div>
    )
}
export default Home;