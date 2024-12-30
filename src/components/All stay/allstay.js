import React, { useState } from "react";
import { FiUser, FiMapPin } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../All stay/allstay.css';

const HotelBooking = () => {
  const defaultPlaces = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Kolkata",
    "Hyderabad",
    "Manali",
    "Agra",
    "Kochin",
    "Andhra Pradesh"
  ];

  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [filters, setFilters] = useState({
    price: [0, 10000],
    rating: 3,
    amenities: {
      wifi: false,
      pool: false,
      gym: false
    }
  });

  const handleInputChange = (e) => {
    setPlace(e.target.value);
  };

  const handlePlaceSelect = (selectedPlace) => {
    setPlace(selectedPlace);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value.split(",").map(Number),
      }));
    } else if (name === "rating") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        amenities: {
          ...prevFilters.amenities,
          [name]: e.target.checked,
        },
      }));
    }
  };

  return (
    <div className="hotel-booking">
      <div className="left-sidebar">
        <h2>Filters</h2>
        <div className="filter-item">
          <label>Location</label>
          <input
            type="text"
            value={place}
            onChange={handleInputChange}
            placeholder="Where are you going?"
          />
          <div className="suggestions">
            {defaultPlaces
              .filter((place) => place.toLowerCase().includes(place.toLowerCase()))
              .map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handlePlaceSelect(suggestion)}
                  className="suggestion-item"
                >
                  <FiMapPin /> {suggestion}
                </div>
              ))}
          </div>
        </div>

        <div className="filter-item">
          <label>Check-in & Check-out</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Check-in date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Check-out date"
          />
        </div>

        <div className="filter-item">
          <label>Guests</label>
          <div className="guest-select">
            <FiUser />
            <select
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
            >
              {[...Array(10)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} Adult{index > 0 ? "s" : ""}
                </option>
              ))}
            </select>
            <select
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
            >
              {[...Array(5)].map((_, index) => (
                <option key={index} value={index}>
                  {index} Child{index !== 1 ? "ren" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-item">
          <label>Rooms</label>
          <select
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value))}
          >
            {[...Array(5)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1} Room{index > 0 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label>Price Range</label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={filters.price[0]}
            onChange={(e) => handleFilterChange(e)}
            name="price"
          />
          <span>
            {filters.price[0]} - {filters.price[1]} INR
          </span>
        </div>

        <div className="filter-item">
          <label>Rating</label>
          <select
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Stars
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label>Amenities</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="wifi"
                checked={filters.amenities.wifi}
                onChange={handleFilterChange}
              />
              Wifi
            </label>
            <label>
              <input
                type="checkbox"
                name="pool"
                checked={filters.amenities.pool}
                onChange={handleFilterChange}
              />
              Pool
            </label>
            <label>
              <input
                type="checkbox"
                name="gym"
                checked={filters.amenities.gym}
                onChange={handleFilterChange}
              />
              Gym
            </label>
          </div>
        </div>
      </div>

      <div className="right-listing">
        <h2>Available Hotels</h2>
        <div className="hotel-item">
          <img
            src="https://via.placeholder.com/300"
            alt="Hotel"
            className="hotel-img"
          />
          <div className="hotel-details">
            <h3>Hotel Name</h3>
            <p>Location: New Delhi</p>
            <p>Price: ₹2000 per night</p>
            <p>Rating: ★★★★☆</p>
            <button>Book Now</button>
          </div>
        </div>
        {/* Add more hotel listings as needed */}
      </div>
    </div>
  );
};

export default HotelBooking;
