import React, { Fragment } from "react";

import {
  AppBar,
  Toolbar,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Drawer } from "../Drawer/Drawer";
import { WindowsBar } from "../WindowsBar/WindowsBar";

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
      <AppBar
        position="fixed"
        sx={headerStyles.appBar({
          theme,
          drawerOpen,
          isMediumUp,
          transitionDuration,
        })}
      >
        <Toolbar
          sx={headerStyles.content({
            isMediumUp,
            drawerOpen,
            transitionDuration,
          })}
        >
          {(!drawerOpen || !isMediumUp) && (
            <IconButton
              sx={headerStyles.iconButton(theme)}
              edge="start"
              color="inherit"
              aria-label="open menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!drawerOpen && isMediumUp && (
            <Typography variant="h6" sx={headerStyles.title(theme)}>
              ReCollect
            </Typography>
          )}
          <WindowsBar />
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
        drawerOpen={drawerOpen}
        isMediumUp={isMediumUp}
        toggleDrawer={toggleDrawer}
        transitionDuration={transitionDuration}
      />
    </Fragment>
  );
};
