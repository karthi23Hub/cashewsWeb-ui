import React from "react";
import './Product.css';
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { gradeData1, responsive, gradeData2 } from "./GradeData";
import { WholesGradeCard, PiecesGradeCard } from "./CashewGradeCard";
import { Tables, WhiteWholes, ScorchedWholes, DesertWholes, ScorchedPieces } from "../commones/table/Tables";
import { cashewGrade, whiteWholesGrade, scrochedWholesGrade, desertWholes, scorchedPieces } from "../commones/table/TableData";
import { WhitePieces, DessertPieces } from "../commones/table/Tables";
import { whitePieces, dessertPieces } from "../commones/table/TableData";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}

const Product = () => {

    const card1 = gradeData1.map((item) => {
        return (
            <WholesGradeCard
                path={item.imagePath}
                name={item.name}
                description={item.description}
            />
        )

    });

    const card2 = gradeData2.map((item) => {
        return (
            <PiecesGradeCard
                path={item.imagePath}
                name={item.name}
                description={item.description}
            />
        )

    });

    const allGrateType = cashewGrade.map((item) => {
        return (
            <Tables
                g1Name={item.grades1}
                g1Type={item.types1}
                g2Name={item.grades2}
                g2Type={item.types2}
            />
        )
    });

    const wwGrade = whiteWholesGrade.map((item) => {
        return (
            <WhiteWholes
                wwgName1={item.grade1} wwgCount1={item.gCount1} color={item.colorCharacter}
                wwgName2={item.grade2} wwgCount2={item.gCount2} maxMoisture={item.maxMoisture}
                wwgName3={item.grade3} wwgCount3={item.gCount3} maxBroken={item.maxBroken}
                wwgName4={item.grade4} wwgCount4={item.gCount4} fText={item.footerText}
                wwgName5={item.grade5} wwgCount5={item.gCount5}
                wwgName6={item.grade6} wwgCount6={item.gCount6}
            />
        )
    });

    const swGrade = scrochedWholesGrade.map((item) => {
        return (
            <ScorchedWholes
                wwgName={item.grade} wwgCount={item.gCount}
                wwgName1={item.grade1} wwgCount1={item.gCount1} color={item.colorCharacter}
                wwgName2={item.grade2} wwgCount2={item.gCount2} maxMoisture={item.maxMoisture}
                wwgName3={item.grade3} wwgCount3={item.gCount3} maxBroken={item.maxBroken}
                wwgName4={item.grade4} wwgCount4={item.gCount4} fText={item.footerText}
                wwgName5={item.grade5} wwgCount5={item.gCount5}
                wwgName6={item.grade6} wwgCount6={item.gCount6}
            />
        )
    })

    const dwGrade = desertWholes.map((item) => {
        return (
            <DesertWholes
                dwgName1={item.grade1}
                dwgName2={item.grade2}
                tName1={item.tradeName1}
                tName2={item.tradeName2}
                color1={item.color1}
                color2={item.color2}
                count={item.count}
                maxMoisture={item.maxMoisture}
                maxBroken={item.maxBroken}
                fText={item.footerText}
            />
        )
    })

    const wpGrade = whitePieces.map((item) => {
        return (
            <WhitePieces
                g1={item.grade1} g2={item.grade2} g3={item.grade3} g4={item.grade4} g5={item.grade5} tName1={item.tradeName1} tName2={item.tradeName2} tName3={item.tradeName3} tName4={item.tradeName4} tName5={item.tradeName5}
                bColo={item.bColor} sColo={item.sColor} lwpColo={item.lwpColor} swpColo={item.swpColor} bbColo={item.bbColor}
                count={item.count} lwpDescr={item.lwpDescription} swpDescr={item.lwpDescription} bbDescr={item.bbDescription}
                maxMois={item.maxMoisture} maxBrok1={item.maxBroken1} maxBrok2={item.maxBroken2}
                nlg1={item.nlgMax1} nlg2={item.nlgMax2} nlg3={item.nlgMax3} nlg4={item.nlgMax4} nlg5={item.nlgMax5}
            />
        )
    });

    const spGrade = scorchedPieces.map((item) => {
        return (
            <ScorchedPieces
                g1={item.grade1} g2={item.grade2} g3={item.grade3} g4={item.grade4}
                tName1={item.sbTradeName} tName2={item.ssTradeName} tName3={item.spTradeName} tName4={item.sspTradeName}
                sbColo={item.sbColor} ssColo={item.ssColor} spColo={item.spColor} sspColo={item.sspColor}
                sbcount={item.sbCount} ssCount={item.ssCount} spDescr={item.spCount} sspDescr={item.sspCount}
                maxMois={item.maxMoisture} maxBrok1={item.maxBroken1} maxBrok2={item.maxBroken2}
                nlg1={item.sbNLGmax} nlg2={item.ssNLGmax} nlg3={item.spNLGmax} nlg4={item.sspNLGmax}
                rText={item.remarkText}
            />
        )
    });

    const dpGrade = dessertPieces.map((item) => {
        return (
            <DessertPieces
                g1={item.grade1} g2={item.grade2}
                tName1={item.sspTradeName} tName2={item.dpTradeName}
                spsColor={item.spsColor} dpColor={item.dpColor}
                spsDescr={item.spsDescription} dpDescr={item.dpDescription}
                maxMois={item.maxMoisture} maxBrok={item.maxBroken}
                spsNLG={item.spsNLGmax} dpNLG={item.dpNLGmax}
                rText={item.remarksText} nlsgText={item.nlsg}
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
                                <h2>Product Details</h2>
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
                            <h2>Cahsew Grades</h2>
                            <p>Cashew Kernels are graded into white / scorched wholes, splits, butts etc. Depending on the shape, size & colour of the kernel.
                                <br /> There are various different grades of cashew kernels, but few grades are commercially available and traded. They are: </p>
                            <p>W – 180, is the ' King of Cashew ' - They are larger in size and very expensive.</p>
                            <p> W – 210, are popularly known as ' Jumbo ' nuts.</p>
                            <p>W - 240, it is an attractive grade which is reasonably priced. </p>
                            <p>W – 320, are the most popular among cashew kernels and highest in terms of availability, worldwide. </p>
                            <p> W – 450, are the smallest and cheapest white whole kernels and hence the favorite among low priced whole grades.</p>
                            <p> Scorched wholes are another grade of cashew kernels, which have a slight brown colour due to longer roasting.<br /> They have all the other characteristics of white kernels and have the same nutritional qualities.</p>
                            <p>Butts, splits and pieces are priced lower and are ideal for cooking, preparation of sweets and savoury snacks.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="grade-details">
                <Container > {allGrateType} </Container>
            </div>
            <div className="wholes-grade-cards">
                <Container fluid>
                    <h1 style={{paddingBottom:"2rem"}}>Cashew Kernels-Wholes Grade</h1>
                    <Carousel responsive={responsive} >{card1}</Carousel>
                </Container>
            </div>
            <div >
                <h2 className="heading2-tag">Specification of Cashew Kernels</h2>
                <Container style={containerStyle}>
                    <h5 className="heading5-tag">Cashew Kernels - White Wholes</h5>
                    {wwGrade}
                    <p style={{ padding: "0.5rem" }}>Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity,
                        adhering testa and objectionable extraneous matter.
                        Scraped and partially shrivelled kernels also permitted provided such
                        scraping/shrivelling does not affect the characteristic shape of the kernel.</p>
                </Container>
            </div>
            <div className="table-container">
                <Container style={containerStyle}>
                    <h5 className="heading5-tag">Cashew Kernels - Scrohed Wholes</h5>
                    {swGrade}
                    <p>
                        Remarks: Kernels shall be completely free from infestation, insect damage,
                        mould rancidity, adhering testa and objectionable extraneous matter. Scraped and partially
                        shrivelled kernels also permitted provided such scraping/shrivelling
                        does not affect the characteristic shape of the kernel.
                    </p>
                </Container>
            </div>
            <div className="table-container">
                <Container style={containerStyle}>
                    <h5 className="heading5-tag">Cashew Kernels - Dessert Wholes</h5>
                    {dwGrade}
                    <p>
                        Remarks: Kernels shall be completely free from infestation,
                        insect damage, mould rancidity, adhering testa and objectionable extraneous matter.
                    </p>
                </Container>
            </div>
            <div className="wholes-grade-cards">
                <Container fluid>
                    <h1>Pieces Grade</h1>
                    <Carousel responsive={responsive} >{card2}</Carousel>
                </Container>
            </div>

            <div className="table-container">
                <Container style={containerStyle}>
                    <h5 className="heading5-tag">Cashew Kernels - White Pieces</h5>
                    {wpGrade}
                    <p>
                        Remarks: Kernels shall be completely free from infestation, insect damage,
                        mould rancidity, adhering testa and objectionable extraneous matter. Scraped
                        and partially shrivelled kernels also permitted provided such scraping/shrivelling
                        does not affect the characteristic shape of the kernel.
                    </p>
                </Container>
            </div>
            <div className="table-container">
                <Container style={containerStyle}>
                    <h5 className="heading5-tag">Cashew Kernels - Scroched Pieces</h5>
                    {spGrade}
                    <p>
                        Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity,
                        adhering testa and objectionable extraneous matter. Scraped and partially shrivelled kernels also
                        permitted provided such scraping/shrivelling does not affect the characteristic shape of the kernel.
                    </p>
                </Container>
            </div>
            <div className="table-container">
                <Container style={containerStyle}>
                    <h5 className="heading5-tag">Cashew Kernels - Dessert Pieces</h5>
                    {dpGrade}
                    <p>
                    Remarks: Kernels shall be completely free from infestation, insect damage, 
                    mould rancidity, adhering testa and objectionable extraneous matter.
                    </p>
                    <p>
                    NLSG denotes: Next Lower Size Grade. NLG denotes: Next Lower Grade.
                    </p>
                </Container>
            </div>
        </div>
    )
}
export default Product;