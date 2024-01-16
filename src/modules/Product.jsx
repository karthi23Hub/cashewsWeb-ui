import React from "react";
import './Product.css';
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { gradeData1, responsive,gradeData2} from "./GradeData";
import { WholesGradeCard,PiecesGradeCard } from "./CashewGradeCard";
import Tables from "../commones/table/Tables";
import { cashewWholesGrade } from "../commones/table/TableData";





const Product = () => {

    const card1 = gradeData1.map((item) => {
        return (
            <WholesGradeCard 
            path={item.imagePath}
            name={item.name}
            description={item.description}
            />
        )

    })

    const card2 = gradeData2.map((item) => {
        return (
            <PiecesGradeCard 
            path={item.imagePath}
            name={item.name}
            description={item.description}
            />
        )

    })

    const allGrateType = cashewWholesGrade.map((item)=> {
       return(
          <Tables 
              g1Name={item.grades1}
              g1Type={item.types1}
              g2Name={item.grades2}
              g2Type={item.types2}
          />
       )
    })

    return (
        <div className="product-container">
            <div className="product-h2-image-container">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="product-row1-container">
                            <div className="text-container">
                                <h2>Product Details with Cashew Grades;</h2>
                                <p>
                                    Panruti cashew is mainly cultivated in laterite, red and coastal sands.
                                    The cashew apples from Panruti are also uniquely distinctive.
                                    The apple is round-shaped and bright red in colour.
                                    The average fruit weight is 42.80 gm while the nuts are of medium size with an average weight of 6.63 gm and kernel weight of 1.7 g.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="product-row1-container">
                            <div className="cashew-image-container">
                                <Image src={require('../imag/cashew-fruits.jpg')} fluid />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="product-row2-container">
                            <h2>Intro</h2>
                            <p>Panruti produces cashews, jackfruits, sugar canes and many vegetables.
                                Panruti plays a major role in the cashew export business, exporting to Malaysia, Australia, Singapore, and the United States.
                                It is known for its famous international jackfruit market,
                                from where jackfruit is exported to many other countries.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="grade-details">
                <Container > {allGrateType} </Container>              
            </div>
            <div className="wholes-grade-cards">
                <Container fluid>
                    <h1>Wholes Grade</h1>
                    <Carousel  responsive={responsive} >{card1}</Carousel>
                </Container>
            </div>
            <div className="wholes-grade-cards">
                <Container fluid>
                    <h1>Pieces Grade</h1>
                    <Carousel  responsive={responsive} >{card2}</Carousel>
                </Container>
            </div>          
        </div>
    )
}
export default Product;