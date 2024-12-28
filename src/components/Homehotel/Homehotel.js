import React, { useRef } from "react";
import '../Homehotel/Homehotel.css'
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import jungle from '../Homehotel/junglehouse.jpg'
import beachvilla from '../Homehotel/beachvilla.jpg'
import boathouse from '../Homehotel/boathouse.jpg'
import palace from '../Homehotel/palace.jpg'
import hilltop from '../Homehotel/hilltop.jpg'
import seaside from '../Homehotel/seaside.jpg'
import island from '../Homehotel/island.jpg'
import mountain from '../Homehotel/mountain.avif'
import desert from '../Homehotel/dessertcamp.avif'
import forest from '../Homehotel/foresteco.webp'

const Carousel = () => {
  const properties = [
    { id: 1, title: "Jungle Treehouse", location: "India, Kerala", rating: 9.0, reviews: 102, type: "Superb", image: jungle },
    { id: 2, title: "Mountain Retreat", location: "India, Himachal Pradesh", rating: 9.8, reviews: 150, type: "Exceptional", image: mountain },
    { id: 3, title: "Beachside Villa", location: "India, Goa", rating: 9.6, reviews: 200, type: "Exceptional", image: beachvilla },
    { id: 4, title: "Royal Palace Stay", location: "India, Rajasthan", rating: 9.5, reviews: 180, type: "Exceptional", image: palace },
    { id: 5, title: "Backwater Houseboat", location: "India, Alleppey", rating: 9.4, reviews: 250, type: "Superb", image: boathouse },
    { id: 6, title: "Desert Safari Camp", location: "India, Jaisalmer", rating: 9.7, reviews: 175, type: "Exceptional", image: desert },
    { id: 7, title: "Hilltop Cottage", location: "India, Manali", rating: 9.3, reviews: 190, type: "Superb", image:hilltop },
    { id: 8, title: "Forest Eco Stay", location: "India, Munnar", rating: 9.2, reviews: 230, type: "Superb", image: forest },
    { id: 9, title: "Seaside Bungalow", location: "India, Chennai", rating: 9.1, reviews: 140, type: "Superb", image: seaside },
    { id: 10, title: "Island Paradise", location: "India, Andaman", rating: 9.9, reviews: 300, type: "Exceptional", image: island},
  ];

  const carouselRef = useRef(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <h2>Stay at our top unique properties</h2>
      <div className="carousel">
        <button className="arrow left-arrow" onClick={handleScrollLeft}>
          <FaArrowLeft />
        </button>
        <div className="carousel-track" ref={carouselRef}>
          {properties.map((property) => (
            <div key={property.id} className="carousel-card">
              <div className="card-image-wrapper">
                <img src={property.image} alt={property.title} />
                <FaHeart className="favorite-icon" />
              </div>
              <div className="card-content">
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <div className="card-footer">
                  <span className="rating">{property.rating}</span>{" "}
                  {property.type} · {property.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleScrollRight}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
