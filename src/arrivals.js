import { Row, Col, Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Arrivals() {
    
    return (
        <>

            <div className="arrivals-heading p-5">
                <div className="row d-flex text-center">
                    <div className="col-12  ">
                        <span><b>New Arrivals</b></span>
                        <p>Visit our shop to see amazing creations from our designers.</p>
                    </div>
                </div>

            </div>


            <div className="item-section-2 ps-4 pe-4 ">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col className="col-auto ">
                        <div className="item-img-2">
                            <img src={require('./img/asset 2.jpeg')} alt="" className="img-fluid" />
                        </div>
                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#" >Simply Woollook Vintage Mustard</a></h6>
                                <span><b>$112.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Add to cart</Button>
                        </div>
                    </Col>
                    <Col className="col-auto ">
                        <div className="item-img-2">
                            <img src={require('./img/asset 4.jpeg')} alt="" className="img-fluid" />
                        </div>
                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#" >Armchair</a></h6>
                                <span><strike>$134.00</strike><b>$112.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Add to cart</Button>
                        </div>
                    </Col>
                    <Col className="col-auto d-none d-md-block">
                        <div className="item-img-2">
                            <img src={require('./img/asset 6.jpeg')} alt="" className="img-fluid" />

                        </div>
                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#" >Pebble Coffee Low</a></h6>
                                <span><strike>$125.00</strike><b>$97.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Select options</Button>

                        </div>
                    </Col>
                    <Col className="col-auto d-none d-md-block">
                        <div className="item-img-2">
                            <img src={require('./img/asset 8.jpeg')} alt="" className="img-fluid" />

                        </div>
                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#" >Anti Dust Sofa</a></h6>
                                <span><strike>$156.00</strike><b>$123.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Select options</Button>

                        </div>
                    </Col>

                </Row>
            </div>



        </>
    )
}
export default Arrivals