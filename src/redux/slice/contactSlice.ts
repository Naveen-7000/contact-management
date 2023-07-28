import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Contact } from "../../utils/type";

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact, index) => contact.id !== action.payload
      );
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },
});

// Selector function to get all contacts from the state
export const selectAllContacts = createSelector(
  (state: RootState) => state.contacts.contacts,
  (contacts) => contacts
);

export const { addContact, removeContact, setContacts, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
