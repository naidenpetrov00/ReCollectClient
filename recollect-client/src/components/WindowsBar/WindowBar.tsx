import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, IconButton } from "@mui/material";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { closeWindow, openWindow } from "../../store/slices/windowsSlice";
import { WindowName } from "../../store/slices/windowsInitialState";
import { getIconByName } from "../../config/drawerNavigationButtons";

import { windowBarStyles } from "./WindowBar.styles";
import { WindowData } from "../../types/windows";

interface WindowBarProps {
  windowKey: WindowName;
  window: WindowData;
}

export const WindowBar = ({ windowKey, window }: WindowBarProps) => {
  const dispatch = useAppDispatch();

  const Icon = getIconByName(windowKey);
  return (
    <Box
      key={windowKey}
      sx={windowBarStyles.windowBarContainer(window.focused)}
      onClick={() => dispatch(openWindow(windowKey))}
    >
      <Icon key={windowKey} sx={windowBarStyles.icons}></Icon>
      <Typography variant="body2" sx={windowBarStyles.title}>
        {window.title}
      </Typography>
      <IconButton size="small" onClick={() => dispatch(closeWindow(windowKey))}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};
