import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className = "footer-icon">
                <h1 className="footer-title">Math Error</h1>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-whatsapp-square"></i>
                <p>It's a place where from you can gain true knowledge. <br /> A true teacher like a true friends.</p>
               
                
            </div>
            <div className="footer-menu">
                <br /><br />
                <NavLink to = "/dashboard">DashBoard</NavLink>
                <br />
                <br />
                <NavLink to = "/services">Services</NavLink>
                <br />
                <br />
                <NavLink to = "/teachers">Teachers</NavLink>
                <br />
                <br />
                <NavLink to = "/about">About Us</NavLink>

            </div>
            <div className="contact-item">
                <h1>Sign Up for the newsletter</h1>
                <label htmlFor="email">Email: 
                <input type="email" name="email" placeholder="Email" id="" />
                </label>
                <h3><i class="fas fa-phone-square-alt"></i> :01851*****</h3>
                <h3><i class="fas fa-map-marked-alt"></i> : D.T Road, Hanimoon Tower, Pahartali, Chittagong.</h3>
            </div>
        </div>
    );
};

export default Footer;