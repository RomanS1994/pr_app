import { configureStore } from "@reduxjs/toolkit";

import addressReducer from "./features/address/addressSlice/addressSlice.js";

export const store = configureStore({
  reducer: {
    address: addressReducer,
  },
});
