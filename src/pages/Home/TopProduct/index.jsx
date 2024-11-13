import React from "react";
import "./style.css"
import Thumb1 from "../../../assets/images/thumbnail/thumb1.jpg"
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
const TopProduct = (props) => {
    return (
        <>
            <div className="topSellingbox">
                <h3>{props.title}</h3>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src={Thumb1} alt="" className="w-100" />
                        </Link>

                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>Coffee Halloween - Bừng tỉnh như vừa gặp ác mộng</h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price text-g font-weight-bold">$15.99</span>
                            <span className="oldPrice">$20.00</span>
                        </div>

                    </div>
                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src={Thumb1} alt="" className="w-100" />
                        </Link>

                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>Coffee Halloween - Bừng tỉnh như vừa gặp ác mộng</h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price text-g font-weight-bold">$15.99</span>
                            <span className="oldPrice">$20.00</span>
                        </div>

                    </div>
                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                            <img src={Thumb1} alt="" className="w-100" />
                        </Link>

                    </div>
                    <div className="info px-3">
                        <Link to=""><h4>Coffee Halloween - Bừng tỉnh như vừa gặp ác mộng</h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price text-g font-weight-bold">$15.99</span>
                            <span className="oldPrice">$20.00</span>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}
export default TopProduct