import "./index.css";
import React from "react";

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2>Ծառայություններ</h2>
                <div className="services-grid">
                    {[
                        { text: "Լազերային քարթրիջների լիցքավորում" },
                        { text: "Լազերային քարթրիջների վերանորոգում և սպասարկում" },
                        { text: "Լազերային տպիչների դիագնոստիկա" },
                        { text: "Լազերային տպիչների սպասարկում" }
                    ].map((service, index) => (
                        <div className="service" key={index}>
                            <div className="icon-container">
                                <i class="fa-regular fa-circle-check"></i>
                            </div>
                            <p>{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
export default Services;