import React, { useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    { id: 'general', name: '🏠 General', icon: '🏠' },
    { id: 'animals', name: '🐕 Animals', icon: '🐕' },
    { id: 'services', name: '🏥 Services', icon: '🏥' },
    { id: 'payments', name: '💳 Payments', icon: '💳' },
    { id: 'account', name: '👤 Account', icon: '👤' },
    { id: 'emergency', name: '🚨 Emergency', icon: '🚨' }
  ];

  const faqData = {
    general: [
      {
        id: 1,
        question: "What is PetBond?",
        answer: "PetBond is India's most trusted pet marketplace and service platform. We connect pet lovers with verified sellers, professional veterinarians, and quality pet care services all in one place."
      },
      {
        id: 2,
        question: "How do I create an account?",
        answer: "Click 'Register' in the top menu, fill in your details, choose your role (Buyer/Seller/Veterinarian), and verify your email. It's completely free to join!"
      },
      {
        id: 3,
        question: "Is PetBond available in my city?",
        answer: "We currently serve 25+ major cities across India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, and more. Check our service areas on the homepage."
      },
      {
        id: 4,
        question: "How do I contact customer support?",
        answer: "You can reach us via email (support@petbond.com), phone (+91 12345 67890), live chat on our website, or submit a help request through our Help Center."
      }
    ],
    animals: [
      {
        id: 5,
        question: "How do I buy an animal?",
        answer: "Browse our Animals section, use filters to find your perfect pet, click 'Contact Seller' on any listing, and connect directly with verified sellers. Always meet the pet before finalizing."
      },
      {
        id: 6,
        question: "Are all animals health-checked?",
        answer: "We require sellers to provide health certificates and vaccination records. However, we recommend getting an independent vet checkup before purchase for your peace of mind."
      },
      {
        id: 7,
        question: "Can I return an animal if there are issues?",
        answer: "Animal sales are generally final, but if there are undisclosed health issues within 7 days, we'll help mediate with the seller. Always inspect thoroughly before purchase."
      },
      {
        id: 8,
        question: "How do I sell my pet?",
        answer: "Create a seller account, click 'Add Listing' in Animals section, upload clear photos, provide detailed information including health records, and set your price. We'll verify and publish your listing."
      }
    ],
    services: [
      {
        id: 9,
        question: "How do I book a veterinary service?",
        answer: "Go to Services → Doctors, select a veterinarian, choose consultation type (online/home visit), pick date and time, provide pet details, and confirm booking. You'll receive confirmation via email/SMS."
      },
      {
        id: 10,
        question: "What services do you offer?",
        answer: "We offer veterinary consultations, home health checkups, grooming, training, boarding, pet sitting, emergency care, and specialized treatments. All services are provided by certified professionals."
      },
      {
        id: 11,
        question: "Can I cancel or reschedule a booking?",
        answer: "Yes, you can cancel or reschedule up to 4 hours before the appointment through your Service Center dashboard. Cancellation fees may apply based on the service type."
      },
      {
        id: 12,
        question: "Do you provide emergency services?",
        answer: "Yes! Our emergency hotline (+91 98765 43210) is available 24/7. We have a network of emergency veterinarians who can provide immediate assistance or home visits."
      }
    ],
    payments: [
      {
        id: 13,
        question: "What payment methods do you accept?",
        answer: "We accept UPI, Credit/Debit cards, Net Banking, Wallets (Paytm, PhonePe), and Cash on Delivery for eligible services. All payments are processed securely."
      },
      {
        id: 14,
        question: "Are there any service fees?",
        answer: "We charge a small service fee (2-5%) on transactions to maintain our platform and ensure quality. Fees are clearly displayed before payment confirmation."
      },
      {
        id: 15,
        question: "How do refunds work?",
        answer: "Refunds are processed within 5-7 business days to your original payment method. Service cancellations may have different refund policies based on timing and service type."
      },
      {
        id: 16,
        question: "Is my payment information secure?",
        answer: "Absolutely! We use bank-grade encryption and never store your card details. All payments are processed through certified payment gateways like Razorpay and Stripe."
      }
    ],
    account: [
      {
        id: 17,
        question: "How do I update my profile?",
        answer: "Log in to your account, click on your profile picture/name in the top menu, select 'Edit Profile', make your changes, and save. You can update personal info, address, and preferences."
      },
      {
        id: 18,
        question: "I forgot my password. What should I do?",
        answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a reset link. Follow the instructions in the email to create a new password."
      },
      {
        id: 19,
        question: "Can I change my account type?",
        answer: "Yes, you can upgrade from Buyer to Seller or apply to become a Veterinarian through your account settings. Some changes may require verification of credentials."
      },
      {
        id: 20,
        question: "How do I delete my account?",
        answer: "Contact our support team at support@petbond.com with your account deletion request. We'll process it within 48 hours after confirming your identity and settling any pending transactions."
      }
    ],
    emergency: [
      {
        id: 21,
        question: "What constitutes a pet emergency?",
        answer: "Difficulty breathing, severe bleeding, unconsciousness, seizures, suspected poisoning, severe vomiting/diarrhea, inability to urinate, or any life-threatening condition requires immediate attention."
      },
      {
        id: 22,
        question: "How quickly can I get emergency help?",
        answer: "Our emergency hotline connects you immediately with on-call veterinarians. For home visits, we aim to reach you within 30-60 minutes in major cities, depending on location and availability."
      },
      {
        id: 23,
        question: "What should I do while waiting for emergency help?",
        answer: "Keep your pet calm and warm, don't give food or water unless instructed, apply gentle pressure to bleeding wounds, and follow any specific instructions given by our emergency team over the phone."
      },
      {
        id: 24,
        question: "Are emergency services available 24/7?",
        answer: "Yes, our emergency hotline (+91 98765 43210) operates 24/7/365. We have a network of emergency veterinarians and partner clinics to ensure help is always available."
      }
    ]
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const filteredFAQs = faqData[activeCategory].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div className="faq-page">
        <div className="faq-header">
          <h1>❓ Frequently Asked Questions</h1>
          <p>Find answers to common questions about PetBond services</p>
        </div>

        {/* Search Bar */}
        <div className="faq-search">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="faq-categories">
          {faqCategories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="faq-content">
          <div className="faq-list">
            {filteredFAQs.length === 0 ? (
              <div className="no-results">
                <h3>No FAQs found</h3>
                <p>Try searching with different keywords or browse other categories.</p>
              </div>
            ) : (
              filteredFAQs.map(faq => (
                <div key={faq.id} className="faq-item">
                  <div 
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <span className={`faq-toggle ${openFAQ === faq.id ? 'open' : ''}`}>
                      {openFAQ === faq.id ? '−' : '+'}
                    </span>
                  </div>
                  {openFAQ === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="quick-help-section">
          <h2>Still Need Help?</h2>
          <div className="help-options">
            <div className="help-option">
              <div className="help-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 12345 67890</p>
              <button className="btn btn-primary">Call Now</button>
            </div>
            
            <div className="help-option">
              <div className="help-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Chat with our support team</p>
              <button className="btn btn-primary">Start Chat</button>
            </div>
            
            <div className="help-option">
              <div className="help-icon">📧</div>
              <h3>Email Support</h3>
              <p>support@petbond.com</p>
              <button className="btn btn-primary">Send Email</button>
            </div>
            
            <div className="help-option emergency">
              <div className="help-icon">🚨</div>
              <h3>Emergency</h3>
              <p>24/7 Pet Emergency</p>
              <button className="btn btn-danger">Emergency Call</button>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="popular-topics">
          <h2>Popular Topics</h2>
          <div className="topics-grid">
            <div className="topic-card" onClick={() => setActiveCategory('animals')}>
              <span className="topic-icon">🐕</span>
              <h3>Buying Pets</h3>
              <p>How to find and purchase your perfect companion</p>
            </div>
            
            <div className="topic-card" onClick={() => setActiveCategory('services')}>
              <span className="topic-icon">🏥</span>
              <h3>Vet Services</h3>
              <p>Booking appointments and health checkups</p>
            </div>
            
            <div className="topic-card" onClick={() => setActiveCategory('payments')}>
              <span className="topic-icon">💳</span>
              <h3>Payments</h3>
              <p>Payment methods, fees, and refunds</p>
            </div>
            
            <div className="topic-card" onClick={() => setActiveCategory('emergency')}>
              <span className="topic-icon">🚨</span>
              <h3>Emergency Care</h3>
              <p>24/7 emergency services and what to do</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;