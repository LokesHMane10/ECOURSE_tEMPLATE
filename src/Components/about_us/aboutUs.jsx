import React from "react";
import "./aboutus.css";

import Footer from "../footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="main-div">
        <div>
          <img
            src="https://images.unsplash.com/photo-1508107536691-b1449928187d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjB2aW50YWdlfGVufDB8fDB8fHww"
            alt="no img"
          />
        </div>
        <div className="main-about">
          <p className="aboutus">About Us</p>

          <h2 className="innovative">Innovative Way To learn</h2>

          <div className="about-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            temporibus fugit error. Fuga a repellat perspiciatis repudiandae.
            Animi officiis soluta quas. Quisquam nostrum sequi nobis autem
            similique exercitationem nemo error a mollitia quasi, quidem
            delectus aliquid voluptates velit voluptatum officia vero cupiditate
            magnam ratione! Commodi repellendus quo consequatur ipsam
            dignissimos!
          </div>
          <button>Learn more</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
