import { configureStore } from "@reduxjs/toolkit";

import windowsReducer from "./slices/windowsSlice";

export const store = configureStore({
  reducer: { windows: windowsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
