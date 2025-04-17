import React, { Fragment } from "react";

import {
  AppBar,
  Toolbar,
  Drawer,
  useTheme,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { headerStyles } from "./Header.styles";

type HeaderProps = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  isMediumUp: boolean;
  transitionDuration: number;
};

export const Header: React.FC<HeaderProps> = ({
  drawerOpen,
  toggleDrawer,
  isMediumUp,
  transitionDuration,
}) => {
  const theme = useTheme();

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={headerStyles.title}>
            App Title
          </Typography>

          <IconButton color="inherit" aria-label="account">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMediumUp ? "persistent" : "temporary"}
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={headerStyles.drawer(transitionDuration)}
      >
        <Box sx={headerStyles.drawerContent} role="presentation">
          <Box sx={headerStyles.drawerHeader}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer} aria-label="close drawer">
              <MenuOpenIcon fontSize="large" />
            </IconButton>
          </Box>
          {/* Your menu items */}
          <Typography>Item 1</Typography>
          <Typography>Item 2</Typography>
          <Typography>Item 3</Typography>
        </Box>
      </Drawer>
    </Fragment>
  );
};
