import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  publicBooks: [], // ✅ correct naming
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "book", //for admin purpose
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.books = action.payload;
    },
    setPublicBooks: (state, action) => {
      state.publicBooks = action.payload; // ✅ inside reducers
    },
    setSelectedBook: (state, { payload }) => {
      state.selectedBook = payload || {};
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setBook, setPublicBooks, setSelectedBook } = actions;
export default reducer;
