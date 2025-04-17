import { SxProps, Theme } from "@mui/material";

import { drawerWidth } from "../constants";

interface MainLayoutStyles {
  container: SxProps<Theme>;
  content: (params: {
    isMediumUp: boolean;
    drawerOpen: boolean;
    transitionDuration: number;
  }) => SxProps<Theme>;
}

export const mainLayoutStyles: MainLayoutStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: ({ isMediumUp, drawerOpen, transitionDuration }) => ({
    flexGrow: 1,
    ml: isMediumUp && drawerOpen ? `${drawerWidth}px` : 0,
    transition: (theme: Theme) =>
      theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: transitionDuration,
      }),
  }),
};
