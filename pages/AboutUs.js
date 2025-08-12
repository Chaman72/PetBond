import React from 'react';

const AboutUs = () => {
  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div className="about-us">
        <div className="hero-section">
          <h1>🐾 About PetBond</h1>
          <p className="hero-text">Connecting pet lovers with trusted services and companions since 2024</p>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At PetBond, we believe every pet deserves love, care, and a happy home. Our mission is to create 
            a trusted platform that connects pet lovers, sellers, and service providers to ensure the best 
            care for our furry, feathered, and scaled friends.
          </p>
        </div>

        <div className="story-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, PetBond started as a simple idea: make it easier for people to find pets, 
            pet products, and professional pet services all in one place. What began as a small project 
            has grown into India's most trusted pet marketplace and service platform.
          </p>
          <p>
            We understand that pets are family members, not just animals. That's why we've built a platform 
            that prioritizes safety, trust, and the well-being of all animals in our community.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Animal Welfare</h3>
              <p>Every decision we make prioritizes the health, safety, and happiness of animals.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust & Safety</h3>
              <p>We verify all sellers and service providers to ensure safe transactions and quality care.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We strive to provide the best user experience and highest quality services.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Community</h3>
              <p>Building a supportive community of pet lovers across India.</p>
            </div>
          </div>
        </div>

        <div className="services-overview">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>🐕 Pet Marketplace</h3>
              <p>Find your perfect companion from verified sellers across India.</p>
            </div>
            <div className="service-item">
              <h3>🛍️ Pet Products</h3>
              <p>Everything your pet needs - food, toys, accessories, and more.</p>
            </div>
            <div className="service-item">
              <h3>🏥 Veterinary Services</h3>
              <p>Connect with certified veterinarians for health checkups and treatments.</p>
            </div>
            <div className="service-item">
              <h3>🏠 Home Services</h3>
              <p>Professional pet care services delivered to your doorstep.</p>
            </div>
            <div className="service-item">
              <h3>🎓 Training & Grooming</h3>
              <p>Expert training and grooming services for your pets.</p>
            </div>
            <div className="service-item">
              <h3>🚨 Emergency Care</h3>
              <p>24/7 emergency support for urgent pet care needs.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <p>
            PetBond is powered by a passionate team of pet lovers, veterinarians, and technology experts 
            who are dedicated to improving the lives of pets and their families.
          </p>
          <div className="team-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Verified Vets</p>
            </div>
            <div className="stat">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Cities Served</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p>info@petbond.com</p>
            </div>
            <div className="contact-item">
              <h4>📞 Phone</h4>
              <p>+91 12345 67890</p>
            </div>
            <div className="contact-item">
              <h4>📍 Address</h4>
              <p>123 Pet Street, Animal City, India 110001</p>
            </div>
            <div className="contact-item">
              <h4>🕒 Support Hours</h4>
              <p>24/7 for emergencies<br/>9 AM - 9 PM for general support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;