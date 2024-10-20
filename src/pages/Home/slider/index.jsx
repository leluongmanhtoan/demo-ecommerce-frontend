import React from 'react';
import Slider from 'react-slick';
import './index.css';
import Slider1 from '../../../assets/images/slider/slideBanner1.jpg'
import Slider2 from '../../../assets/images/slider/slideBanner2.jpg'
const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='homeSlider'>
            <div className='container-fluid'>
                <Slider {...settings} className='home_slider_main'>
                    <div className='slider-item'>
                        <img src={Slider1} alt="" className='w-100' />
                    </div>
                    <div className='slider-item'>
                        <img src={Slider2} alt="" className='w-100' />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default HomeSlider;