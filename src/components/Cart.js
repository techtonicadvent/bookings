import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

function Cart({ onCheckout, onBack }) {
  const { cart, removeFromCart, updateCartItemQuantity, getCartTotal, getCartItemCount } = useContext(BookingContext);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <div className="cart-header">
          <button className="back-btn" onClick={onBack}>← Back</button>
          <h1>🛒 Shopping Cart</h1>
        </div>
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <button className="back-btn" onClick={onBack}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>🛒 Shopping Cart</h1>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.event.id} className="cart-item">
              <div className="cart-item-image">{item.event.image}</div>
              <div className="cart-item-details">
                <h3>{item.event.name}</h3>
                <p className="cart-item-date">📅 {item.event.date} at {item.event.time}</p>
                <p className="cart-item-location">📍 {item.event.location}</p>
                <div className="cart-item-price">
                  <span>₹{item.event.price.toLocaleString('en-IN')} per ticket</span>
                  <span className="cart-item-subtotal">Subtotal: ₹{(item.event.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button 
                    onClick={() => updateCartItemQuantity(item.event.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    −
                  </button>
                  <input 
                    type="number" 
                    value={item.quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      if (val > 0) updateCartItemQuantity(item.event.id, val);
                    }}
                    className="quantity-input"
                    min="1"
                  />
                  <button 
                    onClick={() => updateCartItemQuantity(item.event.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.event.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-header">
            <h2>Order Summary</h2>
          </div>
          <div className="summary-row">
            <span>Total Items:</span>
            <strong>{getCartItemCount()}</strong>
          </div>
          <div className="summary-row">
            <span>Subtotal:</span>
            <strong>₹{getCartTotal().toLocaleString('en-IN')}</strong>
          </div>
          <div className="summary-row">
            <span>Tax (5%):</span>
            <strong>₹{Math.round(getCartTotal() * 0.05).toLocaleString('en-IN')}</strong>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <strong>₹{Math.round(getCartTotal() * 1.05).toLocaleString('en-IN')}</strong>
          </div>
          <button className="checkout-btn" onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
