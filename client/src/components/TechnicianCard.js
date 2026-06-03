// src/components/TechnicianCard.js
import React from 'react';
import { addFavorite, removeFavorite, getFavorites } from '../services/favoritesService';

// For icons, you can use a library like react-icons (https://react-icons.github.io/react-icons/)
import { FaBolt, FaWater, FaHammer, FaSaw, FaPaintBrush, FaTh, FaSolarPanel, FaCompass, FaBroom, FaBook, FaWindowMaximize, FaStar, FaRegStar, FaCheckCircle, FaTimesCircle, FaUser } from 'react-icons/fa';

export default function TechnicianCard({ technician, onPress }) {
  const jobIcons = {
    Electrician: <FaBolt />,
    Plumber: <FaWater />,
    Bricklayer: <FaHammer />,
    Carpenter: <FaSaw />,
    Painter: <FaPaintBrush />,
    Tiler: <FaTh />,
    SoloarInstaller: <FaSolarPanel />,
    Engineer: <FaCompass />,
    Cleaner: <FaBroom />,
    Labourer: <FaHammer />,
    BrickMoulder: <FaHammer />,
    HeaterReparer: <FaTimesCircle />,
    HomeLessonTeacher: <FaBook />,
    AluminiumMan: <FaWindowMaximize />,
  };

  const jobIcon = jobIcons[technician.jobType] || <FaUser />;
  const isFavorite = getFavorites().some((fav) => fav.id === technician.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(technician.id);
    } else {
      addFavorite(technician);
    }
  };

  return (
    <div style={styles.card} onClick={onPress}>
      <div style={styles.row}>
        <span style={styles.icon}>{jobIcon}</span>
        <span style={styles.name}>{technician.name}</span>
        <button onClick={toggleFavorite} style={styles.favoriteButton}>
          {isFavorite ? <FaStar color="#FFD700" /> : <FaRegStar color="#999" />}
        </button>
      </div>

      <p style={styles.detail}>{technician.jobType} - {technician.lga}</p>

      <div style={styles.row}>
        {technician.available ? (
          <FaCheckCircle color="#4CAF50" style={styles.icon} />
        ) : (
          <FaTimesCircle color="#f44336" style={styles.icon} />
        )}
        <span style={{ color: technician.available ? '#4CAF50' : '#f44336' }}>
          {technician.available ? 'Available' : 'Unavailable'}
        </span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: '15px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
  icon: {
    marginLeft: '8px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: '8px',
  },
  detail: {
    fontSize: '14px',
    color: '#333',
  },
  favoriteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};
