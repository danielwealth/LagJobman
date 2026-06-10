// src/services/technicianService.js

const API_BASE = "https://lagjobman.onrender.com/api/technicians"; 
// Replace with your actual backend endpoint for technicians

// Create a new technician profile
export async function createTechnician(profile) {
  try {
    const response = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });

    const data = await response.json();

    if (response.ok && data) {
      return {
        success: true,
        technician: data.technician || data, // normalize response
        message: data.message || "Technician registered successfully",
      };
    } else {
      return {
        success: false,
        technician: null,
        message: data.message || "Technician registration failed",
      };
    }
  } catch (error) {
    console.error("Technician registration error:", error);
    return {
      success: false,
      technician: null,
      message: "Server error during technician registration",
    };
  }
}

// Fetch all technicians
export async function getAllTechnicians() {
  try {
    const response = await fetch(`${API_BASE}`);
    const data = await response.json();

    if (response.ok && Array.isArray(data)) {
      return { success: true, technicians: data };
    } else {
      return { success: false, technicians: [], message: data.message || "Failed to fetch technicians" };
    }
  } catch (error) {
    console.error("Get technicians error:", error);
    return { success: false, technicians: [], message: "Server error fetching technicians" };
  }
}
