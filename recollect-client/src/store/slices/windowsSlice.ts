import { createSlice } from "@reduxjs/toolkit";

import { closeWindowAction, openWindowAction } from "./reducers/windowReducers";
import { initialState } from "./windowsInitialState";
import { RootState } from "../store";

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
  Object.entries(state.windows.windowsData).filter(
    ([key, window]) => window.isOpen
  );
// use like this:
// const status = useSelector(selectStatusMessage)
// export const selectWindowsState = (state: RootState) =>
//   state.windows.map((window) => window.isOpen);

export const { openWindow, closeWindow } = windowsSlice.actions;

export default windowsSlice.reducer;
