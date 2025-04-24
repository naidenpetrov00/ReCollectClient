import { useState, useEffect } from "react";

import { Box, useTheme, useMediaQuery } from "@mui/material";

import { Header } from "./Header";
import { AppBarOffset } from "./AppBarOffset";

import { mainLayoutStyles } from "./MainLayout.styles";

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
