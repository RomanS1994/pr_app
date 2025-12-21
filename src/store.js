import { configureStore } from "@reduxjs/toolkit";

import addressReducer from "./features/address/addressSlice/addressSlice.js";
import tripReducer from "./features/trip/tripSlice";

export const store = configureStore({
  reducer: {
    address: addressReducer,
    trip: tripReducer,
  },
});
