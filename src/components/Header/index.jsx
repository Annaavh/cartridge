import "./index.css";
import Lottie from "react-lottie";
import React, { useState, useEffect } from "react";
import useWindowScroll from "../../hooks/useWindowScroll";
import useWindowSize from "../../hooks/useWindowSize";
import animationData from "../../SVGAnimation.json";
import PhoneNumbers from "../PhoneNumbers/index.jsx";


const Header = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const scrollY = useWindowScroll();
    const size = useWindowSize();
    const [isFixed, setIsFixed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [logoWidth, setLogoWidth] = useState();

    useEffect(() => {
        size <= 1270 ? setLogoWidth(300) : setLogoWidth(500)
    }, [size])

    useEffect(() => {
        scrollY > 0 ? setIsFixed(true) : setIsFixed(false)
    }, [scrollY]);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className={`header ${isFixed ? "fixed" : ""}`}>
            <div className="container">
                <nav className="navbar">
                    <ul className={`nav-links ${menuOpen ? "open" : ""} ${isFixed ? "fixed-nav" : ""
                        }`}>
                        {
                            [
                                { id: "#about-us", text: "Մեր մասին" },
                                { id: "#services", text: "Ծառայություններ" },
                                { id: "#why-choose-us", text: "Ինչու՞ ընտրել մեզ" }
                            ].map((link) => (
                                <li onClick={window.innerWidth <= 1270 ? toggleMenu : undefined} key={link.id}>
                                    <a href={link.id}>{link.text}</a>
                                </li>
                            ))
                        }

                    </ul>
                    <div className="logo">
                        <div className="divOverLogo" ></div>
                        <Lottie options={defaultOptions} height={80} width={logoWidth} />
                    </div>
                    <button
                        className={`menu-toggle ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        {
                            [...Array(3)].map((_, index) => (
                                <span key={index} className="menu-bar"></span>
                            ))
                        }
                    </button>

                    <PhoneNumbers />
                </nav>
            </div>
        </header>
    )
}
export default Header;