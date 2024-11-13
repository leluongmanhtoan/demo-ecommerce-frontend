import React from "react";
import "./footer.css"
import Icon1 from "../../assets/images/footer/price-tag.png"
import Icon2 from "../../assets/images/footer/fast-delivery.png"
import Icon3 from "../../assets/images/footer/hot-deal.png"
import Icon4 from "../../assets/images/footer/assortment.png"
import Icon5 from "../../assets/images/footer/return.png"
import Logo from '../../assets/images/LOGO.svg';
import { Link } from "react-router-dom";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="footerBoxes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon1} alt="" /></span>
                                <div className="info">
                                    <h4>Best Price and Offer</h4>
                                    <p>Order $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon2} alt="" /></span>
                                <div className="info">
                                    <h4>Free Delivery</h4>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon3} alt="" /></span>
                                <div className="info">
                                    <h4>Great Daily Deal</h4>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon4} alt="" /></span>
                                <div className="info">
                                    <h4>Wide Assortment</h4>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span><img src={Icon5} alt="" /></span>
                                <div className="info">
                                    <h4>Easy return</h4>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 part1">
                            <Link to="/"><img src={Logo} alt="" className="w-25" /></Link>
                            <br /><br />
                            <p>Đây là sản phẩm demo, deploy trên Nano Jetson tại nhà</p>
                            <br />
                            <p><HomeOutlinedIcon /> <strong>Địa chỉ:</strong> 49Đ/11 Hoài Thanh, phường 14, quận 8, TP.HCM </p>
                            <p><PhoneIphoneOutlinedIcon /> <strong>Điện thoại:</strong> (+84) 96-2304-092</p>
                            <p><EmailOutlinedIcon /> <strong>Email:</strong> leluongmanhtoan@gmail.com</p>
                        </div>
                        <div className="col-md-9 part2">
                            <div className="row">
                                <div className="col strongLink">
                                    <h3>Company</h3>
                                    <ul className="footer-list mb-sm-0 mb-md-0">
                                        <li><Link to="#">About Us</Link></li>
                                        <li><Link to="#">Delivery Information</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Terms &amp; Conditions</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h3>Account</h3>
                                    <ul className="footer-list mb-sm-0 mb-md-0">
                                        <li><Link to="#">Sign In</Link></li>
                                        <li><Link to="#">View Cart</Link></li>
                                        <li><Link to="#">Help Ticket</Link></li>
                                        <li><Link to="#">Shipping Details</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h3>Corporate</h3>
                                    <ul className="footer-list mb-sm-0 mb-md-0">
                                        <li><Link to="#">Become a Vendor</Link></li>
                                        <li><Link to="#">Affiliate Program</Link></li>
                                        <li><Link to="#">Farm Business</Link></li>
                                        <li><Link to="#">Farm Careers</Link></li>
                                        <li><Link to="#">Our Suppliers</Link></li>
                                        <li><Link to="#">Accessibility</Link></li>
                                        <li><Link to="#">Promotions</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h3>Popular</h3>
                                    <ul className="footer-list mb-sm-0 mb-md-0">
                                        <li><Link to="#">Milk &amp; Flavoured Milk</Link></li>
                                        <li><Link to="#">Butter &amp; Margarine</Link></li>
                                        <li><Link to="#">Eggs &amp; Substitutes</Link></li>
                                        <li><Link to="#">Marmalades</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
<hr />
                    <div className="row lastStrip">
                        <div className="col-md-3">
                            <p>2024, Demo Ecommerce Codelo - Le Luong Manh Toan</p>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="m-auto d-flex align-items-center">
                                <div className="phNo d-flex align-items-center">
                                    <span><PhoneInTalkOutlinedIcon/></span>
                                    <div className="info ml-3">
                                        <h4 className="text-g mb-0">096-2304-092</h4>
                                        <p className="mb-0">Hỗ trợ trực tiếp 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 part3">
                            <div className="d-flex align-items-center">
                                <h5>Follow</h5>
                                <ul className="list list-inline">
                                    <li className="list-inline-item">
                                        <Link to={''}><FacebookOutlinedIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><GitHubIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><YouTubeIcon/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer