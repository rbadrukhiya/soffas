import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options1 = {
    responsive:{
        0:{
            items:1,
        },
        
        576:{
            items:2,
        },
        992:{
            items:3,
        }
    },
};

function Latestblog() {
    return (
        <>
            <div className="latestblog">
                <div className="row justify-content-center">
                    <div className="col-12 text-center"><div className="b-heading">
                        Latest Blog</div></div>
                    <div className="b-heading-content text-center"><p>Read about the latest modern furniture design notes on blog.</p></div>
                </div>
                <div className="row justify-content-between ">
                    <div className="col-4 d-none d-lg-block">
                        <div className="l-blog-1">
                            <div className="l-blog-img">
                                <img src={require('./img/asset 17.jpeg')} alt="" className='img-fluid' />
                            </div>
                            <div className="l-blog-content p-4  border border-1">
                                <div className="blog-comments ">
                                    <i class="fa-solid fa-comments me-2"></i>2 Comments <i class="fa-regular fa-bookmark ms-2 me-2"></i> Chairs , Furniture
                                </div>
                                <div className="blog-heading">Design Your Modern Home...</div>
                                <div className="blog-content"><p>Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales ...</p></div>
                                <div className="blog-button"><button>Read More <i class="fa-solid fa-angles-right"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-lg-block">
                        <div className="l-blog-2">
                            <div className="l-blog-img">
                                <img src={require('./img/asset 18.jpeg')} alt="" className='img-fluid' />
                            </div>
                            <div className="l-blog-content border p-4 border-1">
                                <div className="blog-comments ">
                                    <i class="fa-solid fa-comments me-2"></i>2 Comments
                                    <i class="fa-regular fa-bookmark ms-2 me-2"></i> Furniture
                                </div>
                                <div className="blog-heading">Why You Need To Choose...</div>
                                <div className="blog-content">
                                    <p>Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales ...</p>
                                </div>
                                <div className="blog-button">
                                    <button>Read More <i class="fa-solid fa-angles-right">
                                    </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-lg-block">
                        <div className="l-blog-3">
                            <div className="l-blog-img">
                                <img src={require('./img/asset 19.jpeg')} alt="" className='img-fluid' />
                            </div>
                            <div className="l-blog-content border border-1 p-4">
                                <div className="blog-comments ">
                                    <i class="fa-solid fa-comments me-2"></i>2 Comments
                                    <i class="fa-regular fa-bookmark ms-2 me-2"></i> Living Room
                                </div>
                                <div className="blog-heading">Brightening Up Your...</div>
                                <div className="blog-content">
                                    <p>Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales ...</p>
                                </div>
                                <div className="blog-button">
                                    <button>Read More <i class="fa-solid fa-angles-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel className='owl-theme d-lg-none'{...options1} loop margin={10} dots={false} autoplay autoplayTimeout={1000}>
                        <div class='item'>
                            <div className="col-auto">
                                <div className="l-blog-1">
                                    <div className="l-blog-img">
                                        <img src={require('./img/asset 17.jpeg')} alt="" className='img-fluid' />
                                    </div>
                                    <div className="l-blog-content p-4  border border-1">
                                        <div className="blog-comments ">
                                            <i class="fa-solid fa-comments me-2"></i>2 Comments <i class="fa-regular fa-bookmark ms-2 me-2"></i> Chairs , Furniture
                                        </div>
                                        <div className="blog-heading">Design Your Modern Home...</div>
                                        <div className="blog-content"><p>Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales ...</p></div>
                                        <div className="blog-button"><button>Read More <i class="fa-solid fa-angles-right"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="col-auto">
                                <div className="l-blog-2">
                                    <div className="l-blog-img">
                                        <img src={require('./img/asset 18.jpeg')} alt="" className='img-fluid' />
                                    </div>
                                    <div className="l-blog-content border p-4 border-1">
                                        <div className="blog-comments ">
                                            <i class="fa-solid fa-comments me-2"></i>2 Comments
                                            <i class="fa-regular fa-bookmark ms-2 me-2"></i> Furniture
                                        </div>
                                        <div className="blog-heading">Why You Need To Choose...</div>
                                        <div className="blog-content">
                                            <p>Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales ...</p>
                                        </div>
                                        <div className="blog-button">
                                            <button>Read More <i class="fa-solid fa-angles-right">
                                            </i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="col-auto ">
                                <div className="l-blog-3">
                                    <div className="l-blog-img">
                                        <img src={require('./img/asset 19.jpeg')} alt="" className='img-fluid' />
                                    </div>
                                    <div className="l-blog-content border border-1 p-4">
                                        <div className="blog-comments ">
                                            <i class="fa-solid fa-comments me-2"></i>2 Comments
                                            <i class="fa-regular fa-bookmark ms-2 me-2"></i> Living Room
                                        </div>
                                        <div className="blog-heading">Brightening Up Your Home ...</div>
                                        <div className="blog-content">
                                            <p>Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales ...</p>
                                        </div>
                                        <div className="blog-button">
                                            <button>Read More <i class="fa-solid fa-angles-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default Latestblog