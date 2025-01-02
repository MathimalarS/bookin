import React, { useState, useEffect, useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../All stay/allstay.css";
import delhi from '../All stay/delhi.jpg';
import heritage from '../All stay/heritage.jpg';
import hy from '../All stay/hy.jpg';
import grand from '../All stay/grand.jpg';
import kol from '../All stay/kol.jpg';
import andhra from '../All stay/andhra.jpg';
import resort2 from '../All stay/resortc.jpeg';
import delhi2 from '../All stay/delhi.webp';
import manali from '../All stay/manali.avif';
import beach from '../All stay/beach.avif';
import bang from '../All stay/bangloer.avif';
import resort from '../All stay/resort.avif';

const HotelBooking = () => {
  const hotels = [
    { id: 1, name: "Luxury Inn", location: "New Delhi", price: 3000, rating: 4.5, type: "Standard",image:delhi},
    { id: 2, name: "Cozy Stay", location: "Mumbai", price: 2500, rating: 4.0, type: "Standard",image:delhi2 },
    { id: 3, name: "Mountain View Resort", location: "Manali", price: 4000, rating: 4.8, type: "Standard",image:manali },
    { id: 4, name: "Beachside Paradise", location: "Kochin", price: 3500, rating: 4.3, type: "Standard",image:beach},
    { id: 5, name: "Heritage Palace", location: "Agra", price: 5000, rating: 4.7, type: "Luxury",image:heritage },
    { id: 6, name: "Hyderabad Haven", location: "Hyderabad", price: 2800, rating: 4.2, type: "Standard",image:hy },
    { id: 7, name: "Bengaluru Bliss", location: "Bengaluru", price: 2700, rating: 4.1, type: "Standard",image:bang},
    { id: 8, name: "City Lights Hotel", location: "Kolkata", price: 3200, rating: 4.4, type: "Family Room",image:kol},
    { id: 9, name: "Andhra Retreat", location: "Andhra Pradesh", price: 2900, rating: 4.0, type: "Family Room",image:andhra },
    { id: 10, name: "Grand Vista", location: "New Delhi", price: 4500, rating: 4.6, type: "Large Space Stay",image:grand},
    { id: 11, name: "Family Resort", location: "Goa", price: 6000, rating: 4.9, type: "Family Room",image:resort },
    { id: 12, name: "Big Space Inn", location: "Chennai", price: 7000, rating: 4.8, type: "Large Space Stay",image:resort2 },
  ];

  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(12000);
  const [isDragging, setIsDragging] = useState(null);
  const sliderRef = useRef(null);

  const totalGuests = adults + children;

  const getPercentage = (value) => {
    return ((value - 1000) / (12000 - 1000)) * 100;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    const value = Math.round(((12000 - 1000) * position) / 100 + 1000);

    if (isDragging === 'min' && value < maxPrice) {
      setMinPrice(Math.max(1000, value));
    } else if (isDragging === 'max' && value > minPrice) {
      setMaxPrice(Math.min(12000, value));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, minPrice, maxPrice]);

  const filteredHotels = hotels.filter((hotel) => {
    const locationMatch = hotel.location.toLowerCase().includes(place.toLowerCase());
    const priceMatch = hotel.price >= minPrice && hotel.price <= maxPrice;
    const typeMatch =
      (totalGuests > 2 && hotel.type === "Family Room") ||
      (hotel.type === "Standard" || hotel.type === "Luxury" || hotel.type === "Large Space Stay");

    return locationMatch && priceMatch && typeMatch;
  });

  const incrementValue = (setter, value) => {
    setter(value + 1);
  };

  const decrementValue = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const incrementRoom = () => {
    setRooms(rooms + 1);
  };

  const decrementRoom = () => {
    if (rooms > 1) setRooms(rooms - 1);
  };

  return (
    <div className="hotel-booking">
      <div className="left-sidebar">
        <h2 className="sidebar-title">Filters</h2>

        <div className="filter-item">
          <label>Location</label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Where are you going?"
            className="location-input"
          />
        </div>

        <div className="filter-item">
          <label>Check-in & Check-out</label>
          <div className="date-picker-wrapper">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Check-in date"
              className="date-picker"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Check-out date"
              className="date-picker"
            />
          </div>
        </div>

        <div className="filter-item">
          <label>Guests</label>
          <div className="guest-counter">
            <div className="counter">
              <span>Adults</span>
              <div className="counter-control">
                <button onClick={() => decrementValue(setAdults, adults)}>
                  <FiMinus />
                </button>
                <span>{adults}</span>
                <button onClick={() => incrementValue(setAdults, adults)}>
                  <FiPlus />
                </button>
              </div>
            </div>

            <div className="counter">
              <span>Children</span>
              <div className="counter-control">
                <button onClick={() => decrementValue(setChildren, children)}>
                  <FiMinus />
                </button>
                <span>{children}</span>
                <button onClick={() => incrementValue(setChildren, children)}>
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-item">
          <label>Rooms</label>
          <div className="counter">
            <div className="counter-control">
              <button onClick={decrementRoom}>
                <FiMinus />
              </button>
              <span>{rooms}</span>
              <button onClick={incrementRoom}>
                <FiPlus />
              </button>
            </div>
          </div>
        </div>

        <div className="filter-item">
          <label>Price Range</label>
          <div className="price-slider-wrapper">
            <div className="relative h-2" ref={sliderRef}>
              <div className="absolute w-full h-full bg-gray-200 rounded"></div>
              <div
                className="absolute h-full bg-blue-500 rounded"
                style={{
                  left: `${getPercentage(minPrice)}%`,
                  right: `${100 - getPercentage(maxPrice)}%`,
                }}
              ></div>

              <div
                className="absolute w-4 h-4 -mt-1.5 bg-blue-500 rounded-full cursor-pointer shadow"
                style={{ left: `${getPercentage(minPrice)}%` }}
                onMouseDown={() => setIsDragging('min')}
              ></div>

              <div
                className="absolute w-4 h-4 -mt-1.5 bg-blue-500 rounded-full cursor-pointer shadow"
                style={{ left: `${getPercentage(maxPrice)}%` }}
                onMouseDown={() => setIsDragging('max')}
              ></div>
            </div>

            <div className="flex justify-between mt-4">
              <span>₹{minPrice}</span>
              <span>₹{maxPrice}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right-listing">
        <h2 className="listing-title">Available Hotels</h2>
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-item">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="hotel-img"
              />
              <div className="hotel-details">
                <h3>{hotel.name}</h3>
                <p>Location: {hotel.location}</p>
                <p>Price: ₹{hotel.price} per night</p>
                <p>Rating: {"★".repeat(Math.floor(hotel.rating))}</p>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels found within the price range.</p>
        )}
      </div>
    </div>
  );
};

export default HotelBooking;
