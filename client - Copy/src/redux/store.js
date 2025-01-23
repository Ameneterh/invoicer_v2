import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "./loaderSlice";
import { businessSlice } from "./businessSlice";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    loaders: loaderSlice.reducer,
    businesses: businessSlice.reducer,
    users: userSlice.reducer,
  },
});

export default store;
