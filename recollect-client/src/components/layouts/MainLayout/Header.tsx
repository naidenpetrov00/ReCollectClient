import {
  AppBar,
  Toolbar,
  Drawer,
  useTheme,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

// Import icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

import { drawerWidth } from "./MainLayout";

type HeaderProps = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  isMediumUp: boolean;
  transitionDuration: number; // transition duration in ms
};

export const Header = ({
  drawerOpen,
  toggleDrawer,
  isMediumUp,
  transitionDuration,
}: HeaderProps) => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          // Shift the AppBar when the drawer is open on larger screens.
          ml: isMediumUp && drawerOpen ? `${drawerWidth}px` : 0,
          width:
            isMediumUp && drawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: transitionDuration,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
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
        trans
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: transitionDuration,
            }),
          },
        }}
      >
        <Box
          sx={{
            width: drawerWidth,
            p: 2,
            height: "100%",
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer} aria-label="close drawer">
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography>Item 1</Typography>
          <Typography>Item 2</Typography>
          <Typography>Item 3</Typography>
        </Box>
      </Drawer>
    </>
  );
};
