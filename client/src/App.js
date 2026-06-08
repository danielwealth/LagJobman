// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen'; // Technician registration
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import TechnicianListScreen from './screens/TechnicianListScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* User authentication */}
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />

        {/* Technician marketplace (protected routes) */}
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/technicians" element={<TechnicianListScreen />} />
      </Routes>
    </Router>
  );
}
