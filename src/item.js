import { Button, Col, Container, Row } from "react-bootstrap"

function Items() {
    return (
        <>
            <div className="item  d-none d-md-block">
                <Container >
                    <Row className="d-flex justify-content-between align-items-center  ">
                        <Col className='col-auto'>
                            <div className="item-1">
                                <div className="i-icon">
                                    <i class="fa-solid fa-couch"></i>
                                </div>
                                <div className="i-content text-center mt-2">Furniture</div>
                            </div>
                        </Col>
                        <Col className='col-auto'>
                            <div className="item-2">
                                <div className="i-icon">
                                    <i class="fa-solid fa-couch"></i>
                                </div>
                                <div className="i-content text-center mt-2">Living Room</div>

                            </div>
                        </Col>
                        <Col className='col-auto'>
                            <div className="item-3">

                                <div className="i-icon">
                                    <i class="fa-solid fa-bed"></i>
                                </div>
                                <div className="i-content text-center mt-2">Bedroom</div>
                            </div>
                        </Col>
                        <Col className='col-auto text-center'>
                            <div className="item-4">

                                <div className="i-icon">
                                    <i class="fa-solid fa-bath"></i>
                                </div>
                                <div className="i-content text-center mt-2">Bathroom</div>
                            </div>
                        </Col>
                        <Col className='col-auto text-center'>
                            <div className="item-5">

                                <div className="i-icon">
                                    <i class="fa-solid fa-utensils"></i>
                                </div>
                                <div className="i-content text-center mt-2">Dining Room</div>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </div>




 
            <div className="item-section-2 pt-5 ps-4 pe-4">
                <Row className="d-flex justify-content-between align-items-center" xs={2} sm={2} md={3} lg={4} xl={4} xxl={4}>
                    <Col className="col-auto ">
                        <div className="item-img-2">
                            <img src={require('./img/asset 2.jpeg')} alt="" className="img-fluid img-1" />
                        

                        </div>
                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#" >Simply Woollook Vintage Mustard</a></h6>
                                <span><b>$112.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Add to cart</Button>
                        </div>
                    </Col>
                    <Col className="col-auto d-none d-sm-block">
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
                    <Col className="col-auto d-none d-sm-block">
                        <div className="item-img-2">
                            <img src={require('./img/asset 9.jpeg')} alt="" className="img-fluid" />

                        </div>
                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#">Variable product</a></h6>
                                <span><strike>$123.00</strike><b>$99.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Select options</Button>
                        </div>
                    </Col>
                    <Col className="col-auto d-none d-sm-block">
                        <div className="item-img-2">
                            <img src={require('./img/asset 1.jpeg')} alt="" className="img-fluid" />

                        </div>

                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#" >Versatile Sofa Beds</a></h6>
                                <span><strike>$167.00</strike><b>$155.00</b></span><br></br>
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
                    <Col className="col-auto d-none d-sm-block">
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
                    <Col className="col-auto d-none d-sm-block">
                        <div className="item-img-2">
                            <img src={require('./img/asset 11.jpeg')} alt="" className="img-fluid" />

                        </div>
                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#">Grouped product</a></h6>
                                <span><b>$112.00 - $158.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Select options</Button>
                        </div>
                    </Col>
                    <Col className="col-auto d-none d-sm-block">
                        <div className="item-img-2">
                            <img src={require('./img/asset 5.jpeg')} alt="" className="img-fluid" />

                        </div>

                        <div className="item-content text-center mt-3">
                            <div className="item-title">
                                <h6><a href="#" >Sling Coffee Tabele Oak Angle Front</a></h6>
                                <span><b>$120.00</b></span><br></br>
                            </div>
                            <Button className="btn mt-4 mb-5">Add to cart</Button>
                        </div>
                    </Col>
                </Row>
            </div>














        </>
    )
}
export default Items