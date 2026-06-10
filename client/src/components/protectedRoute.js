import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../services/authService';

export default function ProtectedRoute({ children }) {
  const token = getAuthToken();

  if (!token) {
    // Not logged in → send to signup by default
    return <Navigate to="/signup" replace />;
  }

  // Logged in → render the protected content
  return children;
}
