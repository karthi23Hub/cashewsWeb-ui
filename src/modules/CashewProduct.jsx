import React, { useEffect } from "react";
import './CahsewProduct.css';
import ProductData from "../common/productData/Data";
import Button from "@mui/material/Button";
import ProductDetailsPopUp from "./ProductDetailsPopUp";
import PopUpModal from "../common/popUpModal/PopUpMadal";
import { useState } from "react";
import gradeData1 from './GradeData';

const CashewProduct = () => {
    let [buyNowPopUp, setBuyNowPopUp] = useState(false);
    let [getgradeDetails, setGetGradeDetails] = useState([]);
    let [showgradeData, setShowGradeData] = useState([]);
    let [filterData, setFilterData] = useState(ProductData);

    let onClickFilterAll = () => {
        setFilterData(ProductData.filter(data => data));
    };
    let onClickFilterWW = () => {
        setFilterData(ProductData.filter(data => data.category === "WW"));
    };
    let onClickFilterSW = () => {
        setFilterData(ProductData.filter(data => data.category === "SW"));
    };

       
    let onClickOpen = (selectedItem) => {
        let data;
        getgradeDetails.forEach((grade) => {
            if (grade.id === selectedItem.id) {
                data = grade;
            }
        })
        setShowGradeData(data);
        setBuyNowPopUp(true);
    }

    let onClickClose = () => {
        setBuyNowPopUp(false);
    }

    useEffect(() => {
        if (gradeData1) {
            setGetGradeDetails(gradeData1)
            getData(gradeData1)
        }
    }, [])

    let getData = (datas) => {
        let data = {}
        datas.push(data)
    }



    const cardItem = (item) => {
        return (
            <div class="card my-4  " key={item.id} style={{ width: "17.4rem" }} id="cardStyle">
                {item.img}
                <div class="card-body text-center" id="textContainer">
                    <h3 class="card-title">{item.title}</h3>
                    <p id="descTextStyle">Description:{item.desc}</p>
                    <p id="priceTextStyle">Average_Price: ₹ {item.price} /Kg</p>
                    <Button className="animate__zoomIn" id="buttonStyle"
                        style={{ animationDuration: "2s" }}
                        key={item.id} onClick={() => onClickOpen(item)} >View Details</Button>
                </div>
            </div>
        );
    }


    return (
        <div id="product">
            <div className="container py-3">
                <div className="row">
                    <div className="col-6">
                        <button onClick={onClickFilterAll}>All-Grades</button>
                        <button onClick={onClickFilterWW} >WW-Grades</button>
                        <button onClick={onClickFilterSW}>SW-Grades</button>
                        <button>G3</button>
                    </div>
                    <div className="col-12 text-center">
                        <h1> Our Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {filterData.map(cardItem)}
                </div>
            </div>
            <div>
                {buyNowPopUp && <PopUpModal >
                    <ProductDetailsPopUp onClose={onClickClose} showDatas={showgradeData} />
                </PopUpModal>}
            </div>
        </div>
    )
}
export default CashewProduct;