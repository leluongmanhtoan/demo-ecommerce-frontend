import React, { useState } from 'react';
import '../header/header.css';
import '../../App.css'
import Logo from '../../assets/images/LOGO.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button from '@mui/material/Button';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from '@mui/material';
import Nav from './nav/nav';


const Header = () => {
    const [categories, setCategories] = useState([
        'Milks and Dairies',
        'Wines & Drinks',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast Food',
        'Baking Material',
        'Vegetables',
        'Fresh Fruit'
    ]);

    const [isOpenDropDown, setOpenDropDown] = useState(false);
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-1 d-flex justify-content-center align-items-center'>
                            <img src={Logo} alt="codelologo" style={{ width: '300px', height: '60px' }} />
                        </div>
                        {/*headerSearch start here*/}
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                                <Select data={categories} placeholder={'All Categories'} icon={false} />
                                <div className='search'>
                                    <input type='text' placeholder='Search for items...' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>
                            </div>
                        </div>
                        {/*headerSearch start here*/}

                        <div className='col-sm-6 d-flex align-items-center'>
                            <div className='ml-auto d-flex align-items-center'>
                                <ClickAwayListener onClickAway={() => setOpenDropDown(false)}>
                                    <ul className='list list-inline mb-0 headerTabs'>
                                        <li className='list-inline-item'>
                                            <span>
                                                <ShoppingCartOutlinedIcon style={{ fontSize: 40, marginRight: 10 }} />
                                                <span className='badge bg-success rounded-circle'>3</span>
                                                Cart
                                            </span>
                                        </li>
                                        <li className='list-inline-item' >

                                            <span onClick={() => setOpenDropDown(!isOpenDropDown)}>
                                                <PersonOutlineOutlinedIcon style={{ fontSize: 40, marginRight: 10 }} />
                                                User
                                            </span>
                                            {
                                                isOpenDropDown !== false &&

                                                <ul className='dropdownMenu'>
                                                    <li><Button className='align-items-center'><AssignmentIndOutlinedIcon /> My Account</Button></li>
                                                    <li><Button><LocalShippingOutlinedIcon /> Order Tracking</Button></li>
                                                    <li><Button><LocalActivityOutlinedIcon /> My Voucher</Button></li>
                                                    <li><Button><SettingsSuggestOutlinedIcon /> Setting</Button></li>
                                                    <li><Button><LogoutOutlinedIcon /> Sign Out</Button></li>
                                                </ul>
                                            }

                                        </li>
                                    </ul>
                                </ClickAwayListener>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Nav/>
        </>
    )
}

export default Header;