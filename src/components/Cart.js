import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Booking Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;