import React from "react";
import './ProductDetailsPopUp.css';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";





const ProductDetailsPopUp = (props) => {
  let details = props.showDatas;
  return (
    <Container fluid className="pdPopUp-container" key={details.id}>
      <Row style={{ boxSizing: "border-box" }}>
        <Col className="pdPopUp-col1" >
          <div className="cgImage-Container">
            <Card  className="col1-card" >
              <CardActionArea style={{display:"flex",justifyContent:"center"}} >
                <img src={require('../common/imag/New folder/cashew-nut-bgi14.jpg')}  className="img-fluid"/>
              </CardActionArea>
            </Card>
          </div>
        </Col>
        <Col className="pdPopUp-col2">
          <h4 style={{ margin: "0.3rem 0rem 0.3rem 0rem", color: "blue" }}>
            WHITE WHOLES 180
          </h4>
          <p style={{ margin: "0rem" }}>
           {details.gradeName} cashews are the most sought after and highest quality because they have not been damaged or split.
          </p>
          <h5 style={{ margin: "0.3rem 0rem 0.3rem 0rem", color: "blue" }}>
            PRODUCT DETAILS:
          </h5>
          <label>
            Minimum Order Quantity:
          </label>
          <label>
            Type:
          </label>
          <label>
            Cultivation Type:
          </label>
          <label>
            Grade:
          </label>
          <label>
            Average Price:
          </label>
          <label>
            Category:
          </label>
          <label>
            Packaging Details:
          </label>
        </Col>
      </Row>
    </Container>
  )
}
export default ProductDetailsPopUp;