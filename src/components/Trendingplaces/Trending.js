import React from "react";
import '../Trendingplaces/Trending.css'
import goa from '../Trendingplaces/baga.jpg';
import jammu from '../Trendingplaces/jammu.avif';
import munnar from '../Trendingplaces/Munnar.jpg';
import manali from '../Trendingplaces/manali.webp';
import kk from '../Trendingplaces/kanyakumari.avif';

const destinations = [
  { name: "Baga", flag: "🇮🇳", image: goa },
  { name: "Jammu and Kashmir", flag: "🇮🇳", image: jammu },
  { name: "Munnar", flag: "🇮🇳", image: munnar },
  { name: "Kanyakumari", flag: "🇮🇳", image: kk },
  { name: "Manali", flag: "🇮🇳", image: manali },
];

const TrendingDestinations = () => {
  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Destinations</h1>
      <p className="trending-subtitle">
        Travellers searching for India also booked these
      </p>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img
              src={destination.image}
              alt={destination.name}
              className="destination-image"
            />
            <div className="destination-overlay">
              <h2 className="destination-name">
                {destination.name} 
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
