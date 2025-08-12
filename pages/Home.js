import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    {
      url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop',
      title: 'Find Your Perfect Companion',
      subtitle: 'Discover loving pets from verified sellers'
    },
    {
      url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&h=600&fit=crop',
      title: 'Professional Pet Care',
      subtitle: 'Expert veterinary and grooming services'
    },
    {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop',
      title: 'Emergency Support 24/7',
      subtitle: 'Round-the-clock care for your pets'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div>
      {/* Logo and Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="logo-welcome">
            <div className="logo">
              <span className="logo-icon">🐾</span>
              <span className="logo-text">PetBond</span>
            </div>
            <h1 className="welcome-text">Welcome to PetBond</h1>
            <p className="welcome-subtitle">India's Most Trusted Pet Marketplace & Care Platform</p>
          </div>
        </div>
      </section>

      {/* Animation Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {sliderImages.map((slide, index) => (
            <div 
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="slide-overlay">
                <div className="container">
                  <div className="slide-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.subtitle}</p>
                    <div className="hero-buttons">
                      <Link to="/animals" className="btn btn-primary">Find Your Pet</Link>
                      <Link to="/services" className="btn btn-secondary">Book Services</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button className="slider-nav prev" onClick={prevSlide}>‹</button>
          <button className="slider-nav next" onClick={nextSlide}>›</button>
          
          {/* Dots Indicator */}
          <div className="slider-dots">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services" style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', color: '#333' }}>Our Services</h2>
          <div className="services-showcase">
            <div className="service-highlight">
              <div className="service-icon-large">🏥</div>
              <h3>Veterinary Care</h3>
              <p>Connect with certified veterinarians for health checkups, treatments, and emergency care. Available 24/7 for your peace of mind.</p>
              <div className="service-features">
                <span className="feature-tag">✓ Home Visits</span>
                <span className="feature-tag">✓ Online Consultation</span>
                <span className="feature-tag">✓ Emergency Support</span>
              </div>
              <Link to="/services" className="btn btn-primary">Book Consultation</Link>
            </div>
            
            <div className="service-highlight">
              <div className="service-icon-large">🤗</div>
              <h3>Pet Sitting & Care</h3>
              <p>Professional pet sitters and caretakers for when you're away. In-home sitting, dog walking, and boarding services available.</p>
              <div className="service-features">
                <span className="feature-tag">✓ Background Verified</span>
                <span className="feature-tag">✓ GPS Tracking</span>
                <span className="feature-tag">✓ Real-time Updates</span>
              </div>
              <Link to="/services" className="btn btn-primary">Find Pet Sitter</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Why Choose PetBond?</h2>
          <div className="animals-grid">
            <div className="card">
              <h3>🐕 Verified Sellers</h3>
              <p>All our pet sellers are verified and trusted by our community</p>
            </div>
            <div className="card">
              <h3>🏥 Professional Services</h3>
              <p>Connect with certified veterinarians and pet care professionals</p>
            </div>
            <div className="card">
              <h3>🛡️ Safe & Secure</h3>
              <p>Your transactions and pet information are completely secure</p>
            </div>
            <div className="card">
              <h3>📱 Easy to Use</h3>
              <p>Simple and intuitive platform for all your pet needs</p>
            </div>
            <div className="card">
              <h3>💰 Best Prices</h3>
              <p>Competitive pricing with transparent costs and no hidden fees</p>
            </div>
            <div className="card">
              <h3>🌟 24/7 Support</h3>
              <p>Round-the-clock customer support for all your queries and concerns</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;