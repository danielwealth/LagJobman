// src/services/authService.js

export async function registerUser(userData) {
  // Example: send to backend or Firebase
  console.log('Registering user:', userData);

  // Save token locally (mock)
  localStorage.setItem('userToken', 'mock-token');

  return { success: true, token: 'mock-token' };
}

export async function loginUser(email, password) {
  // Example: send to backend or Firebase
  console.log('Logging in:', email);

  // Save token locally (mock)
  localStorage.setItem('userToken', 'mock-token');

  return { success: true, token: 'mock-token' };
}

export async function logoutUser() {
  localStorage.removeItem('userToken');
  return { success: true };
}
