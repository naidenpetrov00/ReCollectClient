import { useState, useEffect } from "react";

import { Box, useTheme, useMediaQuery } from "@mui/material";

import { Header } from "../../Header/Header";
import { AppBarOffset } from "../../helpers/AppBarOffset";

import { mainLayoutStyles } from "./MainLayout.styles";
import { Drawer } from "../../Drawer/Drawer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));
  const transitionDuration = theme.transitions.duration.leavingScreen;

  const [drawerOpen, setDrawerOpen] = useState<boolean>(isMediumUp);

  useEffect(() => {
    setDrawerOpen(isMediumUp);
  }, [isMediumUp]);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={mainLayoutStyles.container}>
      <Header
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        isMediumUp={isMediumUp}
        transitionDuration={transitionDuration}
      />
      <AppBarOffset id="back-to-top-anchor" />
      <Box
        sx={{ display: "flex", flexGrow: 1, overflow: "hidden", mt: "64px" }}
      >
        <Drawer
          drawerOpen={drawerOpen}
          isMediumUp={isMediumUp}
          toggleDrawer={toggleDrawer}
          transitionDuration={transitionDuration}
        />
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#f5f5f5",
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            ml: isMediumUp && drawerOpen ? "250px" : 0,
          }}
        ></Box>
      </Box>
      <Box
        id="window-container"
        sx={mainLayoutStyles.content({
          isMediumUp,
          drawerOpen,
          transitionDuration,
        })}
        component="main"
      >
        {children}
      </Box>
    </Box>
  );
};
