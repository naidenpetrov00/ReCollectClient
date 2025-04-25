import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  closeWindowAction,
  openWindowAction,
} from "./reducers/counterReducers";
import { WindowsState, WindowState } from "../../types/windows";
import { RootState } from "../store";

const initialState: WindowsState = [{ isOpen: true }, { isOpen: false }];
export const windowsSlice = createSlice({
  name: "Windows",
  initialState,
  reducers: {
    openWindow: openWindowAction,
    closeWindow: closeWindowAction,
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

// use like this:
// const status = useSelector(selectStatusMessage)
export const selectWindowsState = (state: RootState) =>
  state.windows.map((window) => window.isOpen);

export const { openWindow, closeWindow } = windowsSlice.actions;

export default windowsSlice.reducer;
