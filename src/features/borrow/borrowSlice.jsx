import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allborrows: [], //admin to see the borrows
  myBorrows: [], //customer to see
};
const userSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setAllBorrows: (state, { payload }) => {
      state.allborrows = payload;
    },
    setMyBorrows: (state, { payload }) => {
      state.myBorrows = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setAllBorrows, setMyBorrows } = actions;
export default reducer;
