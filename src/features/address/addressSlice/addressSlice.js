import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: "lviv",
  to: "kyiv",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    changeFrom: (state, action) => {
      state.from = action.payload;
    },
    changeTo: (state, action) => {
      state.to = action.payload;
    },
  },
});

export const { changeFrom, changeTo } = addressSlice.actions;

export default addressSlice.reducer;
