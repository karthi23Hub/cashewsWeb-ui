import React from "react";
import './Footer.css';
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () =>{
    return(
        <div  id="footer-container">
           <div className="footer-grid-container">
                <Container>
                    <Row className="row1-container">
                        <Col xs={12} className="row1-col">CashewNut</Col>
                    </Row>
                    <Row  className="row2-container">
                        <Col xs={12} sm={2} className="row2-col">Home </Col>
                        <Col xs={12} sm={2} className="row2-col">Product</Col>
                        <Col xs={12} sm={2} className="row2-col">Services</Col>
                        <Col xs={12} sm={2} className="row2-col">About Us</Col>
                        <Col xs={12} sm={2} className="row2-col">Contact</Col>
                        <Col xs={12} sm={2} className="row2-col">Location</Col>
                    </Row>
                </Container>
           </div>
        </div>
    )
}
export default Footer;
