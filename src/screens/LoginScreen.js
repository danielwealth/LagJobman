// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import '../styles/globalStyles.css'; // assuming you converted styles to CSS

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      window.alert('Error: Please enter both email and password.');
      return;
    }

    try {
      const result = await loginUser(email, password);
      if (result.success) {
        window.alert('Success: Logged in successfully!');
        navigate('/home'); // Redirect to Home after login
      } else {
        window.alert('Error: Login failed. Try again.');
      }
    } catch (error) {
      window.alert('Error: Something went wrong.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Technician Login</h1>

      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button" onClick={handleLogin}>
        Login
      </button>

      <button className="button" onClick={() => navigate('/register')}>
        Register Instead
      </button>
    </div>
  );
}
