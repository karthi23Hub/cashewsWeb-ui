import React from "react";
import './Home.css';
import 'animate.css';


const Home = () => {
    return (
        <div className="carousel-container" id="/">
            <img src={require('../imag/CG-Process/cashew-nut-bgi4.jpg')} className="home-image" />
            <div className="text-container">
                <h1 className="animate__backInDown">Pantruti_Cashews</h1>
                <p className="animate__backInLeft">We are Providing Best Quality and Affortable Price</p>
                <button className="animate__backInUp">Contact Me</button>
            </div>
        </div>
    )
}
export default Home;