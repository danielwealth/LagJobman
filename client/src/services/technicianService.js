// src/services/technicianService.js

export const createTechnician = async (profile) => {
  try {
    const response = await fetch('https://lagjobman.onrender.com/api/technicians', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to create technician');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating technician:', error);
    throw error;
  }
};

// ✅ Add getAllTechnicians
export const getAllTechnicians = async () => {
  try {
    const response = await fetch('https://lagjobman.onrender.com/api/technicians');

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch technicians');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching technicians:', error);
    throw error;
  }
};
