import { SxProps, Theme } from "@mui/material";

import { drawerWidth } from "../layouts/constants";

interface HeaderStyles {
  iconButton: (theme: Theme) => SxProps<Theme>;
  appBar: (params: {
    theme: Theme;
    isMediumUp: boolean;
    drawerOpen: boolean;
    transitionDuration: number;
  }) => SxProps<Theme>;
  content: (params: {
    isMediumUp: boolean;
    drawerOpen: boolean;
    transitionDuration: number;
  }) => SxProps<Theme>;

  title: (theme: Theme) => SxProps<Theme>;
  taskBarContainer: SxProps<Theme>;
}

export const headerStyles: HeaderStyles = {
  iconButton: (theme) => ({ color: theme.palette.appColors.primaryA0 }),
  appBar: ({ theme, isMediumUp, drawerOpen, transitionDuration }) => ({
    backgroundColor: theme.palette.appColors.surfaceA10,
  }),
  content: ({ isMediumUp, drawerOpen, transitionDuration }) => ({
    flexGrow: 1,
    ml: isMediumUp && drawerOpen ? `${drawerWidth}px` : 0,
    transition: (theme: Theme) =>
      theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: transitionDuration,
      }),
  }),

  title: (theme) => ({
    ml: 1,
    mr: 2,
    color: theme.palette.appColors.primaryA10,
  }),
  taskBarContainer: null,
};
