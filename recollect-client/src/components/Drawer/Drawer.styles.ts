import { SxProps, Theme } from "@mui/material";
import { drawerWidth } from "../layouts/constants";

interface DrawerStyles {
  drawer: (transitionDuration: number, theme: Theme) => SxProps<Theme>;
  drawerContent: SxProps<Theme>;
  drawerHeader: SxProps<Theme>;
}

export const drawerStyles: DrawerStyles = {
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
};
