import { WindowsData, WindowsState } from "../../types/windows";

export type WindowName = "CasesList" | "NewCase" | "Case"; // add more names here

const initialStateOfWindow = {
  isOpen: false,
  focused: false,
};

export const initialState: WindowsState = {
  windowsData: {
    Case: { title: "Case", ...initialStateOfWindow },
    CasesList: { title: "Cases List", ...initialStateOfWindow },
    NewCase: { title: "New Case", ...initialStateOfWindow },
  },
  openedOrder: [],
};
