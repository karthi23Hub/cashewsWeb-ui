import React from "react";
import './Home.css';
import 'animate.css';
// import Button from "react-bootstrap/Button";



const Home = () => {
    return (
        <div className="carousel-container" id="/">
            <div className="text-container">
                <h1 className="animate__backInDown">PantrutiCashews</h1>
                <p className="animate__backInLeft">We are Providing Best Quality and Affortable Price Contect Me</p>
                {/* <Button >Rede More</Button> */}
                <button className=" button animate__backInUp" style={{animationDuration:"2s"}}>rede more</button>
            </div>
        </div>
    )
}
export default Home;