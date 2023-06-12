import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers/contactReducer';

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
