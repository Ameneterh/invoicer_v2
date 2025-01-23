import { createSlice } from "@reduxjs/toolkit";

export const vendorSlice = createSlice({
  name: "vendors",
  initialState: {
    vendor: null,
  },

  reducers: {
    setVendor: (state, action) => {
      state.vendor = action.payload;
    },
  },
});

export const { setVendor } = vendorSlice.actions;
