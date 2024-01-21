import React from "react";
import './Process.css';
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/row";
import  Col  from "react-bootstrap/Col";




const Process = () =>{
    return(
        <div>
            <Container fluid >
                <Row>
                    <Col xs={12}>
                      <img className="cashewTree-image" src={require('../imag/CG-Process/cashewTree-fruits.jpg')} alt="cashewTree"/> 
                    </Col>
                </Row>
            </Container>
            <div className="heading-h4">
                <h4>
                    Processer for Cashew Grade
                </h4>
            </div>
            <Container className="cashewApple-container" fluid> 
                <Row>
                    <Col className="cashewFruit-image-col">
                      <img className="cashewFruit-img" src={require('../imag/CG-Process/Cashew-Apple.jpg')} alt="cashewFruit"/>
                    </Col>
                    <Col className="cashewFruit-description">
                        <h5>Cashew Apple Sesson In INDIA</h5>
                        <p>Cashew apple sesson in india:On hot a summerday,Beginning of the season: February,the Cashew Apple peak season that begins in mid-April. and cashews harvest season: End of season: June, July.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="cashewCollect-img-container" fluid>
                <Row>
                    <Col className="cashewCollect-img-col">
                       <img className="cashewsCollecte-img" src={require('../imag/CG-Process/CashewNut-collect.jpg')} alt="cashewNut"/>
                    </Col>
                    <Col className="cashewSeorate-img-col">
                        <img className="cashewsseprate-img" src={require('../imag/CG-Process/cashewNut-seprate.jpeg')} alt="CashewNut"/>
                    </Col>
                    <Col className="cashewNut-img-col">
                      <img className="cashewsNut-img" src={require('../imag/CG-Process/CashewNut-seprate-fruit.jpg')} alt="CashewNut"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="cashewCollect-description">
                       <h5>Cashew Nuts are Extracted from The Cashew Fruits</h5>
                       <p>
                        That persons collect the cashew fruits from the cashew garden and The fruits is laid in the one place 
                       </p>
                       <p >That Persons is extracted cashew nuts from the cashew fruits</p>
                    </Col>
                </Row>
            </Container>
            <Container className="cashewDrying-container" fluid>
                <Row >
                    <Col className="cashewDry-img-col">
                        <img className="cashewNut-drying-img" src={require('../imag/CG-Process/cashewNut-dry.webp')} alt="cashewNut"/>
                    </Col>
                    <Col className="cashewDry-description-col">
                        <h5>Cashew Nut is Dryed on Sun Light</h5>
                        <p>The cashew nut is dryed on sun light and The nuts is Stored in 80-kg & 100-kg jute bundel </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Process