import React, { useState } from 'react';
import './App.css';
import { BookingProvider } from './context/BookingContext';
import { eventsData } from './data/eventsData';
import EventDashboard from './components/EventDashboard';
import EventDetails from './components/EventDetails';
import TicketBooking from './components/TicketBooking';
import BookingConfirmation from './components/BookingConfirmation';
import MyBookings from './components/MyBookings';
import Cart from './components/Cart';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentBooking, setCurrentBooking] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setCurrentView('eventDetails');
  };

  const handleBookNow = () => {
    setCurrentView('ticketBooking');
  };

  const handleConfirmBooking = (booking) => {
    setCurrentBooking(booking);
    setCurrentView('confirmation');
  };

  const handleBackToBookings = () => {
    setCurrentBooking(null);
    setSelectedEvent(null);
    setCurrentView('dashboard');
  };

  const handleViewMyBookings = () => {
    setCurrentView('myBookings');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleViewCart = () => {
    setCurrentView('cart');
  };

  const handleCheckout = () => {
    setCurrentView('confirmation');
  };

  return (
    <BookingProvider>
      <div className="App">
        {currentView === 'dashboard' && (
          <EventDashboard 
            onSelectEvent={handleSelectEvent}
            onViewBookings={handleViewMyBookings}
            onViewCart={handleViewCart}
          />
        )}

        {currentView === 'eventDetails' && selectedEvent && (
          <EventDetails 
            event={selectedEvent}
            onBookNow={handleBookNow}
            onBack={handleBackToDashboard}
          />
        )}

        {currentView === 'ticketBooking' && selectedEvent && (
          <TicketBooking 
            event={selectedEvent}
            onConfirmBooking={handleConfirmBooking}
            onBack={() => setCurrentView('eventDetails')}
          />
        )}

        {currentView === 'confirmation' && currentBooking && (
          <BookingConfirmation 
            booking={currentBooking}
            onComplete={handleBackToBookings}
          />
        )}

        {currentView === 'myBookings' && (
          <MyBookings 
            onBack={handleBackToDashboard}
          />
        )}

        {currentView === 'cart' && (
          <Cart 
            onCheckout={handleCheckout}
            onBack={handleBackToDashboard}
          />
        )}
      </div>
    </BookingProvider>
  );
}

export default App;
