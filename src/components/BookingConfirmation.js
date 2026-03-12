import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

function BookingConfirmation({ booking, onComplete }) {
  const { addBooking } = useContext(BookingContext);

  const handleConfirmBooking = () => {
    addBooking(booking);
    handleDownloadTicket();
    setTimeout(onComplete, 2000);
  };

  const handleDownloadTicket = () => {
    const ticketContent = `
======================================
        BOOKING CONFIRMATION
======================================
Booking Reference: ${Date.now()}
Date: ${new Date().toLocaleDateString()}

EVENT DETAILS:
${booking.event.name}
${booking.event.date} at ${booking.event.time}
${booking.event.location}

BOOKING DETAILS:
Number of Tickets: ${booking.ticketCount}
Price per Ticket: ₹${booking.event.price.toLocaleString('en-IN')}
Total Amount: ₹${booking.totalPrice.toLocaleString('en-IN')}

CUSTOMER INFORMATION:
Name: ${booking.customerInfo.fullName}
Email: ${booking.customerInfo.email}
Phone: ${booking.customerInfo.phone}

✓ Booking Confirmed
Confirmation email sent to ${booking.customerInfo.email}

======================================
    Thank you for your booking!
======================================
    `;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ticketContent));
    element.setAttribute('download', `booking_${Date.now()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="booking-confirmation">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <div className="success-icon">✅</div>
          <h1>Booking Confirmed!</h1>
          <p>Your tickets have been successfully booked</p>
        </div>

        <div className="confirmation-details">
          <div className="detail-section">
            <h2>Event Details</h2>
            <div className="detail-row">
              <span className="label">Event:</span>
              <span>{booking.event.name}</span>
            </div>
            <div className="detail-row">
              <span className="label">Date:</span>
              <span>{booking.event.date}</span>
            </div>
            <div className="detail-row">
              <span className="label">Time:</span>
              <span>{booking.event.time}</span>
            </div>
            <div className="detail-row">
              <span className="label">Location:</span>
              <span>{booking.event.location}</span>
            </div>
          </div>

          <div className="detail-section">
            <h2>Booking Details</h2>
            <div className="detail-row">
              <span className="label">Tickets:</span>
              <span>{booking.ticketCount}</span>
            </div>
            <div className="detail-row">
              <span className="label">Price per Ticket:</span>
              <span>₹{booking.event.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="detail-row total">
              <span className="label">Total Amount:</span>
              <span className="amount">₹{booking.totalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="detail-section">
            <h2>Confirmation Sent To</h2>
            <div className="detail-row">
              <span className="label">Name:</span>
              <span>{booking.customerInfo.fullName}</span>
            </div>
            <div className="detail-row">
              <span className="label">Email:</span>
              <span>{booking.customerInfo.email}</span>
            </div>
            <div className="detail-row">
              <span className="label">Phone:</span>
              <span>{booking.customerInfo.phone}</span>
            </div>
          </div>

          <div className="confirmation-reference">
            <p>Booking Reference: <strong>{Date.now()}</strong></p>
            <small>A confirmation email with your e-tickets has been sent</small>
          </div>
        </div>

        <div className="confirmation-actions">
          <button className="download-btn" onClick={handleDownloadTicket}>
            📥 Download Ticket
          </button>
          <button className="complete-btn" onClick={handleConfirmBooking}>
            ✓ Back to Dashboard
          </button>
        </div>

        <div className="confirmation-notice">
          <p>📌 <strong>Important:</strong> Please keep your booking reference for check-in at the event.</p>
          <p>📧 Check your email for detailed booking information and e-tickets.</p>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
