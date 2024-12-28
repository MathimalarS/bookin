import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo.png';
import stay from '../Navbar/stay.png';
import '../Navbar/Navbar.css';
import SearchBar from '../searchbar/Searchbar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="home-link">
          <img src={logo} alt="Hotel Logo" className="logo" />
          <span className="app-name">Bookinn</span>
        </Link>
      </div>
      <div className="navbar-center">
        <SearchBar />
      </div>
      <div className="navbar-right">
        <button className="stays-btn">
          <img src={stay} alt="Stays Icon" className="stays-icon" /> Stays
        </button>
        <Link to="/login" className="auth-link">Login</Link>
        <Link to="/signup" className="auth-link">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
