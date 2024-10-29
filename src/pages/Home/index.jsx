import React from "react";
import HomeSlider from "./slider/index";
import CatSlider from "../../components/catSlider";
import Banner from "../../components/banner";
import "./style.css"
import Product from "../../components/product";
const Home = ()=>{
    return(
        <>
        <HomeSlider/>
        <CatSlider/>
        <Banner/>
        <section className="homeProducts">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <h2 className="hd mb-0 mt-0">Popular Products</h2>
                    <ul className="list list-inline ml-auto filterTab">
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
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    <div className="item">
                        <Product/>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
        
    )
}
export default Home;