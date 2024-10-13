import React, { useState } from 'react';
import '../selectDrop/select.css'
const Select = () => {
    const [isOpenSelect, setisOpenSelect] = useState(true)
    const openSelect=()=>{
        setisOpenSelect(!isOpenSelect);
    }
    return (
        <div className='selectDropWrapper cursor posision-relative'>
            <span className='openSelect' onClick={openSelect}>All Catagories</span>
            
            {
                isOpenSelect === true &&
                <div className='selectDrop'>
                <div className='searchField'>
                    <input type="text" />
                    <ul className='searchResults'>
                        <li>Milks and Dairies</li>
                        <li>Wines & Drinks</li>
                        <li>Clothing & Beauty</li>
                        <li>Fresh Seafood</li>
                        <li>Pet Foods & Toy</li>
                        <li>Fast Food</li>
                        <li>Baking Material</li>
                        <li>Vegetables</li>
                        <li>Fresh Fruit</li>
                    </ul>
                </div>
            </div>
            }
        </div>
    )
}
export default Select