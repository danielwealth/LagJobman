// src/screens/TechnicianListScreen.js
import React from 'react';
import { getAllTechnicians } from '../services/technicianService';
import TechnicianCard from '../components/TechnicianCard';
import { globalStyles } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';

export default function TechnicianListScreen() {
  const technicians = getAllTechnicians();
  const navigate = useNavigate();

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>All Registered Technicians</h2>

      {technicians.length === 0 ? (
        <p>No technicians registered yet.</p>
      ) : (
        <div>
          {technicians.map((item) => (
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
