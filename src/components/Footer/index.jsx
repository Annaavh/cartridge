import "./index.css";
import React from "react";
import PhoneNumbers from "../PhoneNumbers/index.jsx"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-icons">
                    <a href="https://www.facebook.com/CartridgeaM099575752" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.facebook.com/CartridgeaM099575752" target="_blank">Cartridge</a>
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