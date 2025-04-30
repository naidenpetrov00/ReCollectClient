import { Box } from "@mui/material";

import { WindowBar } from "./WindowBar";

import { useAppSelector } from "../../hooks/reduxHooks";
import { selectOpenedWindows } from "../../store/slices/windowsSlice";

import { windowsBarStyles } from "./WindowsBar.styles";

export const WindowsBar = () => {
  const openedWindows = useAppSelector(selectOpenedWindows);
  const openedOrder = useAppSelector((state) => state.windows.openedOrder);

  return (
    <Box sx={windowsBarStyles.windowsBarsContainer}>
      {openedOrder.map((windowName, index) => {
        const window = openedWindows.find((window) => {
          return window.title === windowName;
        });

        if (!window) return;

        return <WindowBar key={index} windowKey={window.key} window={window} />;
      })}
    </Box>
  );
};
