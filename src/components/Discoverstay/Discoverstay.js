import React from "react";
import '../Discoverstay/Discoverstay.css';
import resort from '../Discoverstay/resort.jpeg';
import apartment from '../Discoverstay/apartment.webp';
import cottage from '../Discoverstay/cottage.jpg';
import villa from '../Discoverstay/villa.jpg';
import houseboat from '../Discoverstay/boathouse.avif';

const DiscoverStayPage = () => {
  return (
    <div className="discover-stay-section">
      <h2>Discover our new favourite stay</h2>
      <div className="cards-container">
        <div className="stay-card">
          <img src={resort}loading="lazy" alt="Resort" />
          <h3>Resort</h3>
        </div>
        <div className="stay-card">
          <img src={apartment}loading="lazy" alt="Apartment" />
          <h3>Apartment</h3>
        </div>
        <div className="stay-card">
          <img src={cottage} loading="lazy" alt="Cottage" />
          <h3>Cottage</h3>
        </div>
        <div className="stay-card">
          <img src={villa} loading="lazy" alt="Villa" />
          <h3>Villa</h3>
        </div>
        <div className="stay-card">
          <img src={houseboat} loading="lazy" alt="Houseboat" />
          <h3>Houseboat</h3>
        </div>
      </div>
    </div>
  );
};

export default DiscoverStayPage;
