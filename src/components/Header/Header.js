import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="header-part">

            <Button className="login" variant="outline-primary">Login</Button>
            <Button className="register" variant="outline-primary">Sign Up</Button>

            <nav className="menubar">

                <NavLink to="/dashboard">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/teachers">Teachers</NavLink>
                <NavLink to="/about">About Us</NavLink>


            </nav>
            <div className="header-part2">
                <h1 className="math-error">Math Error</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd388FFTH5b9djNT8ndkjVrzn2O2DW8-uQ_w&usqp=CAU" alt="" />
            </div>

        </div>
    );
};

export default Header;