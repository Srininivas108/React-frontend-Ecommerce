import React from "react";
import Announcements from "../components/Announcements";
import Catergories from "../components/Catergories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider/>
      <Catergories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Home;
