import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

function MyBookings({ onBack }) {
  const { bookings } = useContext(BookingContext);

  return (
    <div className="my-bookings">
      <div className="bookings-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>📋 My Bookings</h1>
      </div>

      <div className="bookings-container">
        {bookings.length === 0 ? (
          <div className="no-bookings">
            <p>No bookings yet.</p>
            <p>Book an event to see your reservations here!</p>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map(booking => (
              <div key={booking.id} className="booking-card">
                <div className="booking-event">
                  <div className="booking-emoji">{booking.event.image}</div>
                  <div className="booking-event-info">
                    <h3>{booking.event.name}</h3>
                    <p className="booking-date">📅 {booking.event.date} at {booking.event.time}</p>
                    <p className="booking-location">📍 {booking.event.location}</p>
                  </div>
                </div>

                <div className="booking-details">
                  <div className="detail-item">
                    <span className="label">Tickets:</span>
                    <span>{booking.ticketCount}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Total:</span>
                    <span>${booking.totalPrice}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Booked On:</span>
                    <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="booking-customer">
                  <p><strong>{booking.customerInfo.fullName}</strong></p>
                  <p>{booking.customerInfo.email}</p>
                  <p>{booking.customerInfo.phone}</p>
                </div>

                <div className="booking-status">
                  <span className="status confirmed">✓ Confirmed</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
