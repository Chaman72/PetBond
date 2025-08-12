import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showRegisterMenu, setShowRegisterMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/">
            <h2>🐾 PetBond</h2>
          </Link>
        </div>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/animals" className="nav-link">Animals</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/service-center" className="nav-link">Service Center</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <div 
            className="register-dropdown"
            onMouseEnter={() => setShowRegisterMenu(true)}
            onMouseLeave={() => setShowRegisterMenu(false)}
          >
            <button className="btn btn-primary dropdown-toggle">
              Register
            </button>
            {showRegisterMenu && (
              <div className="dropdown-menu">
                <Link to="/register" className="dropdown-item">Join as Customer</Link>
                <Link to="/sell-on-petbond" className="dropdown-item">Become a Seller</Link>
                <Link to="/vet-register" className="dropdown-item">Join as Veterinarian</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;