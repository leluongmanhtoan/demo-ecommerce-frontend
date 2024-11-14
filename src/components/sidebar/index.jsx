import React from "react";
import "./style.css"
import MilkandDairies from "../../assets/images/category/category-1.svg"
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
function valuetext(value) {
    return `${value}°C`;
}
const Sidebar = () => {
    const [value, setValue] = React.useState([20, 37]);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="sidebar">
                <div className="card border-0 shadow">
                    <h3>Category</h3>
                    <div className="catList">
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={MilkandDairies} alt="" width={30} />
                            </span>
                            <h4 className="mb-0 ml-3">Milk and Dairies</h4>
                            <span className="d-flex align-items-center rounded-circle ml-auto">30</span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={MilkandDairies} alt="" width={30} />
                            </span>
                            <h4 className="mb-0 ml-3">Milk and Dairies</h4>
                            <span className="d-flex align-items-center rounded-circle ml-auto">30</span>
                        </div>
                        <div className="catItem d-flex align-items-center">
                            <span className="img">
                                <img src={MilkandDairies} alt="" width={30} />
                            </span>
                            <h4 className="mb-0 ml-3">Milk and Dairies</h4>
                            <span className="d-flex align-items-center rounded-circle ml-auto">30</span>
                        </div>
                    </div>
                </div>
                <div className="card border-0 shadow">
                    <h3>Fill by Price</h3>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="success"
                        min={0}
                        step={1}
                        max={1000}
                    />
                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span>From: <strong className="text-success">$1</strong></span>
                        <span className="ml-auto">To: <strong className="text-success">$144</strong></span>
                    </div>

                    <div className="filters">
                        <h5>Color</h5>
                        <ul>
                            <li><Checkbox {...label}/>Red (56)</li>
                            <li><Checkbox {...label}/>Green (56)</li>
                            <li><Checkbox {...label}/>Blue (56)</li>
                            <li><Checkbox {...label}/>Red (56)</li>
                            <li><Checkbox {...label}/>Green (56)</li>
                            <li><Checkbox {...label}/>Blue (56)</li>
                            <li><Checkbox {...label}/>Red (56)</li>
                            <li><Checkbox {...label}/>Green (56)</li>
                            <li><Checkbox {...label}/>Blue (56)</li>
                            <li><Checkbox {...label}/>Red (56)</li>
                            <li><Checkbox {...label}/>Green (56)</li>
                            <li><Checkbox {...label}/>Blue (56)</li>
                            <li><Checkbox {...label}/>Red (56)</li>
                            <li><Checkbox {...label}/>Green (56)</li>
                            <li><Checkbox {...label}/>Blue (56)</li>
                            <li><Checkbox {...label}/>Red (56)</li>
                            <li><Checkbox {...label}/>Green (56)</li>
                            <li><Checkbox {...label}/>Blue (56)</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar