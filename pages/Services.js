import React, { useState, useEffect } from 'react';
import { getServiceProviders, getServiceOfferings } from '../services/api';

const Services = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [providers, setProviders] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, [activeTab]);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const [providersData, offeringsData] = await Promise.all([
        getServiceProviders(),
        getServiceOfferings()
      ]);
      setProviders(providersData);
      setOfferings(offeringsData);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const serviceCategories = [
    { id: 'home', name: 'Home Services', icon: '🏠' },
    { id: 'health', name: 'Health Check', icon: '🏥' },
    { id: 'sitter', name: 'Pet Sitters', icon: '🤗' },
    { id: 'rental', name: 'Animal Rental', icon: '🐕' },
    { id: 'doctors', name: 'Doctors', icon: '👨‍⚕️' },
    { id: 'emergency', name: 'Emergency', icon: '🚨' }
  ];

  const renderServiceCard = (service) => (
    <div key={service.id} className="service-card">
      <div className="service-header">
        <h3>{service.name || service.businessName}</h3>
        {service.rating && (
          <div className="rating">
            ⭐ {service.rating.toFixed(1)} ({service.reviewCount} reviews)
          </div>
        )}
      </div>
      <p>{service.description}</p>
      <div className="service-details">
        <span className="price">₹{service.price || 'Contact for pricing'}</span>
        {service.isHomeService && <span className="badge">Home Service</span>}
        {service.isEmergencyService && <span className="badge emergency">Emergency</span>}
      </div>
      <button className="btn btn-primary">Book Now</button>
    </div>
  );

  if (loading) {
    return (
      <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2>Loading services...</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <h1>Pet Care Services</h1>
      
      {/* Service Categories */}
      <div className="service-tabs">
        {serviceCategories.map(category => (
          <button
            key={category.id}
            className={`tab-btn ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            <span className="tab-icon">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Service Content */}
      <div className="service-content">
        {activeTab === 'home' && (
          <div>
            <h2>🏠 Home Services</h2>
            <p>Professional pet care services at your doorstep</p>
            <div className="services-grid">
              {offerings.filter(s => s.isHomeService).map(renderServiceCard)}
              {offerings.filter(s => s.isHomeService).length === 0 && (
                <div className="no-services">
                  <h3>Home Services Coming Soon!</h3>
                  <p>We're working on bringing the best home services to you.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div>
            <h2>🏥 Health Check Services</h2>
            <p>Comprehensive health checkups for your pets</p>
            <div className="services-grid">
              {offerings.filter(s => s.type === 1).map(renderServiceCard)}
              <div className="service-card featured">
                <h3>🩺 Complete Health Checkup</h3>
                <p>Comprehensive examination including blood tests, vaccination status, and health report</p>
                <div className="service-details">
                  <span className="price">₹1,500</span>
                  <span className="badge">Home Service Available</span>
                </div>
                <button className="btn btn-primary">Book Health Check</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sitter' && (
          <div>
            <h2>🤗 Pet Sitters & Caretakers</h2>
            <p>Trusted pet sitters and caretakers for when you're away</p>
            <div className="services-grid">
              <div className="service-card featured">
                <h3>🏠 In-Home Pet Sitting</h3>
                <p>Professional pet sitters stay at your home to care for your pets</p>
                <div className="service-details">
                  <span className="price">₹800/day</span>
                  <span className="badge">Background Verified</span>
                </div>
                <button className="btn btn-primary">Book Pet Sitter</button>
              </div>
              <div className="service-card">
                <h3>🚶 Dog Walking</h3>
                <p>Daily walks and exercise for your dogs by experienced walkers</p>
                <div className="service-details">
                  <span className="price">₹200/walk</span>
                  <span className="badge">GPS Tracking</span>
                </div>
                <button className="btn btn-primary">Book Walker</button>
              </div>
              <div className="service-card">
                <h3>🏡 Pet Boarding</h3>
                <p>Your pets stay with loving families in home environment</p>
                <div className="service-details">
                  <span className="price">₹600/night</span>
                  <span className="badge">Home Environment</span>
                </div>
                <button className="btn btn-primary">Find Boarding</button>
              </div>
              <div className="service-card">
                <h3>🕐 Hourly Care</h3>
                <p>Short-term pet care for appointments or quick outings</p>
                <div className="service-details">
                  <span className="price">₹150/hour</span>
                  <span className="badge">Min 2 Hours</span>
                </div>
                <button className="btn btn-primary">Book Care</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rental' && (
          <div>
            <h2>🐕 Animal Rental Services</h2>
            <p>Rent pets for events, companionship, or trial periods</p>
            <div className="services-grid">
              <div className="service-card">
                <h3>🐕 Dog Rental</h3>
                <p>Friendly dogs available for events, parties, or companionship</p>
                <div className="service-details">
                  <span className="price">₹500/day</span>
                  <span className="badge">Security Deposit Required</span>
                </div>
                <button className="btn btn-primary">View Available Dogs</button>
              </div>
              <div className="service-card">
                <h3>🐱 Cat Rental</h3>
                <p>Calm and friendly cats for therapeutic companionship</p>
                <div className="service-details">
                  <span className="price">₹300/day</span>
                  <span className="badge">Min 3 Days</span>
                </div>
                <button className="btn btn-primary">View Available Cats</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'doctors' && (
          <div>
            <h2>👨‍⚕️ Veterinary Doctors</h2>
            <p>Certified veterinarians for your pet's medical needs</p>
            <div className="services-grid">
              {providers.filter(p => p.category === 1).map(provider => (
                <div key={provider.id} className="doctor-card">
                  <div className="doctor-info">
                    <h3>Dr. {provider.user.name}</h3>
                    <p>{provider.businessName}</p>
                    <div className="rating">
                      ⭐ {provider.rating?.toFixed(1) || 'New'} 
                      ({provider.reviewCount} reviews)
                    </div>
                    {provider.isVerified && <span className="badge verified">✓ Verified</span>}
                  </div>
                  <div className="doctor-services">
                    <p>{provider.description}</p>
                    <div className="service-buttons">
                      <button className="btn btn-primary">Book Consultation</button>
                      <button className="btn btn-secondary">Home Visit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'emergency' && (
          <div>
            <h2>🚨 Emergency Services</h2>
            <p>24/7 emergency care for your pets</p>
            <div className="emergency-services">
              <div className="emergency-card urgent">
                <h3>🚨 Emergency Hotline</h3>
                <p>Call now for immediate assistance</p>
                <div className="emergency-contact">
                  <a href="tel:+911234567890" className="btn btn-danger">
                    📞 Call Emergency: +91 12345 67890
                  </a>
                </div>
              </div>
              <div className="services-grid">
                {offerings.filter(s => s.isEmergencyService).map(renderServiceCard)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;