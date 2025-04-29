import {
  Box,
  Typography,
  Drawer as DrawerMUI,
  IconButton,
  useTheme,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { Navigation } from "../helpers/Navigation";

import { drawerStyles } from "./Drawer.styles";
import { headerStyles } from "../Header/Header.styles";

interface DrawerProps {
  isMediumUp: boolean;
  drawerOpen: boolean;
  toggleDrawer: () => void;
  transitionDuration: number;
}

export const Drawer = ({
  drawerOpen,
  isMediumUp,
  toggleDrawer,
  transitionDuration,
}: DrawerProps) => {
  const theme = useTheme();
  return (
    <DrawerMUI
      variant={isMediumUp ? "persistent" : "temporary"}
      open={drawerOpen}
      onClose={toggleDrawer}
      ModalProps={{ keepMounted: true }}
      sx={drawerStyles.drawer(transitionDuration, theme)}
    >
      <Box sx={drawerStyles.drawerContent} role="presentation">
        <Box sx={drawerStyles.drawerHeader}>
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
        <Navigation />
      </Box>
    </DrawerMUI>
  );
};
