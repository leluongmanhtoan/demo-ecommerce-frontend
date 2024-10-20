import React from "react";
import './nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { Link } from "react-router-dom";
import Banner from '../../../assets/images/sale2.jpg';
const Nav = () => {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className="row position-relative">
                    <div className='col-sm-2 part1 d-flex align-items-center'>
                        <Button className="bg-g text-white catTab">
                            <GridViewOutlinedIcon />&nbsp;Browser All Catalogies<KeyboardArrowDownIcon /></Button>
                    </div>
                    <div className="col-sm-8 part2 position-static">
                        <nav>
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button><Link>Home</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>About</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Vendor</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Contact</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Pages</Link><KeyboardArrowDownIcon /></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to={"/About"}>About Us</Link></Button></li>
                                            <li><Button><Link to={"/Contact"}>Contact</Link></Button></li>
                                            <li><Button><Link to={"/"}>My Account</Link></Button></li>
                                            <li><Button><Link to={"/"}>Support center</Link></Button></li>
                                            <li><Button><Link to={"/"}>Term and Privacy Policy</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item position-static">
                                    <Button><Link>Mega Menu</Link><KeyboardArrowDownIcon /></Button>
                                    <div className='dropdown_menu mega_menu w-100'>
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-g">Fruit & Vegetables</h4>
                                                <ul className="mt-4 mb-0">
                                                    <li><Link>Meat and Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs and Seasonings</Link></li>
                                                    <li><Link>Cuts and Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits and Veggies</Link></li>
                                                    <li><Link>Packaged Proceduce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Breakfast & Dairy</h4>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Fruit and Vegetables</h4>
                                            </div>
                                            <div className="col">
                                                <img src={Banner} alt="banner" className="w-100" style={{borderRadius:'20px'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="col-sm-2 part3 d-flex align-items-center">
                        <div className="phNo d-flex align-items-center ml-auto">
                            <span><SupportAgentOutlinedIcon /></span>
                            <div className="info ml-3">
                                <h4 className="text-g">096-2304-092</h4>
                                <p className="mb-0">24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav