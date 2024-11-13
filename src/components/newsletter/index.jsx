import React from "react";
import "./style.css"
import SendOutlineIcon from "@mui/icons-material/SendOutlined"
import { Button } from "@mui/material";
const NewsLetter = ()=>{
    return (
        <>
        <div className="newsLetterBanner">
            <SendOutlineIcon/>
            <input type="text" placeholder="Your email address"/>
            <Button className="bg-g">Subcribe</Button>
        </div>
        </>
    )
}

export default NewsLetter