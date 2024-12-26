import React from "react";
import Header from "../../components/Header/index.jsx";
import Hero from "../../components/Hero/index.jsx";
import Welcome from "../../components/Welcome/index.jsx";
import Services from "../../components/Services/index.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/index.jsx";
import Footer from "../../components/Footer/index.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Welcome />
            <Services />
            <WhyChooseUs />
            <Footer />
        </>
    )
};
export default Home;