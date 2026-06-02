// src/services/favoritesService.js

const FAVORITES_KEY = 'favorites';

// Helper to load favorites from localStorage
function loadFavorites() {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Helper to save favorites to localStorage
function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addFavorite(technician) {
  let favorites = loadFavorites();
  if (!favorites.find((fav) => fav.id === technician.id)) {
    favorites.push(technician);
    saveFavorites(favorites);
  }
  return favorites;
}

export function removeFavorite(id) {
  let favorites = loadFavorites();
  favorites = favorites.filter((fav) => fav.id !== id);
  saveFavorites(favorites);
  return favorites;
}

export function getFavorites() {
  return loadFavorites();
}
