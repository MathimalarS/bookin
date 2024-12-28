import React from "react";
import '../Home/home.css';
import Navbar from "../Navbar/Navbar";
import { FaTag } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
import DiscoverStayPage from "../Discoverstay/Discoverstay";
import TrendingDestinations from "../Trendingplaces/Trending";
import { Footer } from "../Footer/Footer";
import Carousel from "../Homehotel/Homehotel";

const HomeBanner = () => {
  return (
    <div className="home-container">
        <Navbar />
      <div className="home-banner">
        <div className="banner-content">
          <h1>The journey begins with comfort</h1>
          <p>Find your perfect place to stay</p>
          <button className="explore-btn">Book your stay</button>
        </div>
        <div className="small-banner">
          <div className="left-section">
            <FaTag className="tagicon" />
            <span>
              Members save 10% or more on over 100,000 hotels worldwide when signed in
            </span>
          </div>
          <Link to="/login">
            <button className="sign-in-btn">Sign In</button>
          </Link>
        </div>
      </div>
      <DiscoverStayPage /> 
      <TrendingDestinations/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default HomeBanner;
