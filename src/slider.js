import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button } from 'react-bootstrap';

function Slider() {
    return (
        <>
            <OwlCarousel className='owl-theme' loop dots={false} items={1} autoplay autoplayTimeout='4000'  >
            
               
                <div class='item text-center'>
                    <h4></h4>
                    <img src={require('./img/sofa1.jpg')} className='img-fluid' alt="" />
                    <div className="slider-f-content  ">
                        <p>TOP SELLERS</p>
                        <span>Modern Office </span><br></br>
                        <span>Collection</span><br></br>
                        <Button className='slider-button'>Disover Now</Button>
                    </div>
                </div>
                <div class='item text-center '>
                    <h4></h4>
                    <img src={require('./img/sofa2.jpg')} className='img-fluid' alt="" />
                    <div className="slider-f-content">
                        <p>TOP SELLERS</p>
                        <span>Modern Office </span><br></br>
                        <span>Collection</span><br></br>
                        <Button className='slider-button'>Disover Now</Button>
                    </div>
                </div>

            </OwlCarousel>
        </>
    )
}
export default Slider