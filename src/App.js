import React, { useState, useEffect } from "react";
import "./App.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from './SVG Animation.json';
import Lottie from "react-lottie";


const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState(500); // Default width

  // Update logo size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 620) {
        setLogoWidth(300); // Smaller size for screens <= 620px
      } else {
        setLogoWidth(500); // Default size for larger screens
      }
    };

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set size based on current window width
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};


  return (
    <div className="App">
      {/* Header */}
      {/* <header className={`header ${isFixed ? "fixed" : ""}`}>
        <div className="container">
          <div className="logo">
            <Lottie options={defaultOptions} height={80} width={500} />

          </div>
        </div>
      </header> */}
        <header className={`header ${isFixed ? "fixed" : ""}`}>
        <div className="container">
          <nav className="navbar">
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#why-choose-us">Why Choose Us</a>
              </li>
            </ul>
            <div className="logo">
              <Lottie options={defaultOptions} height={80} width={logoWidth} />
            </div>
            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          {/* <img src={process.env.PUBLIC_URL + "/cartridge5.jpg"} alt="Cartridge" /> */}
        </div>
      </section>

      {/* Welcome to Cartridge.am Section */}
      <section id="about-us" className="welcome">
        <div className="container welcome-container">
          <div className="welcome-text">
            <h2>Բարի գալուստ
              <span> Cartridge.am</span>
            </h2>

            <p>
              Cartridge.am-ում մենք առաջարկում ենք բարձրորակ քարթրիջներ և տոներների լիցքավորման ծառայություններ՝ բավարարելու ձեր տպագրության բոլոր կարիքները։ Անկախ նրանից՝ ձեզ անհրաժեշտ է նոր քարթրիջ, թե ցանկանում եք լիցքավորել ձեր առկա քարթրիջը, մենք միշտ պատրաստ ենք օգնելու։
              Մենք առաջարկում ենք լայն տեսականի քարթրիջներ, որոնք համատեղելի են բոլոր հայտնի տպիչների ապրանքանիշերի հետ։ Մեր լիցքավորման ծառայությունները էկոլոգիապես մաքուր են, ծախսարդյունավետ և նախատեսված են նվազեցնելու ձեր տպագրության ծախսերը՝ միաժամանակ ապահովելով բարձր որակ։
              {/* Ընտրեք Cartridge.am՝ հուսալի, մատչելի և կայուն տպագրական լուծումների համար։ Մեր թիմը պատրաստ է ապահովել լավագույն ապրանքներն ու ծառայությունները թե՛ տնային, թե՛ գրասենյակային օգտագործման համար։ */}
            </p>
          </div>
          <div className="welcome-image">
            <img src={process.env.PUBLIC_URL + "/cartridge.jpg"} alt="Cartridge Image" />
          </div>
        </div>
      </section>


      {/* Services Section */}
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

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Ինչու՞ ընտրել մեզ</h2>
          {[
            { icon: "fa-solid fa-dollar-sign", text: "Մատչելի գներ" },
            { icon: "fa-regular fa-handshake", text: "Հուսալի և վստահելի" },
            { icon: "fa-solid fa-award", text: "Կատարված աշխատանքին տալիս ենք երաշխիք" },
            { icon: "fa-solid fa-truck", text: "Երևանի տարածքում առաքումը անվճար" },
            { icon: "fa-solid fa-tools", text: "Սպասարկումը կատարվում է որակյալ նյութերով և մասերով" }
          ].map((benefit, index) => (
            <div className="benefit" key={index}>
              <div className="benefitIcon-container">
                <i class={benefit.icon}></i>
              </div>

              <div className="benefit-text">
                <h3>{benefit.text}</h3>
                {/* <p>{benefit} details...</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          {/* <p>&copy; 2024 CartridgePro. All rights reserved.</p> */}
          <div className="social-icons">
            <a href="#">Facebook</a>
          </div>
          <div className="contact-info">
            <p className="phone-number">Զանգահարեք՝ (123) 456-7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Lottie from "react-lottie";
// import animationData from "./SVG Animation.json";

// const App = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   const [isFixed, setIsFixed] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="App">
//       {/* Header */}
//       <header className={`header ${isFixed ? "fixed" : ""}`}>
//         <div className="container">
//           <nav className="navbar">
//             <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//               <li>
//                 <a href="#about-us">About Us</a>
//               </li>
//               <li>
//                 <a href="#services">Services</a>
//               </li>
//               <li>
//                 <a href="#why-choose-us">Why Choose Us</a>
//               </li>
//             </ul>
//             <div className="logo">
//               <Lottie options={defaultOptions} height={80} width={150} />
//             </div>
//             <button
//               className={`menu-toggle ${menuOpen ? "open" : ""}`}
//               onClick={toggleMenu}
//             >
//               <span className="menu-bar"></span>
//               <span className="menu-bar"></span>
//               <span className="menu-bar"></span>
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="about-us" className="hero">
//         <div className="container">
//           <h1>Welcome to Cartridge.am</h1>
//           <p>Your reliable printing solutions provider.</p>
//         </div>
//       </section>

//       {/* Sections */}
//       <section id="services" className="services">
//         <div className="container">
//           <h2>Services</h2>
//           {/* Service content here */}
//         </div>
//       </section>

//       <section id="why-choose-us" className="why-choose-us">
//         <div className="container">
//           <h2>Why Choose Us</h2>
//           {/* Why Choose Us content here */}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 Cartridge.am. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;




