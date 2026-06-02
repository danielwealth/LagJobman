// src/components/AvailabilityToggle.js
import React from 'react';
import '../styles/globalStyles.css'; // assuming you converted styles to CSS

export default function AvailabilityToggle({ available, setAvailable }) {
  return (
    <div className="availability-toggle">
      <label className="label">
        Available
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
    </div>
  );
}
