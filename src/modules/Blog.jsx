import React from "react";
import './Blog.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
}



const Blog = () => {


    return (
        <div className="blog">
            <div className="blog-image-container">
                {/* <img src={require('../common/imag/CarouselImages/black leaf.png')} className="blog-images" /> */}
            </div>
            <div className="container">
                <div className="blog-card-slider-container">
                    <div className="blog-text-container">
                        <h2>Cashew Nut Special</h2>
                        <p>
                            Cashew is the common name of a tropical evergreen tree Anacardium occidentale, in the family Anacardiaceae.
                            It is native to South America and is the source of the cashew nut and the cashew apple, an accessory fruit.
                            Cashew is best adapted to seasonally dry tropical climates, with optimum growth occurring at temperatures from 63°F to 100°F and a relative humidity of 65–80%. Trees are drought tolerant,
                             but production is improved if sufficient soil moisture is provided (either rainfall or irrigation) during fruit set and development.
                        </p>
                    </div>
                    <div>
                        <div className="card-slider-title">
                            <h2>Food items.</h2>
                            <p>Cashews are low in sugar and rich in fiber.</p>
                        </div>
                        <Carousel responsive={responsive}>
                            <div className="card-container">
                                <div class="card" style={{ width: "17rem" }}>
                                <img src={require('../common/imag/cashew Nut pic/blog/cashew-wite-rise.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div class="card" style={{ width: "17rem" }}>
                                <img src={require('../common/imag/cashew Nut pic/blog/cashewSnacks.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div class="card" style={{ width: "17rem" }}>
                                    <img src={require('../common/imag/cashew Nut pic/blog/cashewpiriyani.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div class="card" style={{ width: "17rem" }}>
                                    <img src={require('../common/imag/cashew Nut pic/blog/cashewwithnonvege.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div class="card" style={{ width: "17rem" }}>
                                    <img src={require('../common/imag/cashew Nut pic/blog/istockphoto-171356441-2048x2048.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div class="card" style={{ width: "17rem" }}>
                                    <img src={require('../common/imag/cashew Nut pic/blog/istockphoto-2018722534-2048x2048.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div class="card" style={{ width: "17rem" }}>
                                    <img src={require('../common/imag/cashew Nut pic/blog/istockphoto-628748672-2048x2048.jpg')} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;