// src/services/technicianService.js

const TECHNICIANS_KEY = 'technicians';

// Helper to load technicians from localStorage
function loadTechnicians() {
  const stored = localStorage.getItem(TECHNICIANS_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Helper to save technicians to localStorage
function saveTechnicians(technicians) {
  localStorage.setItem(TECHNICIANS_KEY, JSON.stringify(technicians));
}

export function createTechnician(profile) {
  const technicians = loadTechnicians();
  const newTech = { id: Date.now().toString(), ...profile };
  technicians.push(newTech);
  saveTechnicians(technicians);
  console.log('Technician created:', newTech);
  return newTech;
}

export function updateTechnician(id, updates) {
  let technicians = loadTechnicians();
  technicians = technicians.map((tech) =>
    tech.id === id ? { ...tech, ...updates } : tech
  );
  saveTechnicians(technicians);
  return technicians.find((tech) => tech.id === id);
}

export function toggleAvailability(id, available) {
  return updateTechnician(id, { available });
}

export function getTechnicianById(id) {
  const technicians = loadTechnicians();
  return technicians.find((tech) => tech.id === id);
}

export function getAllTechnicians() {
  return loadTechnicians();
}
