import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactType } from '../types';

interface ContactState {
  contacts: ContactType[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
