import React from 'react';
import Navbar from './components/Navbar';
import PropertyList from './components/PropertyList';
import Filters from './components/Filters';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './contexts/CartContext';

function App() {
    return (
        <CartProvider>
            <Navbar />
            <div className="main-content">
                <Filters />
                <PropertyList />
            </div>
            <Cart />
            <Checkout />
        </CartProvider>
    );
}

export default App;