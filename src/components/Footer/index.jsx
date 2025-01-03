import "./index.css";
import React from "react";
import PhoneNumbers from "../PhoneNumbers/index.jsx"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-icons">
                    <a href="https://www.facebook.com/CartridgeaM099575752" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.facebook.com/CartridgeaM099575752" target="_blank" rel="noreferrer">Cartridge</a>
                </div>
                <div className="contact-info">
                    <span className="phone-number">Զանգահարեք՝</span>
                    <PhoneNumbers />
                </div>
            </div>
        </footer>
    )
}
export default Footer;