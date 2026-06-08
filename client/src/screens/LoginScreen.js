// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { loginUser } from '../services/authService';
import { globalStyles } from '../styles/globalStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async () => {
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const result = await loginUser(email, password);
      if (result.success) {
        setSuccess('Logged in successfully!');
        if (navigation) {
          navigation.navigate('Home'); // Redirect to Home after login
        }
      } else {
        setError('Login failed. Try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Technician Login</h2>

      <input
        style={globalStyles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={globalStyles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '5px' }}>{success}</p>}

      <button style={globalStyles.button} onClick={handleLogin}>
        Login
      </button>

      <button
        style={globalStyles.button}
        onClick={() => navigation && navigation.navigate('Register')}
      >
        Register Instead
      </button>
    </div>
  );
}
