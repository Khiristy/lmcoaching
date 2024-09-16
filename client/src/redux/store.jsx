import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './Slices/loadingSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export default store;
