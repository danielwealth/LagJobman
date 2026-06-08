// src/screens/SearchScreen.js
import React, { useState } from 'react';
import TechnicianCard from '../components/TechnicianCard';
import { searchTechnicians } from '../services/searchService';

const lagosLGAs = ['Ikeja', 'Surulere', 'Eti-Osa', 'Alimosho', 'Apapa'];
const jobTypes = ['Electrician', 'Plumber', 'Bricklayer', 'Carpenter', 'Painter'];

export default function SearchScreen({ navigation }) {
  const [selectedJob, setSelectedJob] = useState(jobTypes[0]);
  const [selectedLga, setSelectedLga] = useState(lagosLGAs[0]);

  // Call search service
  const filteredTechnicians = searchTechnicians(selectedJob, selectedLga);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Search Technicians</h2>

      <label style={styles.label}>Job Type</label>
      <select
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
        style={styles.select}
      >
        {jobTypes.map((job) => (
          <option key={job} value={job}>{job}</option>
        ))}
      </select>

      <label style={styles.label}>Lagos LGA</label>
      <select
        value={selectedLga}
        onChange={(e) => setSelectedLga(e.target.value)}
        style={styles.select}
      >
        {lagosLGAs.map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>

      <label style={styles.label}>Available Technicians</label>
      {filteredTechnicians.length === 0 ? (
        <p>No available technicians found.</p>
      ) : (
        <div>
          {filteredTechnicians.map((item) => (
            <TechnicianCard
              key={item.id}
              technician={item}
              onPress={() => navigation && navigation.navigate('Profile', { technician: item })}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    marginTop: '10px',
    marginBottom: '5px',
  },
  select: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};
