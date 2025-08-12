import React, { useState } from 'react';

const HelpCenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    problem: '',
    priority: 'medium'
  });
  const [submitted, setSubmitted] = useState(false);

  const problemCategories = [
    { value: '', label: 'Select Problem Category' },
    { value: 'account', label: '👤 Account Issues' },
    { value: 'payment', label: '💳 Payment Problems' },
    { value: 'booking', label: '📅 Booking Issues' },
    { value: 'animal', label: '🐕 Animal Related' },
    { value: 'service', label: '🏥 Service Problems' },
    { value: 'technical', label: '🔧 Technical Issues' },
    { value: 'other', label: '❓ Other' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Help request submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ padding: '50px 0' }}>
        <div className="help-success">
          <div className="success-icon">✅</div>
          <h2>Help Request Submitted Successfully!</h2>
          <p>Thank you for contacting us. We've received your request and will get back to you within 24 hours.</p>
          <div className="ticket-info">
            <p><strong>Ticket ID:</strong> #PB{Date.now().toString().slice(-6)}</p>
            <p><strong>Category:</strong> {problemCategories.find(cat => cat.value === formData.category)?.label}</p>
            <p><strong>Priority:</strong> {formData.priority.toUpperCase()}</p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={() => setSubmitted(false)}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div className="help-center">
        <h1>🆘 Help Center</h1>
        <p>Having trouble? We're here to help! Fill out the form below and our support team will assist you.</p>

        {/* Quick Help Options */}
        <div className="quick-help">
          <h3>Quick Help</h3>
          <div className="help-options">
            <div className="help-option">
              <h4>📞 Emergency Support</h4>
              <p>For urgent pet emergencies</p>
              <a href="tel:+911234567890" className="btn btn-danger">Call Now</a>
            </div>
            <div className="help-option">
              <h4>💬 Live Chat</h4>
              <p>Chat with our support team</p>
              <button className="btn btn-primary">Start Chat</button>
            </div>
            <div className="help-option">
              <h4>📧 Email Support</h4>
              <p>Send us an email</p>
              <a href="mailto:support@petbond.com" className="btn btn-secondary">Email Us</a>
            </div>
          </div>
        </div>

        {/* Help Request Form */}
        <div className="help-form-container">
          <h3>Submit a Help Request</h3>
          <form onSubmit={handleSubmit} className="help-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label>Problem Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {problemCategories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
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
                placeholder="Brief description of your problem"
              />
            </div>

            <div className="form-group">
              <label>Problem Description *</label>
              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Please describe your problem in detail. Include any error messages, steps you took, and what you expected to happen."
              />
            </div>

            <div className="form-group">
              <label>Priority Level</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">🟢 Low - General inquiry</option>
                <option value="medium">🟡 Medium - Issue affecting usage</option>
                <option value="high">🟠 High - Urgent issue</option>
                <option value="critical">🔴 Critical - Emergency</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Submit Help Request
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I book a service?</h4>
              <p>Go to Services page, select your desired service, and click "Book Now" to schedule.</p>
            </div>
            <div className="faq-item">
              <h4>How can I contact a seller?</h4>
              <p>Click "Contact Seller" on any animal listing to get their contact information.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept UPI, Credit/Debit cards, Net Banking, and Cash on Delivery.</p>
            </div>
            <div className="faq-item">
              <h4>How do I cancel a booking?</h4>
              <p>Go to your Service Center dashboard and click "Cancel" on the booking you want to cancel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;