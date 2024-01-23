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
        <div className="carousel-container" id="/">
            <Carousel fade>
                <Carousel.Item interval={1500}>
                    <img src={require('../imag/CG-Process/cashew-nut-bgi4.jpg')} alt="cashew-nut-image" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <img className="cashewImage-slide" src={require('../imag/CG-Process/cashew-harvesting.jpg')} alt="cashew-nut" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <img className="cashewImage-slide" src={require('../imag/CG-Process/Cashew-Nut-.jpg')} alt="cashew-nut" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <img className="cashewImage-slide" src={require('../imag/CG-Process/cashew-whole.jpg')} alt="cashew-nut" />
                    <Carousel.Caption>
                        <h3>Forth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <img className="cashewImage-slide" src={require('../imag/CG-Process/cashew-nut-bgi8.jpg')} alt="cashew-nut" />
                    <Carousel.Caption>
                        <h3>Fivth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <img className="cashewImage-slide" src={require('../imag/CG-Process/cashewApples.jpg')} alt="cashew-nut" />
                    <Carousel.Caption>
                        <h3>Fivth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="cashewImage-slide" src={require('../imag/CG-Process/cashews-nuts-bottel.webp')} alt="cashew-nut" />
                    <Carousel.Caption>
                        <h3>Fivth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="card-container">
                <Container className="card-grid-container ">
                    <Row className="card-row-container-1">
                        <Col xs={6} sm={6} md={3} className="card-col" >
                            <Card >
                                <Card.Img variant="top" src={require('../imag/CG-Process/cashewBowl.jpg')} />
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
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashew-nuts-wallpaper-image5.jpg')} />
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
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashew-nuts-wallpaper-image4.jpg')} />
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
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/CG-Process/cashew-nut-bgi7.jpg')} />
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
                    <Row className="card-row-container-2 ">
                        <Col xs={6} sm={6} md={3} className="card-col" >
                            <Card >
                                <Card.Img variant="top" src={require('../imag/CG-Process/cashew-nut-bgi12.jpg')} />
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
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/CG-Process/cashew-nut-bgi10.jpg')} />
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
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/CG-Process/casheww240.jpg')} />
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
                        <Col xs={6} sm={6} md={3} className="card-col">
                            <Card >
                                <Card.Img variant="top" src={require('../imag/cashew-nuts-wallpaper-image6.jpg')} />
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
            <div className="cashewBenefit-container">
            <Carousel >
                    <Carousel.Item className="cashewBenifits">
                            <Row>
                                <Col>
                                    <img src={require('../imag/CG-Process/cashew-nut-bgi6.jpg')} alt="cashef Benefit" />
                                </Col>
                                <Col>
                                    <h5>Cashew Kernel Benefits</h5>
                                    <p>
                                        Cashews are rich in fiber, protein, and healthy fats. They also contain
                                        a variety of vitamins, minerals, and health-protective beneficial plant compounds.
                                        Similarly to nuts, cashews may promote weight loss, blood sugar control, and heart health.
                                    </p>
                                </Col>
                            </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col>
                                    <h5>Cashew Kernel Benefits</h5>
                                    <p>
                                        Cashews are rich in fiber, protein, and healthy fats. They also contain
                                        a variety of vitamins, minerals, and health-protective beneficial plant compounds.
                                        Similarly to nuts, cashews may promote weight loss, blood sugar control, and heart health.
                                    </p>
                                </Col>
                                <Col>
                                    <img src={require('../imag/CG-Process/Cashew-Apple.jpg')} alt="cashef Benefit" />
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
export default Home;