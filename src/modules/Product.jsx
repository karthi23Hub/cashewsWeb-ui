import React from "react";
import './Product.css';
import 'react-multi-carousel/lib/styles.css';
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";



const Product = () => {

    


    return (
        <div className="product-container" id="#">
              <Container fluid>
            <div className="Product-tittle">
                <h1>Cashew Kernel Product</h1>
                <p>The cashew kernels have many veraites and have in available affortable price </p>
            </div>
            </Container>
          <div className="card-container">
                <Container className="card-grid-container " fluid>
                    <Row className="card-row-container-1">
                        <Col xs={6} sm={6} md={3} className="card-col" >
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/cashew-nut-ww180-1000x1000.webp')} />
                                <Card.Body>
                                    <Card.Title>white wholes-180</Card.Title>
                                    <Card.Text>
                                       
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/w210-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>white Wholes-210</Card.Title>
                                    <Card.Text>
                                    
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/w240-whole-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>White Wholes-240</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/raw-cashew-nuts-w320-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>White Wholes-320</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="card-row-container-2 ">
                        <Col xs={6} sm={6} md={3} className="card-col" >
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw450-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>White Wholes-450</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw210-plain-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Scorched Wholes-210</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw180-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Scroched Wholes-180</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw240-whole-cashew-nuts-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Scroched Wholes-240</Card.Title>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="card-row-container-2 ">
                        <Col xs={6} sm={6} md={3} className="card-col" >
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw450-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Scroched Wholes-320</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw210-plain-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Scroched Wholes-450</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw180-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Small White Pieces</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw240-whole-cashew-nuts-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Large White Pieces</Card.Title>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="card-row-container-2 ">
                        <Col xs={6} sm={6} md={3} className="card-col" >
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw450-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Splits</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw210-plain-cashew-nut-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Scroched Wholes Seconds</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw180-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Scroched Pieces Seconds</Card.Title>
                                    <Card.Text>
                                      
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashewNut/sw240-whole-cashew-nuts-500x500.webp')} />
                                <Card.Body>
                                    <Card.Title>Cashew Kernels-Dessert Wholes</Card.Title>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                    <Button variant="primary">More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Product;