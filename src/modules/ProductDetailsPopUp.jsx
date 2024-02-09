import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";


const popUpStyle = {
  width: "100%",
  height: "100%",
  color: "#000000",
  boxSizing:"borderBox"
}

const gridContainer = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
}

const cardContainer = {
  width: "450px",
  maxWidth: "500px",
  display: "flex",
  flexDiraction: "column",
  alignItem: "center",
  justifyContent: "center",
}

const gridCol = {
  display: "flex",
  flexDiraction: "column",
  alignItem: "center",
  justifyContent: "center",
}
const gridCol2 = {
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  boxSizing:"borderBox",
  overFlow:"hiden"
}

const textContainerStyle = {
  margin:"0.5rem"
}

const textContentStyle = {
  display:"inline",
}

const ProductDetailsPopUp = (props) => {
  let details = props.showDatas;
  return (
    <div style={popUpStyle} key={details.id} >
      <Grid2 container style={gridContainer}>
        <Grid2 xs={12} md={6} style={gridCol}>
          <Card style={cardContainer}>
            <CardActionArea>
              <CardMedia component="img"
                height="300"
                image={require('../common/imag/cashew-details.jpeg')}
                alt="cashews" />

            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 xs={12} md={6} style={gridCol2}>
          <div style={textContainerStyle}>
            <h1 style={{color:"blue"}}>Our product Details</h1>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>Grade Name:</h5>
            <label>W W-180</label>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>Trade Name:</h5>
            <label>White Wholes-180</label>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>Price:</h5>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>Color:</h5>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>Count:</h5>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>Max Moisture:</h5>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>Max Broken:</h5>
          </div>
          <div style={textContainerStyle}>
            <h5 style={textContentStyle}>NLSG LGS Max% :</h5>
          </div>
          <div >
            <h5>Remark:</h5>
            <p>
              Remarks: Kernels shall be completely free from infestation, insect damage,
              mould rancidity, adhering testa and objectionable extraneous matter.
              Scraped and partially shrivelled kernels also permitted provided such
              scraping/shrivelling does not affect the characteristic shape of the kernel.
            </p>
          </div>
        </Grid2>
      </Grid2>
    </div>
  )
}
export default ProductDetailsPopUp;