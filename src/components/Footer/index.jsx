import "./index.css";
import React from "react";
import PhoneNumbers from "../PhoneNumbers/index.jsx"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* <p>&copy; 2024 CartridgePro. All rights reserved.</p> */}
                <div className="social-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <a href="https://www.facebook.com/CartridgeaM099575752" target="_blank">Cartridge.aM</a>
                </div>
                <div className="contact-info">
                    <span className="phone-number">Զանգահարեք՝</span>
                    <PhoneNumbers />

                    {/* <p className="phone-number">Զանգահարեք՝ (374) 945-75732 (374) 945-75752</p> */}
                    {/* <p className="phone-number">(374) 945-75752</p> */}


                </div>
            </div>
        </footer>
    )
}
export default Footer;