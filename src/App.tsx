import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Shop/Home';
import ProductPage from './Pages/Shop/ProductPage';
import Favorites from './Pages/Shop/Favorites';
import ProductDetails from './Pages/Shop/ProductDetails';
import CartPage from './Pages/Shop/CartPage';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import ProfilePage from './Pages/Shop/ProfilePage';
import OrdersPage from './Pages/Shop/OrdersPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
