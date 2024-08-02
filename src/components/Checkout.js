import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/Checkout.css';

function Checkout() {
    const { cart, total } = useContext(CartContext);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle checkout logic
        console.log('Contact Info:', contactInfo);
        console.log('Payment Details:', paymentDetails);
        console.log('Booked Properties:', cart);
        console.log('Total Cost:', total);
        alert('Checkout successful!');
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactInfo.name}
                        onChange={handleContactChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={handleContactChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={contactInfo.phone}
                        onChange={handleContactChange}
                        required
                    />
                </div>
                <div className="payment-details">
                    <h3>Payment Details</h3>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentChange}
                        required
                    />
                    <input
                        type="text"
                        name="expirationDate"
                        placeholder="Expiration Date (MM/YY)"
                        value={paymentDetails.expirationDate}
                        onChange={handlePaymentChange}
                        required
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={paymentDetails.cvv}
                        onChange={handlePaymentChange}
                        required
                    />
                </div>
                <button type="submit">Complete Booking</button>
            </form>
        </div>
    );
}

export default Checkout;