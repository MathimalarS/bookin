import React, { useState } from "react";
import { FiCalendar, FiUser, FiMapPin } from "react-icons/fi"; 
import '../searchbar/Searchbar.css';
import stay from '../searchbar/stay.png';

const SearchBar = () => {
  const defaultPlaces = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Kolkata",
    "Hyderabad",
    "Manali",
    "Agra",
    "Kochin",
    "Andhra Pradhesh"
  ];

  const popularDestinations = [
    "Ooty",
    "Chennai",
    "Kodaikanal",
    "Coimbatore",
    "Puducherry"
  ];

  const [place, setPlace] = useState("");
  const [suggestions, setSuggestions] = useState(defaultPlaces);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setPlace(query);

    if (query) {
      const filteredSuggestions = defaultPlaces.filter((place) =>
        place.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions(defaultPlaces);
    }
  };

  const handlePlaceSelect = (selectedPlace) => {
    setPlace(selectedPlace);
    setSuggestions(defaultPlaces);
  };

  return (
    <div className="search-bar">
      <div className="search-item">
        <img src={stay} alt="Stay Icon" className="stay-icon" />
        <input
          type="text"
          placeholder="Where are you going?"
          value={place}
          onChange={handleInputChange}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {isInputFocused && (
          <div className="dropdown-container">
            {place ? (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handlePlaceSelect(suggestion)}
                    className="suggestion-item"
                  >
                    <FiMapPin className="list-icon" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="popular-destinations">
                <h2>Popular Nearby Destinations</h2>
                <ul>
                  {popularDestinations.map((destination, index) => (
                    <li
                      key={index}
                      onClick={() => handlePlaceSelect(destination)}
                      className="suggestion-item"
                    >
                      <FiMapPin className="list-icon" />
                      {destination}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="search-item">
        <FiCalendar className="icon" />
        <input type="text" placeholder="Check-in-date Check-out-date" />
      </div>

      <div className="search-item">
        <FiUser className="icon" />
        <input type="text" placeholder="2 adults · 0 children · 1 room" />
      </div>

      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
