// src/services/technicianService.js

let technicians = []; // Temporary in-memory store

// Create a new technician profile
export function createTechnician(profile) {
  const newTech = { id: Date.now().toString(), ...profile };
  technicians.push(newTech);
  console.log('Technician created:', newTech);
  return newTech;
}

// Update technician details
export function updateTechnician(id, updates) {
  technicians = technicians.map((tech) =>
    tech.id === id ? { ...tech, ...updates } : tech
  );
  return technicians.find((tech) => tech.id === id);
}

// Toggle technician availability
export function toggleAvailability(id, available) {
  return updateTechnician(id, { available });
}

// Get technician by ID
export function getTechnicianById(id) {
  return technicians.find((tech) => tech.id === id);
}

// Get all technicians
export function getAllTechnicians() {
  return technicians;
}

// ✅ Search technicians by LGA and/or job type
export function searchTechnicians(lga, jobType) {
  return technicians.filter((tech) => {
    const matchesLga = !lga || tech.lga === lga;
    const matchesJob = !jobType || tech.jobType === jobType;
    return matchesLga && matchesJob;
  });
}
