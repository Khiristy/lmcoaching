// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './Slices/loadingSlice'; // Assure-toi d'avoir l'import correct

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export default store; // Ceci est l'export par défaut
