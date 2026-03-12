import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [cart, setCart] = useState([]);

  const addBooking = (booking) => {
    const newBooking = {
      id: Date.now(),
      ...booking,
      bookingDate: new Date().toISOString()
    };
    setBookings([...bookings, newBooking]);
    setCurrentBooking(newBooking);
    return newBooking;
  };

  const getBookingById = (id) => bookings.find(b => b.id === id);

  const addToCart = (event, quantity) => {
    const existingItem = cart.find(item => item.event.id === event.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.event.id === event.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { event, quantity }]);
    }
  };

  const removeFromCart = (eventId) => {
    setCart(cart.filter(item => item.event.id !== eventId));
  };

  const updateCartItemQuantity = (eventId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(eventId);
    } else {
      setCart(cart.map(item =>
        item.event.id === eventId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.event.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    bookings,
    currentBooking,
    setCurrentBooking,
    addBooking,
    getBookingById,
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
