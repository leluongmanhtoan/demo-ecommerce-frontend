import React from 'react';
import '../header/header.css';
import '../../App.css'
import Logo from '../../assets/images/smile-icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
const Header =()=>{
    return(
    <>
        <header>
            <div className='container-fluid'>
                <div className='row'>  
                    <div className='col-sm-2'>
                        <img src={Logo} alt = "codelologo" style={{ width: '100px', height: '100px' }}/>
                    </div>
                    {/*headerSearch start here*/}
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                            <Select/>
                            <div className='search'>
                                <input type='text' placeholder='Search for items...'/>
                                <SearchIcon className='searchIcon cursor'/>
                            </div>
                        </div>
                    </div>    
                    {/*headerSearch start here*/}
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;