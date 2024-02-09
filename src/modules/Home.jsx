import React from "react";
import './Home.css';
import 'animate.css';
// import Button from "react-bootstrap/Button";



const Home = () => {
    return (
        <div className="home-container" id="/">
            <div className="text-container">
                <h1 className="animate__backInDown">PandrutiCashews</h1>
                <p className="animate__backInLeft">We are Providing Best Quality and Affordable Price Contect Me</p>
                {/* <Button >Rede More</Button> */}
                <button className=" button animate__backInUp" style={{animationDuration:"2s"}}>reade more</button>
            </div>
        </div>
    )
}
export default Home;