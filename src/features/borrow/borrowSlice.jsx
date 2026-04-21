import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allborrows: [], //admin to see the borrows
  myborrows: [], //customer to see
};
const userSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setAllBorrows: (state, { payload }) => {
      state.allborrows = payload;
    },
    setMyBorrows: (state, { payload }) => {
      state.myborrows = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setAllBorrows, setMyBorrows } = actions;
export default reducer;
