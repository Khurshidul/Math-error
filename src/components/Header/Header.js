import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="header-part">
            <div className="navbar-top">
                <Button className="login" variant="outline-primary">Login</Button>
                <Button className="register" variant="outline-primary">Sign Up</Button>

                <nav className="menubar">

                    <NavLink to="/dashboard">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/teachers">Teachers</NavLink>
                    <NavLink to="/about">About Us</NavLink>


                </nav>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="header-part2">

                <h1 className="math-error">Math Error</h1>
            </div>

        </div>
    );
};

export default Header;