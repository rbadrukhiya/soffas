function Footer() {
    return (
        <>
            <div className="f-s-1 d-none d-lg-block">
                <div className="f-bg-1">
                    <div className="row justify-content-between align-items-center m-0">
                        <div className="col-auto">
                            <div className="f-logo">
                                <img src={require('./img/asset 25.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-auto ">
                            <div className="f-bg-1-icon d-flex">
                                <div className="f-icon-1">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className="f-icon-2">
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                                <div className="f-icon-3">
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
             <div className="f-s-2 d-none d-lg-block">
                <div className="f-bg-2">
                    <div className="row  justify-content-between row-cols-xxl-4 row-cols-xl-4 row-cols-lg-2  ">
                        <div className="col-auto">
                            <div className="f-s2-1">
                                <div className="f-2-heading">
                           <p>   <b>  About Us </b></p>
                                </div>
                                <div className="f-s2-1-content mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetuer    
                                         adipiscing elit, sed diam nonummy nibh</p>
                                </div>
                                <div className="row ">
                                    <div className="col-auto mt-3"><div className="f-s2-1-icon">
                                    <i class="fa-solid fa-headphones"></i></div></div>
                                    <div className="col-auto f-s2-1-content-icon">
                                        <p>CALL US 24/7</p>
                                        <b>(1900) - 5000</b>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-auto  ">
                            <div className="f-s2-2">
                                <div className="f-2-heading">
                             <p>  <b> Store Location</b></p>
                                </div>
                                <div className="f-s2-2-content">
                                <p className='mt-3'>Office: 12 Fake Street,New York</p>
                                <p>Mail: support.goaltheme.com</p>
                                <p className='mt-4'>Monday – Friday: 8am – 4pm</p>
                                <p>Saturday: 9am – 5pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="f-s2-3">
                                <div className="f-2-heading">
                             <p> <b>  Useful Links</b></p>
                              
                                </div>
                                <ul className='list-unstyled mt-3'>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="f-s2-4">
                                <div className="f-2-heading">
                           <p>  <b>   Newsletter</b></p>
                                </div>
                                <div className="f-s2-4-content mt-3">
                                    <p>Sign up and get cutting-edge marketing insights delivered to your inbox</p>
                                    <input type="text" className='mt-3'  placeholder='Enter Your Email'></input> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* copyright  section start */}
             <div className="copyright d-none d-lg-block">
                <hr />
                <div className="row m-0">
                    <div className="col text-center ">
                <p>Copyright © 2022 Sofass – All Rights Reserved.</p>
                </div>
                </div>
            </div> 

        </>

    )
}
export default Footer