import React from "react";
import './CahsewProduct.css';
import ProductData from "../common/productData/Data";
import  Button  from "@mui/material/Button";


const CashewProduct = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-4  " key={item.id} style={{ width: "17.4rem" }} id="cardStyle">
                {item.img}
                <div class="card-body text-center" id="textContainer">
                    <h3 class="card-title">{item.title}</h3>
                    <p id="descTextStyle">Description:{item.desc}</p>
                    <p id="priceTextStyle">Average_Price: ₹ {item.price} /Kg</p>
                    <Button className="animate__zoomIn" id="buttonStyle" style={{animationDuration:"2s"}} key={item.id}>Buy Now</Button>
                </div>
            </div>
        );
    }


    return (
        <div id="product">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> Cashew Nut Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {ProductData.map(cardItem)}
                </div>
            </div>
        </div>
    )
}
export default CashewProduct;