import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthToken } from '../services/authService';

export default function ProtectedRoute({ children }) {
  const token = getAuthToken();
  const location = useLocation();

  if (!token) {
    // Not logged in → redirect to signup by default
    // If user explicitly goes to /login, allow that
    if (location.pathname === '/login') {
      return <Navigate to="/login" replace />;
    }
    return <Navigate to="/signup" replace />;
  }

  // Logged in → render the protected content
  return children;
}
