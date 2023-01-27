import { Button, Col, Row } from "react-bootstrap"

function Header() {
    return (
        <>

            <Row className="d-flex justify-content-between align-items-center m-0  ps-4">
                <Col className="col-auto d-lg-none">
                    <div className="toggle  pt-4">
                        <i class="fa-solid fa-bars"></i></div>
                </Col>
                <Col className="col-auto">
                    <div className="logo">
                        <img src={require('./img/asset 0.png')} className='img-fluid  ' />
                    </div>
                </Col>
                <Col className="col-auto d-none d-lg-block">
                    <div className="menu">
                        <ul className='main_menu d-flex list-unstyled m-0 '>
                            <li className=" color  pt-4"><a href="#">Home <i class="fa-solid fa-angle-down me-4"></i></a>
                                <ul className="sub_menu list-unstyled">
                                    <li><a href="#">Home 1</a></li>
                                    <li><a href="#">Home 2</a></li>
                                    <li><a href="#">Home 3</a></li>
                                    <li><a href="#">Home 4</a></li>
                                    <li><a href="#" className="color">Home 5</a></li>
                                    <li><a href="#">Home 6</a></li>
                                </ul>
                            </li>
                            <li className=" pt-4"><a href="#" >Shop <i class="fa-solid fa-angle-down me-4"></i></a>
                                <div className="mega_menu-1">
                                    <div className="mega_div">
                                        <div className="mega_items">
                                            <h6>SHOP LAYOUTS</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">shop left sidebar</a></li>
                                                <li><a href="#">shop right Sidebar</a></li>
                                                <li><a href="#">shop canvas filter</a></li>
                                                <li><a href="#">shop full width</a></li>
                                                <li><a href="#">shop top categories</a></li>
                                                <li><a href="#">shop top slider</a></li>
                                                <li><a href="#">shop top best seller</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega_items ms-0 ">
                                            <h6 className="mega-m">CATALOG STYLES</h6>
                                            <ul className="list-unstyled mega-m">
                                                <li><a href="#">shop pagination</a></li>
                                                <li><a href="#">shop loadmore</a></li>
                                                <li><a href="#">shop infinity</a></li>
                                                <li><a href="#">hot deals</a></li>
                                            </ul>
                                            <h6 className="mt-4 mega-m">SHOP PAGES</h6>
                                            <ul className="list-unstyled mega-m">
                                                <li><a href="#">order tracking</a></li>
                                                <li><a href="#">whishlist</a></li>
                                                <li><a href="#">my account</a></li>
                                                <li><a href="#">checkout</a></li>
                                                <li><a href="#">cart</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega_items ">
                                            <div className="mega-items-img">
                                                <img src={require('./img/asset 47.jpeg')} alt="" />
                                                <div className="mega-items-content">
                                                    <p> UP TO 35% OFF</p>
                                                    <span>Home Decor </span><br></br>
                                                    <span>& Furniture</span><br></br>
                                                    <button>Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="pt-4" ><a href="#" >Product <i class="fa-solid fa-angle-down me-4"></i></a>
                                <div className="mega_menu">
                                    <div className="mega_div">
                                        <div className="mega_items">
                                            <h6>PRODUCT TYPES</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Grouped Product</a></li>
                                                <li><a href="#">Variable Product</a></li>
                                                <li><a href="#">External Product</a></li>
                                                <li><a href="#">Countdown Product</a></li>
                                                <li><a href="#">Simple Product</a></li>
                                                <li><a href="#">Popup Video</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega_items">
                                            <h6>PRODUCT STYLE</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Left Sidebar</a></li>
                                                <li><a href="#">Right Sidebar</a></li>
                                                <li><a href="#">Fullwidth</a></li>
                                                <li><a href="#">Sticky Images</a></li>
                                                <li><a href="#">Sticky Images 02</a></li>
                                                <li><a href="#">Sticky Images 03</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega_items">
                                            <h6>PRODUCT STYLE</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Sticky Images 04</a></li>
                                                <li><a href="#">Thumbnails Bottom</a></li>
                                                <li><a href="#">Thumbnails Left</a></li>
                                                <li><a href="#">Accordion</a></li>
                                                <li><a href="#">Carousel</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className=" pt-4"><a href="#" >Blog <i class="fa-solid fa-angle-down me-4"></i></a>
                                <ul className="sub_menu list-unstyled">
                                    <li><a href="#">Blog - Grid Sidebar</a></li>
                                    <li><a href="#">Blog - GridFull</a></li>
                                    <li><a href="#">Blog - List 01</a></li>
                                    <li><a href="#">Blog - List 02</a></li>
                                    <li><a href="#">Detail Post 01</a></li>
                                    <li><a href="#">Detail Post 02</a></li>
                                </ul>
                            </li>
                            <li className=" pt-4"><a href="#">Pages <i class="fa-solid fa-angle-down me-4"></i></a>
                                <ul className="sub_menu list-unstyled">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Error</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div></Col>
                <Col className="col-auto d-none d-lg-block"><div className="h-icon">
                    <i class="fa-solid fa-magnifying-glass me-3 h-over"></i>
                    <i class="fa-solid fa-lock me-3 h-over"></i>
                    <i class="fa-regular fa-heart me-3 h-over "></i>
                    <i class="fa-solid fa-briefcase h-over"></i>
                </div>
                </Col>
                <Col className="col-auto d-flex d-lg-none align-items-center "><div className="h-icon">
                    <i class="fa-solid fa-briefcase me-4 "></i>

                </div>

                </Col>
            </Row>

        </>
    )
}
export default Header