// src/screens/FavoritesScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavorites } from '../services/favoritesService';
import TechnicianCard from '../components/TechnicianCard';
import '../styles/globalStyles.css'; // assuming you converted styles to CSS

export default function FavoritesScreen() {
  const navigate = useNavigate();
  const favorites = getFavorites();

  return (
    <div className="container">
      <h1 className="title">Favorite Technicians</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet. Click the star icon on a technician to add them.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id}>
              <TechnicianCard
                technician={item}
                onClick={() => navigate('/profile', { state: { technician: item } })}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
