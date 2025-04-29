import { Box } from "@mui/material";

import { WindowBar } from "./WindowBar";

import { useAppSelector } from "../../hooks/reduxHooks";
import { WindowName } from "../../store/slices/windowsInitialState";
import { selectOpenedWindows } from "../../store/slices/windowsSlice";

import { windowsBarStyles } from "./WindowsBar.styles";

export const WindowsBar = () => {
  const openedWindows = useAppSelector(selectOpenedWindows);
  const openedOrder = useAppSelector((state) => state.windows.openedOrder);

  return (
    <Box sx={windowsBarStyles.windowsBarsContainer}>
      {openedOrder.map((windowName) => {
        const window = openedWindows[windowName];
        return (
          <WindowBar key={key} windowKey={key as WindowName} window={window} />
        );
      })}
      {openedWindows.map(([key, window]) => {
        return (
          <WindowBar key={key} windowKey={key as WindowName} window={window} />
        );
      })}
    </Box>
  );
};
