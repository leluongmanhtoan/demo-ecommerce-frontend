import React from "react";
import Banner1 from "../../assets/images/banner/banner1.jpg"
import Banner2 from "../../assets/images/banner/banner2.jpg"
import Banner3 from "../../assets/images/banner/banner3.jpg"
import "./style.css"
const Banner = ()=>{
    return (
        <div className="bannerSelection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box">
                            <img src={Banner1} alt="" className="w-100 transition"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img src={Banner2} alt="" className="w-100 transition"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img src={Banner3} alt="" className="w-100 transition"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;