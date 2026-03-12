import React, { useState, useContext } from 'react';
import { eventsData } from '../data/eventsData';
import { BookingContext } from '../context/BookingContext';

function EventDashboard({ onSelectEvent, onViewBookings, onViewCart }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const { getCartItemCount } = useContext(BookingContext);

  const categories = ['All', ...new Set(eventsData.map(e => e.category))];
  
  const filteredEvents = filterCategory === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === filterCategory);

  const getAvailableSeats = (event) => event.totalSeats - event.bookedSeats;

  const getAvailabilityStatus = (event) => {
    const available = getAvailableSeats(event);
    if (available === 0) return 'Sold Out';
    if (available < 50) return 'Limited';
    return 'Available';
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>🎉 Event Booking System</h1>
        <p>Find and book your favorite events</p>
        <div className="header-buttons">
          <button className="view-bookings-btn" onClick={onViewBookings}>
            📋 View My Bookings
          </button>
          <button className="view-cart-btn" onClick={onViewCart}>
            🛒 Cart ({getCartItemCount()})
          </button>
        </div>
      </div>

      <div className="filters">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="events-grid">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">{event.image}</div>
            <div className="event-content">
              <h2>{event.name}</h2>
              <p className="event-category">{event.category}</p>
              <p className="event-date">📅 {event.date} at {event.time}</p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-description">{event.description}</p>
              
              <div className="event-info">
                <span className="price">₹{event.price.toLocaleString('en-IN')}</span>
                <span className={`availability ${getAvailabilityStatus(event).toLowerCase()}`}>
                  {getAvailableSeats(event)} seats available
                </span>
              </div>

              <div className="event-seats-info">
                <div className="seats-bar">
                  <div 
                    className="seats-booked" 
                    style={{width: `${(event.bookedSeats / event.totalSeats) * 100}%`}}
                  ></div>
                </div>
                <small>{event.bookedSeats} of {event.totalSeats} booked</small>
              </div>

              <div className="event-actions">
                <button 
                  className="book-btn"
                  onClick={() => onSelectEvent(event)}
                  disabled={getAvailableSeats(event) === 0}
                >
                  {getAvailableSeats(event) === 0 ? 'Sold Out' : 'Book Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDashboard;
