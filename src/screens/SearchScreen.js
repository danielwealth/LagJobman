// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechnicianCard from '../components/TechnicianCard';
import { searchTechnicians } from '../services/searchService';
import '../styles/globalStyles.css'; // converted CSS styles

const lagosLGAs = ['Ikeja', 'Surulere', 'Eti-Osa', 'Alimosho', 'Apapa'];
const jobTypes = ['Electrician', 'Plumber', 'Bricklayer', 'Carpenter', 'Painter'];

export default function SearchScreen() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(jobTypes[0]);
  const [selectedLga, setSelectedLga] = useState(lagosLGAs[0]);

  // Call search service
  const filteredTechnicians = searchTechnicians(selectedJob, selectedLga);

  return (
    <div className="container">
      <h1 className="title">Search Technicians</h1>

      <label className="label">Job Type</label>
      <select
        className="input"
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
      >
        {jobTypes.map((job) => (
          <option key={job} value={job}>{job}</option>
        ))}
      </select>

      <label className="label">Lagos LGA</label>
      <select
        className="input"
        value={selectedLga}
        onChange={(e) => setSelectedLga(e.target.value)}
      >
        {lagosLGAs.map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>

      <h2 className="label">Available Technicians</h2>
      {filteredTechnicians.length === 0 ? (
        <p>No available technicians found.</p>
      ) : (
        <ul className="technician-list">
          {filteredTechnicians.map((item) => (
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
