// src/redux/slices/loadingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: true, // L'état initial du chargement
    isHomeLoaded: false, // L'état de la page Home (chargée ou non)
  },
  reducers: {
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setHomeLoaded: (state) => {
      state.isHomeLoaded = true;
    },
  },
});

export const { stopLoading, setHomeLoaded } = loadingSlice.actions;
export default loadingSlice.reducer;
