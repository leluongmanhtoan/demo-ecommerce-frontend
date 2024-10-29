import React, { useState } from "react";
import "./style.css"
import Slider from 'react-slick';
import Cake from '../../assets/images/catslider/cake.png'
import Milk from '../../assets/images/catslider/milk.png'
import Coffee from '../../assets/images/catslider/coffee.png'
import Tea from '../../assets/images/catslider/green-tea.png'
import Fruit from '../../assets/images/catslider/basket.png'
const CatSlider = () => {
    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
    ])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };
    return (
        <>
            <div className="catSliderSelection">
                <div className="container-fluid">
                    <h2 className="hd">Featured Categories</h2>
                    <Slider {...settings} className='cat_slider_main'>
                        {
                            itemBg.length != 0 && itemBg.map((item, index) => {
                                return (
                                    <div className="item">
                                        <div className="info" style={{background:item}}>
                                            <img src={Cake} alt="" style={{ width: '64px', height: '64px' }} />
                                            <h5>Cake</h5>
                                            <p>26 items</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="item">
                            <div className="info">
                                <img src={Tea} alt="" style={{ width: '64px', height: '64px' }} />
                                <h5>Tea</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Milk} alt="" style={{ width: '64px', height: '64px' }} />
                                <h5>Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Coffee} alt="" style={{ width: '64px', height: '64px' }} />
                                <h5>Coffee</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="info">
                                <img src={Fruit} alt="" style={{ width: '64px', height: '64px' }} />
                                <h5>Fruit</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CatSlider