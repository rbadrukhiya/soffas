// import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options1 = {
    responsive:{
        0:{
            items:2,
        },
        
        576:{
            items:3,
        },
        992:{
            items:3,
        }
    },
};

function Logo() {
    return (
        <>
            <div className="logo-last">
                <div className="row d-flex justify-content-center  align-items-center ">
                    <div className="col-auto p-0 d-none d-lg-block">
                        <div className="logo-1">
                            <div className="logo-box ">
                                <img src={require('./img/asset 20.jpeg')} alt="" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto p-0 d-none d-lg-block">
                        <div className="logo-1">
                            <div className="logo-box">
                                <img src={require('./img/asset 21.jpeg')} alt="" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto p-0 d-none d-lg-block">
                        <div className="logo-1">
                            <div className="logo-box">
                                <img src={require('./img/asset 22.jpeg')} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="col-auto p-0 d-none d-lg-block">
                        <div className="logo-1">
                            <div className="logo-box">
                                <img src={require('./img/asset 23.jpeg')} alt="" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto p-0 d-none d-lg-block">
                        <div className="logo-1">
                            <div className="logo-box">
                                <img src={require('./img/asset 24.jpeg')} alt="" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto  d-lg-none slider-logo">
                        <OwlCarousel className='owl-theme' {...options1} dots={false} loop margin={10} items={3} autoplay autoplayTimeout={1000}>
                            <div class='item'>
                                <div className="logo-1">
                                    <div className="logo-box ">
                                        <img src={require('./img/asset 20.jpeg')} alt="" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="logo-1">
                                    <div className="logo-box">
                                        <img src={require('./img/asset 21.jpeg')} alt=""className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="logo-1">
                                    <div className="logo-box">
                                        <img src={require('./img/asset 22.jpeg')} alt="" className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="logo-1">
                                    <div className="logo-box">
                                        <img src={require('./img/asset 23.jpeg')} alt=""className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="logo-1">
                                    <div className="logo-box">
                                        <img src={require('./img/asset 24.jpeg')} alt="" className='img-fluid'/>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Logo