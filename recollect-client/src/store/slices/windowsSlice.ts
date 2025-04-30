import { createSlice } from "@reduxjs/toolkit";

import {
  closeWindowAction,
  focusOnWindowAction,
  openWindowAction,
} from "./reducers/windowReducers";
import { RootState } from "../store";
import { initialState } from "./windowsInitialState";

export const windowsSlice = createSlice({
  name: "Windows",
  initialState,
  reducers: {
    openWindow: openWindowAction,
    closeWindow: closeWindowAction,
    focusOnWindow: focusOnWindowAction,
    incrementByAmount: () => {},
  },
});

export const selectOpenedWindows = (state: RootState) =>
  Object.values(state.windows.windowsData).filter((window) => window.isOpen);

export const { openWindow, closeWindow, focusOnWindow } = windowsSlice.actions;

export default windowsSlice.reducer;
