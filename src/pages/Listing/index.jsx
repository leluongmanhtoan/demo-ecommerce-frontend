import React, {useState} from "react";
import "./style.css"
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Product from "../../components/product";
import Button from '@mui/material/Button';
import '../../components/header/header.css';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { Padding } from "@mui/icons-material";
const Listing = () => {
    const [isOpenDropDown, setOpenDropDown] = useState(false);
    const [isOpenDropDown2, setOpenDropDown2] = useState(false);
    return (
        <section className="listingPage">
            <div className="container-fluid">
                <div className="breadcrumb flex-column">
                    <h1>Snack</h1>
                    <ul className="list list-inline mb-0">
                        <li className="list-inline-item">
                            <Link to={''}>Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to={''}>Shop</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to={''}>Snack</Link>
                        </li>
                    </ul>
                </div>
                <div className="listingData">
                    <div className="row">
                        <div className="col-md-3 sidebarWrapper">
                            <Sidebar />
                        </div>
                        <div className="col-md-9 rightContent homeProducts pt-0">
                            <div className="topStrip d-flex align-items-center">
                                <p className="mb-0">We found <span className="text-success">27</span> items for you!</p>
                                <div className="ml-auto d-flex align-items-center">
                                    <div className="tab_ position-relative">
                                        <Button className="btn_" onClick={() => setOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon/> Show: 50</Button>
                                        {
                                            isOpenDropDown !== false &&
                                            <ul className='dropdownMenu'>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown(false)}>50</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown(false)}>100</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown(false)}>150</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown(false)}>500</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown(false)}>1000</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown(false)}>1500</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown(false)}>All</Button></li>
                                            </ul>
                                        }
                                    </div>
                                    <div className="tab_ ml-3 position-relative">
                                        <Button className="btn_" onClick={() => setOpenDropDown2(!isOpenDropDown2)}><FilterListOutlinedIcon/> Sort by: Featured</Button>
                                        {
                                            isOpenDropDown2 !== false &&
                                            <ul className='dropdownMenu'>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown2(false)}>Featured</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown2(false)}>Price: Low to High</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown2(false)}>Price: High to Low</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown2(false)}>Release Date</Button></li>
                                                <li><Button className='align-items-center'onClick={() => setOpenDropDown2(false)}>Avg. Rating</Button></li>
                                            </ul>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="productRow pl-4 pr-3">
                                <div className="item">
                                    <Product tag="hot"/>
                                </div>
                                <div className="item">
                                    <Product tag="hot"/>
                                </div>
                                <div className="item">
                                    <Product tag="new"/>
                                </div>
                                <div className="item">
                                    <Product tag="best"/>
                                </div>
                                <div className="item">
                                    <Product tag="best"/>
                                </div>
                                <div className="item">
                                    <Product tag="best"/>
                                </div>
                                <div className="item">
                                    <Product tag="hot"/>
                                </div>
                                <div className="item">
                                    <Product tag="hot"/>
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
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Listing