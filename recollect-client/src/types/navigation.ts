import { SvgIconComponent } from "@mui/icons-material";

export enum NavigationTypes {
  Button = "button",
  ButtonList = "buttonList",
}

export interface NavigationItemBase {
  key: string;
  label: string;
  Icon: SvgIconComponent;
}

export interface NavigationButton extends NavigationItemBase {
  type: NavigationTypes.Button;
  onClick: () => void;
}

export interface NavigationAccordion extends NavigationItemBase {
  type: NavigationTypes.ButtonList;
  children: NavigationButton[];
}

export type NavigationItem = NavigationAccordion | NavigationButton;

export type NavigationsConfig = NavigationItem[];
