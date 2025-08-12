import React, { useState } from 'react';
import { createServiceBooking } from '../services/api';

const ServiceBooking = ({ service, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    bookingDate: '',
    bookingTime: '',
    notes: '',
    address: '',
    animalId: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const bookingData = {
        serviceOfferingId: service.id,
        bookingDate: formData.bookingDate,
        bookingTime: formData.bookingTime,
        notes: formData.notes,
        address: service.isHomeService ? formData.address : null,
        animalId: formData.animalId || null
      };

      await createServiceBooking(bookingData);
      onSuccess('Booking created successfully!');
      onClose();
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="booking-modal">
      <div className="booking-content">
        <div className="booking-header">
          <h2>Book Service</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="service-summary">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <div className="service-details">
            <span className="price">₹{service.price}</span>
            <span className="duration">{service.duration} minutes</span>
            {service.isHomeService && <span className="badge">Home Service</span>}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Booking Date:</label>
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="form-group">
            <label>Preferred Time:</label>
            <input
              type="time"
              name="bookingTime"
              value={formData.bookingTime}
              onChange={handleChange}
              required
            />
          </div>

          {service.isHomeService && (
            <div className="form-group">
              <label>Service Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows="3"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Special Notes:</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requirements or notes"
              rows="3"
            />
          </div>

          <div className="booking-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Booking...' : `Book for ₹${service.price}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceBooking;