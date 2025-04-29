import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { WindowName } from "../windowsInitialState";
import { WindowsState } from "../../../types/windows";

export const openWindowAction = (
  state: WindowsState,
  action: PayloadAction<WindowName>
) => {
  const window = state.windowsData[action.payload];

  if (window) {
    unFocus(state);
    window.focused = true;
    if (!window.isOpen) {
      window.isOpen = true;
      state.openedOrder.push(action.payload);
    }
  }
};
export const closeWindowAction = (
  state: WindowsState,
  action: PayloadAction<WindowName>
) => {
  const window = state.windowsData[action.payload];
  if (window && window.isOpen) {
    window.isOpen = false;
    unFocus(state);
    state.openedOrder = state.openedOrder.filter(
      (name) => name !== action.payload
    );
  }
};

const increment: CaseReducer<number, PayloadAction<number>> = (state, action) =>
  state + action.payload;

const unFocus = (state: WindowsState) => {
  const prevFocused = Object.entries(state.windowsData).find(
    (window) => (window[1].focused = false)
  );
};
