import { SxProps, Theme } from "@mui/material";

import { drawerWidth } from "../constants";

interface HeaderStyles {
  iconButton: (theme: Theme) => SxProps<Theme>;
  appBar: (theme: Theme) => SxProps<Theme>;
  drawer: (transitionDuration: number, theme: Theme) => SxProps<Theme>;
  drawerContent: SxProps<Theme>;
  drawerHeader: SxProps<Theme>;
  title: (theme: Theme) => SxProps<Theme>;
}

export const headerStyles: HeaderStyles = {
  iconButton: (theme) => ({ color: theme.palette.appColors.primaryA0 }),
  appBar: (theme) => ({
    backgroundColor: theme.palette.appColors.surfaceA10,
  }),
  drawer: (transitionDuration, theme) => ({
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      transition: (theme: Theme) =>
        theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: transitionDuration,
        }),
      overflowX: "hidden",
      overflowY: "auto",
      backgroundColor: theme.palette.appColors.surfaceA10,
    },
  }),
  drawerContent: {
    width: drawerWidth,
    p: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },
  title: (theme) => ({
    flexGrow: 1,
    ml: 1,
    color: theme.palette.appColors.primaryA10,
  }),
};
