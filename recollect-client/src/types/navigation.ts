import { SvgIconComponent } from "@mui/icons-material";
import { WindowName } from "../store/slices/windowsInitialState";

export enum NavigationTypes {
  Button = "button",
  ButtonList = "buttonList",
}

export interface NavigationItemBase {
  label: WindowName;
  Icon: SvgIconComponent;
}

export interface NavigationButton extends NavigationItemBase {
  type: NavigationTypes.Button;
}

export interface NavigationAccordion extends NavigationItemBase {
  type: NavigationTypes.ButtonList;
  children: NavigationButton[];
}

export type NavigationItem = NavigationAccordion | NavigationButton;

export type NavigationsConfig = NavigationItem[];
