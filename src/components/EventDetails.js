import React from 'react';

function EventDetails({ event, onBookNow, onBack }) {
  const availableSeats = event.totalSeats - event.bookedSeats;
  const bookingPercentage = (event.bookedSeats / event.totalSeats) * 100;

  return (
    <div className="event-details">
      <button className="back-btn" onClick={onBack}>← Back</button>
      
      <div className="details-container">
        <div className="details-image">
          <div className="large-image">{event.image}</div>
        </div>

        <div className="details-info">
          <div className="details-category">{event.category}</div>
          <h1>{event.name}</h1>
          
          <div className="details-meta">
            <div className="meta-item">
              <span className="label">📅 Date:</span>
              <span>{event.date}</span>
            </div>
            <div className="meta-item">
              <span className="label">⏰ Time:</span>
              <span>{event.time}</span>
            </div>
            <div className="meta-item">
              <span className="label">📍 Location:</span>
              <span>{event.location}</span>
            </div>
            <div className="meta-item">
              <span className="label">💰 Price:</span>
              <span className="price">₹{event.price.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="details-description">
            <h2>About this event</h2>
            <p>{event.description}</p>
          </div>

          <div className="details-capacity">
            <h2>Available Seats</h2>
            <div className="capacity-info">
              <p className="capacity-text">
                <strong>{availableSeats} out of {event.totalSeats} seats available</strong>
              </p>
              <div className="capacity-bar">
                <div 
                  className="capacity-filled" 
                  style={{ width: `${bookingPercentage}%` }}
                ></div>
              </div>
              <p className="capacity-details">
                {event.bookedSeats} booked • {availableSeats} available
              </p>
            </div>
          </div>

          <div className="details-actions">
            {availableSeats > 0 ? (
              <button className="primary-btn" onClick={onBookNow}>
                🎟️ Book Tickets
              </button>
            ) : (
              <button className="primary-btn disabled">Sold Out</button>
            )}
          </div>

          <div className="details-notice">
            💡 <span>Limited seats available. Book soon to secure your spot!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
