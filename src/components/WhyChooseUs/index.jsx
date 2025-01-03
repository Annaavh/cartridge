import "./index.css";
import React from "react";

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="why-choose-us">
            <div className="container">
                <h2 className="section-title">Ինչու՞ ընտրել մեզ</h2>
                {[
                    { icon: "fa-solid fa-dollar-sign", text: "Մատչելի գներ" },
                    { icon: "fa-regular fa-handshake", text: "Հուսալի և վստահելի" },
                    { icon: "fa-solid fa-award", text: "Կատարված աշխատանքին տալիս ենք երաշխիք" },
                    { icon: "fa-solid fa-tools", text: "Սպասարկումը կատարվում է որակյալ նյութերով և մասերով" }
                ].map((benefit, index) => (
                    <div className="benefit" key={index}>
                        <div className="benefitIcon-container">
                            <i className={benefit.icon}></i>
                        </div>

                        <div className="benefit-text">
                            <h3>{benefit.text}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default WhyChooseUs;