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
      <AppBar position="fixed" sx={headerStyles.appBar(theme)}>
        <Toolbar>
          <IconButton
            sx={headerStyles.iconButton(theme)}
            edge="start"
            color="inherit"
            aria-label="open menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={headerStyles.title(theme)}>
            ReCollect
          </Typography>

          <IconButton sx={headerStyles.iconButton(theme)} aria-label="account">
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            sx={headerStyles.iconButton(theme)}
            color="inherit"
            aria-label="settings"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMediumUp ? "persistent" : "temporary"}
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={headerStyles.drawer(transitionDuration, theme)}
      >
        <Box sx={headerStyles.drawerContent} role="presentation">
          <Box sx={headerStyles.drawerHeader}>
            <Typography variant="h6" sx={headerStyles.iconButton(theme)}>
              ReCollect
            </Typography>
            <IconButton
              onClick={toggleDrawer}
              aria-label="close drawer"
              sx={headerStyles.iconButton(theme)}
            >
              <MenuOpenIcon fontSize="medium" />
            </IconButton>
          </Box>
          {/* Your menu items */}
          <Typography sx={headerStyles.iconButton(theme)}>Item 1</Typography>
          <Typography sx={headerStyles.iconButton(theme)}>Item 2</Typography>
          <Typography sx={headerStyles.iconButton(theme)}>Item 3</Typography>
        </Box>
      </Drawer>
    </Fragment>
  );
};
