import React from 'react';
import { useLocation } from 'react-router-dom';
import { globalStyles } from '../styles/globalStyles';

export default function ProfileScreen() {
  const location = useLocation();
  const technician = location.state?.technician;

  if (!technician) {
    return <div style={globalStyles.container}>No technician data available.</div>;
  }

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Technician Profile</h2>

      <p><strong>Name:</strong> {technician.name}</p>
      <p><strong>Job Type:</strong> {technician.jobType}</p>
      <p><strong>LGA:</strong> {technician.lga}</p>
      <p><strong>Available:</strong> {technician.available ? 'Yes' : 'No'}</p>

      {technician.faceImage && (
        <div style={{ marginTop: '15px' }}>
          <strong>Profile Photo:</strong>
          <img
            src={technician.faceImage}
            alt="Profile"
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '8px',
              border: '2px solid #ccc'
            }}
          />
        </div>
      )}

      {technician.workImage && (
        <div style={{ marginTop: '15px' }}>
          <strong>Work Sample:</strong>
          <img
            src={technician.workImage}
            alt="Work Sample"
            style={{
              width: '250px',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '8px',
              border: '2px solid #ccc'
            }}
          />
        </div>
      )}
    </div>
  );
}
