import React, { useEffect } from "react";
import './CahsewProduct.css';
import ProductData from "../common/productData/Data";
import Button from "@mui/material/Button";
import ProductDetailsPopUp from "./ProductDetailsPopUp";
import PopUpModal from "../common/popUpModal/PopUpMadal";
import { useState } from "react";
import gradeData1 from './GradeData';
 import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
 import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";



const CashewProduct = () => {
    let [buyNowPopUp, setBuyNowPopUp] = useState(false);
    let [getgradeDetails, setGetGradeDetails] = useState([]);
    let [showgradeData, setShowGradeData] = useState([]);
    let [filterData, setFilterData] = useState(ProductData);
    const [anchorEl, setAnchorEl] = React.useState(null);

    let onClickFilterAll = () => {
        setFilterData(ProductData.filter(data => data));
        setAnchorEl(null);
    };
    let onClickFilterWW = () => {
        setFilterData(ProductData.filter(data => data.category === "WW"));
        setAnchorEl(null);
    };
    let onClickFilterSW = () => {
        setFilterData(ProductData.filter(data => data.category === "SW"));
        setAnchorEl(null);
    };
    let onClickFilterScorched = () => {
        setFilterData(ProductData.filter(data => data.category === "scroched"));
        setAnchorEl(null);
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


    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 22,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));


    const cardItem = (item) => {
        return (
            <div class="card col-3" key={item.id}
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-offset="200"
                data-aos-duration="5000"
            >
                {item.img}
                <div class="card-body text-center">
                    <h3 class="card-title">{item.title}</h3>
                    {/* <p id="descTextStyle">Description:{item.desc}</p> */}
                    {/* <p id="priceTextStyle">Average_Price: ₹ {item.price} /Kg</p> */}
                    <Button id="buttonStyle"
                        key={item.id} onClick={() => onClickOpen(item)} >
                        View Details
                    </Button>
                </div>
            </div>
        );
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickClose = (event) => {
        setAnchorEl(null);
    };



    return (
        <div id="product">
            <div className="container py-3" style={{ margin: 1 }}>
                <div className="row" id="productPage-row" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="col-12 text-center">
                        <div className="product-title-content">
                            <div>
                                <h2 className="product-title" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Our Product</h2>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="filter-button-container">
                                <button className="filter-button" onClick={onClickFilterAll}>All</button>
                                <button className="filter-button" onClick={onClickFilterWW}>White Wholes</button>
                                <button className="filter-button" onClick={onClickFilterSW}> Scroched Wholes </button>
                                <button className="filter-button" onClick={onClickFilterScorched}>Scroched Peces</button>
                                {/* <button className="filter-button"onClick={onClickFilter}>Other</button> */}
                            </div>
                            <div className="filter-dropdown-container">
                            <Button
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDown />}
                            >
                              Grade List
                            </Button>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={ handleClickClose}
                            >
                                <MenuItem onClick={onClickFilterAll} disableRipple>
                                    All-Grades
                                </MenuItem>
                                <MenuItem onClick={onClickFilterWW} disableRipple>
                                    White Wholes
                                </MenuItem>
                                <MenuItem onClick={onClickFilterSW} disableRipple>
                                    Scroched Wholes
                                </MenuItem>
                                <MenuItem onClick={onClickFilterScorched} disableRipple>
                                    More
                                </MenuItem>
                            </StyledMenu>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container " id="card-container" >
                <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
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