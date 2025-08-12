import React, { useState, useEffect } from 'react';
import ServiceBooking from '../components/ServiceBooking';
import { getUserBookings } from '../services/api';

const ServiceCenter = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [bookings, setBookings] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserBookings();
  }, []);

  const fetchUserBookings = async () => {
    try {
      setLoading(true);
      // TODO: Get actual user ID from auth
      const userId = 1;
      const data = await getUserBookings(userId);
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const quickServices = [
    {
      id: 1,
      name: 'Emergency Vet Call',
      icon: '🚨',
      price: 2000,
      description: '24/7 emergency veterinary consultation',
      isEmergencyService: true,
      duration: 30
    },
    {
      id: 2,
      name: 'Home Health Check',
      icon: '🏠',
      price: 1500,
      description: 'Complete health checkup at your home',
      isHomeService: true,
      duration: 60
    },
    {
      id: 3,
      name: 'Pet Grooming',
      icon: '✂️',
      price: 800,
      description: 'Professional grooming service',
      isHomeService: true,
      duration: 90
    },
    {
      id: 4,
      name: 'Dog Walking',
      icon: '🚶',
      price: 300,
      description: 'Daily dog walking service',
      isHomeService: false,
      duration: 30
    }
  ];

  const handleQuickBook = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  const handleBookingSuccess = (message) => {
    alert(message);
    fetchUserBookings();
  };

  const getStatusColor = (status) => {
    const colors = {
      1: '#ffc107', // Pending
      2: '#28a745', // Confirmed
      3: '#17a2b8', // InProgress
      4: '#6c757d', // Completed
      5: '#dc3545', // Cancelled
      6: '#fd7e14'  // Rescheduled
    };
    return colors[status] || '#6c757d';
  };

  const getStatusText = (status) => {
    const texts = {
      1: 'Pending',
      2: 'Confirmed',
      3: 'In Progress',
      4: 'Completed',
      5: 'Cancelled',
      6: 'Rescheduled'
    };
    return texts[status] || 'Unknown';
  };

  return (
    <div className="service-center">
      <div className="container" style={{ padding: '50px 0' }}>
        <h1>🎯 Service Center</h1>
        
        {/* Quick Action Buttons */}
        <div className="quick-actions">
          <h2>Quick Services</h2>
          <div className="quick-services-grid">
            {quickServices.map(service => (
              <div key={service.id} className="quick-service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-price">₹{service.price}</div>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleQuickBook(service)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="service-categories">
          <h2>Service Categories</h2>
          <div className="category-grid">
            <div className="category-card" onClick={() => setActiveSection('health')}>
              <div className="category-icon">🏥</div>
              <h3>Health Services</h3>
              <p>Checkups, vaccinations, treatments</p>
            </div>
            <div className="category-card" onClick={() => setActiveSection('grooming')}>
              <div className="category-icon">✂️</div>
              <h3>Grooming</h3>
              <p>Professional pet grooming</p>
            </div>
            <div className="category-card" onClick={() => setActiveSection('training')}>
              <div className="category-icon">🎓</div>
              <h3>Training</h3>
              <p>Behavior training and obedience</p>
            </div>
            <div className="category-card" onClick={() => setActiveSection('boarding')}>
              <div className="category-icon">🏠</div>
              <h3>Boarding</h3>
              <p>Pet boarding and day care</p>
            </div>
          </div>
        </div>

        {/* My Bookings */}
        <div className="my-bookings">
          <h2>My Recent Bookings</h2>
          {loading ? (
            <p>Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <div className="no-bookings">
              <p>No bookings yet. Book your first service above!</p>
            </div>
          ) : (
            <div className="bookings-list">
              {bookings.slice(0, 5).map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-info">
                    <h4>{booking.serviceOffering.name}</h4>
                    <p>Provider: {booking.serviceProvider.businessName}</p>
                    <p>Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                    <p>Time: {booking.bookingTime}</p>
                  </div>
                  <div className="booking-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(booking.status) }}
                    >
                      {getStatusText(booking.status)}
                    </span>
                    <div className="booking-amount">₹{booking.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Emergency Contact */}
        <div className="emergency-section">
          <div className="emergency-banner">
            <h2>🚨 Emergency Services</h2>
            <p>Need immediate help? Our emergency services are available 24/7</p>
            <div className="emergency-actions">
              <a href="tel:+911234567890" className="btn btn-danger">
                📞 Emergency Call
              </a>
              <button 
                className="btn btn-warning"
                onClick={() => handleQuickBook(quickServices[0])}
              >
                🚨 Book Emergency Vet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <ServiceBooking
          service={selectedService}
          onClose={() => setShowBookingModal(false)}
          onSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
};

export default ServiceCenter;