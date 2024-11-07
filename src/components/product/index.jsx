import React from "react";
import "./style.css"
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';
const Product = (props) => {
    return (
        <div className="productThumb">
            {
                props.tag !==null && props.tag !==undefined &&  <span className={`badge ${props.tag}`}>{`${props.tag}`}</span>
            }
            <Link>
                <div className="imgWrapper">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="" className="w-100" />
                    <div className="overlay transition">
                        <ul className="list list-inline mb-0">
                            <li className="list-inline-item">
                                <Tooltip classes={{tooltip: 'MuiTooltip-tooltip custom-tooltip',arrow: 'MuiTooltip-arrow custom-tooltip'}} title="Quick View" placement="top"  arrow>
                                    <a href="" className="cursor">
                                        <RemoveRedEyeOutlinedIcon />
                                    </a>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>

            </Link>

            <div className="info">
                <span className="d-block catName">Snack</span>
                <h4 className="title"><Link>Sữa giảm cân cấp tốc, uống vào ỉa 3 ngày 3 đêm</Link></h4>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <span className="brand d-block">Cung cấp bởi: <Link className="text-g">MrTonTon</Link></span>
                <div className="d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">$28.85</span>
                        <span className="oldPrice">$48.85</span>
                    </div>
                    <Button className="ml-auto transition"><AddShoppingCartOutlinedIcon /> Add</Button>
                </div>
            </div>
        </div>
    )
}
export default Product