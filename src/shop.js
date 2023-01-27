import { Row, Col, Button } from 'react-bootstrap'
function Shop() {
    return (
        <>

            <div className="section-3">
                <Row className="d-flex justify-content-between" xxl={2} xl={2} md={2} sm={1} lg={2} xs={1}>
                    <Col className="col-auto">
                        <div className="section-3-box-1">
                            <div className="section-3-box-1-img text-center">
                                <img src={require('./img/asset 31.jpeg')} className='img-fluid' alt="" />
                                <div className="section-3-box-1-content">
                                    <p><b>NEW IN</b></p>
                                    <span><b>Living Room</b></span><br></br>
                                    <Button className='btn-shops'>Shop Now</Button>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col className="col-auto"><div className="section-3-box-1 ">
                        <div className="section-3-box-1-img text-center">
                            <img src={require('./img/asset 32.jpeg')} className='img-fluid' alt="" />
                            <div className="section-3-box-1-content">
                                <p><b>TRENDING</b></p>
                                <span><b>Bedroom</b></span><br></br>
                                <Button className='btn-shops'>Shop Now</Button>

                            </div>

                        </div>
                    </div></Col>
                </Row>



                <Row>
                    <Col className="col-12 mt-4">
                        <div className="section-3-box-2">
                            <div className="section-3-box-2-img">
                                <img src={require('./img/asset 33.jpeg')} className='img-fluid' alt="" />
                                <div className="section-3-content text-center">
                                    <span className="section-3-content-heading ">HOLIDAY OFFERS</span><br></br>
                                    <span className="se-f"><b>Sale 50% Off</b></span><br></br>
                                    <Button className="btn-shop">Shop Now</Button>
                                    

                                </div>
                            </div>

                        </div>
                    </Col>

                </Row>
            </div>
        </>
    )
}
export default Shop