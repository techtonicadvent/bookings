import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

function TicketBooking({ event, onConfirmBooking, onBack }) {
  const [ticketCount, setTicketCount] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const availableSeats = event.totalSeats - event.bookedSeats;
  const totalPrice = ticketCount * event.price;

  const handleTicketChange = (e) => {
    const count = parseInt(e.target.value);
    if (count > 0 && count <= availableSeats) {
      setTicketCount(count);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const booking = {
        event: event,
        ticketCount: ticketCount,
        totalPrice: totalPrice,
        customerInfo: formData
      };
      onConfirmBooking(booking);
    }
  };

  return (
    <div className="ticket-booking">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="booking-container">
        <div className="booking-event-summary">
          <h2>{event.name}</h2>
          <p>📅 {event.date} at {event.time}</p>
          <p>📍 {event.location}</p>
          <div className="price-per-ticket">
            <span>Price per ticket:</span>
            <span className="price">₹{event.price.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-section">
            <h3>Select Number of Tickets</h3>
            <div className="ticket-selection">
              <label htmlFor="ticketCount">Number of Tickets:</label>
              <select 
                id="ticketCount"
                value={ticketCount} 
                onChange={handleTicketChange}
                className="ticket-select"
              >
                {[...Array(Math.min(availableSeats, 10)).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} ticket{i + 1 > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              <small className="availability">
                ({availableSeats} seats available)
              </small>
            </div>
          </div>

          <div className="form-section">
            <h3>Attendee Information</h3>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={errors.fullName ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'error' : ''}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
          </div>

          <div className="booking-summary">
            <div className="summary-row">
              <span>{ticketCount} ticket{ticketCount > 1 ? 's' : ''} × ₹{event.price.toLocaleString('en-IN')}</span>
              <span>₹{(ticketCount * event.price).toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount</span>
              <span className="total-price">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button type="submit" className="confirm-btn">
            Proceed to Confirmation
          </button>
        </form>
      </div>
    </div>
  );
}

export default TicketBooking;
