import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  publicBooks: [], // ✅ correct naming
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.books = action.payload;
    },
    setPublicBooks: (state, action) => {
      state.publicBooks = action.payload; // ✅ inside reducers
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setBook, setPublicBooks } = actions;
export default reducer;
