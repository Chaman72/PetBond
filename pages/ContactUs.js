import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ padding: '50px 0' }}>
        <div className="contact-success">
          <div className="success-icon">📧</div>
          <h2>Message Sent Successfully!</h2>
          <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
          <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div className="contact-page">
        <div className="contact-header">
          <h1>📞 Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team!</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h3>Email Us</h3>
                  <p>support@petbond.com</p>
                  <p>Response time: 2-4 hours</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <h3>Call Us</h3>
                  <p>+91 12345 67890</p>
                  <p>Mon-Sun: 9 AM - 9 PM</p>
                </div>
              </div>
              
              <div className="contact-method emergency">
                <div className="method-icon">🚨</div>
                <div className="method-details">
                  <h3>Emergency Hotline</h3>
                  <p>+91 98765 43210</p>
                  <p>24/7 Pet Emergency</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-details">
                  <h3>Live Chat</h3>
                  <p>Available on website</p>
                  <p>Mon-Sun: 8 AM - 10 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                  >
                    <option value="email">📧 Email</option>
                    <option value="phone">📞 Phone Call</option>
                    <option value="whatsapp">💬 WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What can we help you with?"
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Office Locations */}
        <div className="office-locations">
          <h2>Our Offices</h2>
          <div className="locations-grid">
            <div className="location-card">
              <h3>🏢 Head Office</h3>
              <p><strong>Address:</strong> 123 Pet Street, Animal City, Mumbai 400001</p>
              <p><strong>Phone:</strong> +91 12345 67890</p>
              <p><strong>Hours:</strong> Mon-Fri 9 AM - 6 PM</p>
            </div>
            
            <div className="location-card">
              <h3>🏥 Veterinary Center</h3>
              <p><strong>Address:</strong> 456 Care Avenue, Pet Town, Delhi 110001</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Hours:</strong> 24/7 Emergency Services</p>
            </div>
            
            <div className="location-card">
              <h3>🛍️ Service Center</h3>
              <p><strong>Address:</strong> 789 Service Road, Bangalore 560001</p>
              <p><strong>Phone:</strong> +91 11111 22222</p>
              <p><strong>Hours:</strong> Mon-Sun 8 AM - 8 PM</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn emergency">
              <span className="action-icon">🚨</span>
              <span>Emergency Call</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">💬</span>
              <span>Start Live Chat</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📧</span>
              <span>Email Support</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📱</span>
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;