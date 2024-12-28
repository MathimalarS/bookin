import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="">Booking Policies</Link></li>
            <li><Link to="">Cancellation Policies</Link></li>
            <li><Link to="">Privacy Policy</Link></li>
            <li><Link to="">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to=""><i className="fab fa-facebook"></i></Link>
            <Link to=""><i className="fab fa-twitter"></i></Link>
            <Link to=""><i className="fab fa-instagram"></i></Link>
            <Link to=""><i className="fab fa-linkedin"></i></Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on the best deals and offers!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2024 Bookinn. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
