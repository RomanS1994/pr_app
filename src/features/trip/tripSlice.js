import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  distance: null,
  price: null,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setDistance(state, action) {
      state.distance = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    resetTrip(state) {
      state.distance = null;
      state.price = null;
    },
  },
});

export const { setDistance, setPrice, resetTrip } = tripSlice.actions;

export default tripSlice.reducer;
