import React from 'react'
import "../style/Nav.css"
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <div className="navbar">
            <div className="left">
                <p>HEALTHCARE</p>
            </div>
            <div className="right">
                <Link to="Home">Home</Link>
                <Link to="About">About Us</Link>
                <Link to="Service">Services</Link>
             <button className="get-started-btn">Get Started</button>
            </div>
        </div>
    );
};


export default Nav