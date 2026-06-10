import React, { useState } from 'react';
import { loginUser } from '../services/authService';
import { globalStyles } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      const result = await loginUser(email, password);

      if (result.success && result.token) {
        localStorage.setItem('token', result.token);
        navigate('/home'); // ✅ go to home after login
      } else {
        setError(result.message || 'Login failed.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Login</h2>

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

      <button
        style={{
          ...globalStyles.button,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in…' : 'Login'}
      </button>

      <button
        style={globalStyles.button}
        onClick={() => navigate('/signup')}
        disabled={loading}
      >
        Sign Up
      </button>
    </div>
  );
}
