import { WindowName } from "../store/slices/windowsInitialState";

export type WindowData = {
  key: WindowName;
  title: string;
  isOpen: boolean;
  focused: boolean;
};

export type WindowsData = {
  [key in WindowName]: WindowData;
};

export type WindowsState = {
  windowsData: WindowsData;
  openedOrder: string[];
};
