// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { loginUser } from '../services/authService';
import { globalStyles } from '../styles/globalStyles';

export default function LoginScreen({ navigation }) {
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
        if (navigation) {
          navigation.navigate('Home'); // Redirect to Home after login
        }
      } else {
        window.alert('Error: Login failed. Try again.');
      }
    } catch (error) {
      window.alert('Error: Something went wrong.');
      console.error(error);
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
