import React from "react";
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
    return (
        <div className="carousel-container">
            <Carousel >
                <Carousel.Item>
                    <img src={require('../imag/cashew-nuts-wallpaper-image1.jpg')} alt="cashew-nut-image" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <imag src={require('../imag/cashew-nuts-wallpaper-image2.jpg')} alt="cashew-nut-image" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} alt="cashew-nut-image" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="card-container">
                <Container  className="card-grid-container">
                    <Row className="card-row-container-1">
                        <Col xs={12} sm={6} md={3} className="card-col" >
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-1</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3} className="card-col">
                        <Card >
                                <Card.Img variant="top" src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-2</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3} className="card-col">
                        <Card >
                                <Card.Img variant="top" src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-3</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3} className="card-col">
                        <Card >
                                <Card.Img variant="top"    src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-4</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="card-row-container-2 no-gutter">
                        <Col xs={12} md={3} className="card-col" >
                        <Card >
                                <Card.Img variant="top"    src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-5</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={3} className="card-col">
                        <Card >
                                <Card.Img variant="top"    src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-6</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={3} className="card-col">
                        <Card >
                                <Card.Img variant="top"    src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-7</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={3} className="card-col">
                        <Card >
                                <Card.Img variant="top"    src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Card Title-8</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Home;