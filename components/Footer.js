import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🐾 PetBond</h3>
            <p>Your trusted marketplace for animals and pet care services</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <Link to="/animals">Buy Animals</Link>
            <Link to="/products">Pet Products</Link>
            <Link to="/services">Pet Services</Link>
            <Link to="/service-center">Service Center</Link>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <Link to="/help">Help Center</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/support">Feedback</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PetBond. All rights reserved.</p>
          <p>Made with ❤️ for pet lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;