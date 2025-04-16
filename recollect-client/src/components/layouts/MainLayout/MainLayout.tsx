import { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

import { Header } from "./Header";
import { AppBarOffset } from "./AppBarOffset";
import { mainLayoutStyles } from "./MainLayout.styles";

// Shared drawer width constant
export const drawerWidth = 250;

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  // Shared transition duration from theme. You could also use theme.transitions.duration.enteringScreen.
  const transitionDuration = theme.transitions.duration.leavingScreen;

  // Drawer state is lifted here.
  const [drawerOpen, setDrawerOpen] = useState<boolean>(isMediumUp);

  useEffect(() => {
    setDrawerOpen(isMediumUp);
  }, [isMediumUp]);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={mainLayoutStyles.container}>
      {/* Pass state and toggle function into Header */}
      <Header
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        isMediumUp={isMediumUp}
        transitionDuration={transitionDuration}
      />
      <AppBarOffset id="back-to-top-anchor" />
      <Box
        component="main"
        sx={{
          ...mainLayoutStyles.content,
          ml: isMediumUp && drawerOpen ? `${drawerWidth}px` : 0,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: transitionDuration,
          }),
        }}
      >
        <main role="main">{children}</main>
      </Box>
    </Box>
  );
};
