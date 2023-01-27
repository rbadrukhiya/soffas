import { Col, Container, Row } from "react-bootstrap"

function Bottom() {

    return (
        <>
        <div className="bottom-menu p-3 d-lg-none">
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col className="col-auto">
                        <div className="bottom-item-1  ">
                      
                        <ul className="list-unstyled">
                            <li>  <i class="fa-solid fa-house  ms-3"></i></li>
                            <li>HOME</li>
                        </ul>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="bottom-item-2 ">
                       
                        <ul className="list-unstyled">
                            <li> <i class="fa-solid fa-magnifying-glass ms-3"></i></li>
                            <li>SEARCH</li>
                        </ul>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="bottom-item-3 ">
                        <ul className="list-unstyled">
                            <li>
                        <i class="fa-solid fa-bag-shopping ms-2"></i>

                            </li>
                            <li>CART</li>
                        </ul>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="bottom-item-4 ">
                        <ul className="list-unstyled">
                            <li>
                        <i class="fa-solid fa-user ms-4"></i>
                            </li>
                            <li>MY ACCOUNT</li>
                        </ul>
                        </div>
                    </Col>
                </Row>
                {/* <Row className="d-flex justify-content-center align-items-center">
                    <Col className="col-auto">
                        <div className="bottom-item-1">
                        HOME
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="bottom-item-2">
                        SEARCH
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="bottom-item-3">
                        CART
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="bottom-item-4">
                        MY ACCOUNT
                        </div>
                    </Col>
                </Row> */}
            </Container>
            </div>
        </>
    )
}
export default Bottom