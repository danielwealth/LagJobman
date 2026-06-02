// src/components/TechnicianCard.js
import React from 'react';
import { addFavorite, removeFavorite, getFavorites } from '../services/favoritesService';
import { FaBolt, FaHammer, FaPaintBrush, FaStar, FaRegStar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { GiWaterPump, GiSawBlade } from 'react-icons/gi';
import '../styles/globalStyles.css'; // assuming you converted styles to CSS

export default function TechnicianCard({ technician, onClick }) {
  const jobIcons = {
    Electrician: <FaBolt color="#2196F3" />,
    Plumber: <GiWaterPump color="#2196F3" />,
    Bricklayer: <FaHammer color="#2196F3" />,
    Carpenter: <GiSawBlade color="#2196F3" />,
    Painter: <FaPaintBrush color="#2196F3" />,
  };

  const jobIcon = jobIcons[technician.jobType] || <FaBolt color="#2196F3" />;
  const isFavorite = getFavorites().some((fav) => fav.id === technician.id);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent triggering card click
    if (isFavorite) {
      removeFavorite(technician.id);
    } else {
      addFavorite(technician);
    }
  };

  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="row">
        <span className="icon">{jobIcon}</span>
        <p className="name">{technician.name}</p>
        <span className="icon" onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
          {isFavorite ? <FaStar color="#FFD700" /> : <FaRegStar color="#999" />}
        </span>
      </div>

      <p className="detail">{technician.jobType} - {technician.lga}</p>

      <div className="row">
        {technician.available ? (
          <FaCheckCircle color="#4CAF50" className="icon" />
        ) : (
          <FaTimesCircle color="#f44336" className="icon" />
        )}
        <p style={{ color: technician.available ? '#4CAF50' : '#f44336' }}>
          {technician.available ? 'Available' : 'Unavailable'}
        </p>
      </div>
    </div>
  );
}
