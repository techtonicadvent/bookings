import React from 'react';

function EventListing({ events, onSelectEvent, onBack }) {
  return (
    <div className="event-listing">
      <div className="listing-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>All Events</h1>
      </div>

      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="listing-item">
            <div className="listing-image">{event.image}</div>
            <div className="listing-details">
              <h3>{event.name}</h3>
              <p className="category-badge">{event.category}</p>
              <p>📅 {event.date} | ⏰ {event.time}</p>
              <p>📍 {event.location}</p>
              <p className="description">{event.description}</p>
              <div className="listing-footer">
                <span className="price">₹{event.price.toLocaleString('en-IN')}</span>
                <button 
                  className="select-btn"
                  onClick={() => onSelectEvent(event)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventListing;
