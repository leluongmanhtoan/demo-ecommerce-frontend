import React from "react";
import HomeSlider from "./slider/index";
import CatSlider from "../../components/catSlider";
import Banner from "../../components/banner";
import Banner4 from '../../assets/images/banner/banner4.jpg'
import "./style.css"
import Product from "../../components/product";
import TopProduct from "./TopProduct";
import Slider from 'react-slick';
import NewsLetterImg from "../../assets/images/banner/deliveryman.png";
import NewsLetter from "../../components/newsletter";
import Footer from "../../components/footer/footer";
const Home = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <>
            <HomeSlider />
            <CatSlider />
            <Banner />
            <section className="homeProducts">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd mb-0 mt-0">Popular Products</h2>
                        <ul className="list list-inline ml-auto filterTab mb-0">
                            <li className="list-inline-item">
                                <a href="" className="cursor">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Milk and Dairies</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Coffees and Teas</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Pet Foods</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Meats</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Vegetables</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Fruits</a>
                            </li>

                        </ul>
                    </div>
                    <div className="productRow">
                        <div className="item">
                            <Product tag='sale' />
                        </div>
                        <div className="item">
                            <Product tag='hot' />
                        </div>
                        <div className="item">
                            <Product tag='new' />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>

                    </div>
                </div>
            </section>


            <section className="homeProducts homeProductsRow2 pt-0">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
                        <ul className="list list-inline ml-auto filterTab mb-0">
                            <li className="list-inline-item">
                                <a href="" className="cursor">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Milk and Dairies</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="" className="cursor">Coffees and Teas</a>
                            </li>

                        </ul>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3 pr-5">
                            <img src={Banner4} alt="" className="w-100" />
                        </div>
                        <div className="col-md-9">
                            <Slider {...settings} className='prodSlider'>
                                <div className="item">
                                    <Product tag='sale' />
                                </div>
                                <div className="item">
                                    <Product tag='hot' />
                                </div>
                                <div className="item">
                                    <Product tag='new' />
                                </div>
                                <div className="item">
                                    <Product tag='best' />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className='topProductSection'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <TopProduct title="Top Selling" />
                        </div>
                        <div className="col">
                            <TopProduct title="Trending Products" />
                        </div>
                        <div className="col">
                            <TopProduct title="Recently Added" />
                        </div>
                        <div className="col">
                            <TopProduct title="Top Rated" />
                        </div>
                    </div>
                    <br /><br />
                </div>
            </section>

            <section className="newsLetterSection">
                <div className="container-fluid">
                    <div className="box d-flex align-items-center">
                        <div className="img">
                            <img src={NewsLetterImg} alt="" className="w-100" />
                        </div>
                        <div className="info">
                            <h2>Đặt hàng ngay</h2>
                            <p>Tháng sau sẽ tới</p>
                            <br /><br />
                            <NewsLetter/>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>

    )
}
export default Home;