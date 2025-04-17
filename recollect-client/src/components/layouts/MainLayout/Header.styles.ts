import { SxProps, Theme } from "@mui/material";

import { drawerWidth } from "../constants";

interface HeaderStyles {
  drawer: (transitionDuration: number) => SxProps<Theme>;
  drawerContent: SxProps<Theme>;
  drawerHeader: SxProps<Theme>;
  title: SxProps<Theme>;
}

export const headerStyles: HeaderStyles = {
  drawer: (transitionDuration) => ({
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
    },
  }),

  drawerContent: {
    width: drawerWidth,
    p: 2,
    height: "100%",
    bgcolor: (theme: Theme) => theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
  },

  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },

  title: {
    flexGrow: 1,
    ml: 1,
  },
};
