// src/screens/ProfileScreen.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AvailabilityToggle from '../components/AvailabilityToggle';
import ImageUploader from '../components/ImageUploader';
import { updateTechnician } from '../services/technicianService';
import '../styles/globalStyles.css'; // converted CSS styles

export default function ProfileScreen() {
  const location = useLocation();
  const { technician } = location.state || {};

  const [available, setAvailable] = useState(technician?.available || false);
  const [faceImage, setFaceImage] = useState(technician?.faceImage || null);
  const [workImage, setWorkImage] = useState(technician?.workImage || null);

  if (!technician) {
    return (
      <div className="container">
        <h1 className="title">No technician data provided.</h1>
      </div>
    );
  }

  const handleUpdate = () => {
    const updated = updateTechnician(technician.id, {
      available,
      faceImage,
      workImage,
    });
    window.alert(`Profile Updated: ${updated.name}'s profile has been updated.`);
  };

  return (
    <div className="container">
      <h1 className="title">{technician.name}</h1>
      <p className="label">Job Type: {technician.jobType}</p>
      <p className="label">Location (LGA): {technician.lga}</p>

      <AvailabilityToggle available={available} setAvailable={setAvailable} />

      <ImageUploader label="Update Face Photo" onImageSelected={setFaceImage} />
      {faceImage && (
        <img src={faceImage} alt="Face" className="profile-image" />
      )}

      <ImageUploader label="Update Work Sample" onImageSelected={setWorkImage} />
      {workImage && (
        <img src={workImage} alt="Work Sample" className="profile-image" />
      )}

      <button className="button" onClick={handleUpdate}>
        Save Changes
      </button>
    </div>
  );
}
