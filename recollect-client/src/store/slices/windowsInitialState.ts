import { WindowsState } from "../../types/windows";

export type WindowName = "CasesList" | "NewCase" | "Case"; // add more names here

const initialStateOfWindow = {
  isOpen: false,
  focused: false,
};

export const initialState: WindowsState = {
  windowsData: {
    Case: { key: "Case", title: "Case", ...initialStateOfWindow },
    CasesList: {
      key: "CasesList",
      title: "Cases List",
      ...initialStateOfWindow,
    },
    NewCase: { key: "NewCase", title: "New Case", ...initialStateOfWindow },
  },
  openedOrder: [],
};
