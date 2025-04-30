import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { initialState } from "./windowsInitialState";
import { closeWindowAction, openWindowAction } from "./reducers/windowReducers";

export const windowsSlice = createSlice({
  name: "Windows",
  initialState,
  reducers: {
    openWindow: openWindowAction,
    closeWindow: closeWindowAction,
    incrementByAmount: () => {},
  },
});

export const selectOpenedWindows = (state: RootState) =>
  Object.values(state.windows.windowsData).filter((window) => window.isOpen);

export const { openWindow, closeWindow } = windowsSlice.actions;

export default windowsSlice.reducer;
