// src/navigation/AppNavigator.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import screens (these should be React components in src/screens)
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import TechnicianListScreen from '../screens/TechnicianListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    // Use localStorage instead of SecureStore
    const token = localStorage.getItem('userToken');
    setInitialRoute(token ? '/home' : '/login');
  }, []);

  if (!initialRoute) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/technicians" element={<TechnicianListScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        {/* Redirect to initial route */}
        <Route path="*" element={<Navigate to={initialRoute} />} />
      </Routes>
    </Router>
  );
}
