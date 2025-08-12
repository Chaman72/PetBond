import React, { useState } from 'react';

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Dry Dog Food",
      price: 999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=100&h=100&fit=crop"
    },
    {
      id: 16,
      name: "Dog Winter Sweater",
      price: 649,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=100&h=100&fit=crop"
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="item-total">₹{item.price * item.quantity}</div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ₹{total.toLocaleString()}</strong>
            </div>
            <button className="btn btn-primary checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;