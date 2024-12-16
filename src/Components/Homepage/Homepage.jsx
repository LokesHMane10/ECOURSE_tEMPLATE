// import "./homepage.css";
// import Carousel from "./image-carousel/Carousel";
import Footer from "../footer/Footer";
import Navbar from "./Navbar/Navbar";
// import ImageSlider from "../imageslider/ImageSlider";

import Topnav from "./top-nav/Topnav";
import { countries } from "../Carousel/Data";
import Carousel from "../Carousel/Carousel";

const Homepage = () => {
  return (
    <>
      <Topnav />
      <Navbar />
      <Carousel images={countries} />
      <Footer />
    </>
  );
};

export default Homepage;
