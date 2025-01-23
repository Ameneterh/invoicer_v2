import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "businesses",
  initialState: {
    business: null,
  },

  reducers: {
    setBusiness: (state, action) => {
      state.business = action.payload;
    },
  },
});

export const { setBusiness } = businessSlice.actions;
