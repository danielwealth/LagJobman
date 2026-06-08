// src/screens/FavoritesScreen.js
import React from 'react';
import { getFavorites } from '../services/favoritesService';
import TechnicianCard from '../components/TechnicianCard';
import { globalStyles } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';

export default function FavoritesScreen() {
  const favorites = getFavorites();
  const navigate = useNavigate();

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Favorite Technicians</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet. Tap the star icon on a technician to add them.</p>
      ) : (
        <div>
          {favorites.map((item) => (
            <TechnicianCard
              key={item.id}
              technician={item}
              onPress={() => navigate('/profile', { state: { technician: item } })}
            />
          ))}
        </div>
      )}
    </div>
  );
}
