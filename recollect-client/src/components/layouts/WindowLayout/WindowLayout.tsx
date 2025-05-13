import React, { useState, ReactNode, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useAppDispatch } from "../../../hooks/reduxHooks";
import { focusOnWindow } from "../../../store/slices/windowsSlice";
import { WindowName } from "../../../store/slices/windowsInitialState";
import { windowLayoutStyle } from "./WindowLayout.style";

interface WindowLayoutProps {
  title: string;
  windowKey: WindowName;
  focused: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const WindowLayout = ({
  focused,
  children,
  windowKey,
}: WindowLayoutProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mainEL = document.getElementById("window-container");
    if (mainEL) {
      setContainer(mainEL);
    }
  }, []);

  const handleClose = () => {
    // Handle close logic here
  };

  return (
    <Dialog
      open={true}
      container={container}
      hideBackdrop
      disableEnforceFocus
      disableScrollLock
      onClick={!focused ? () => dispatch(focusOnWindow(windowKey)) : undefined}
      style={windowLayoutStyle.dialogStyle}
      fullWidth
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: "100%",
            height: "100%",
            margin: 0,
            borderRadius: 0,
            // display: "flex",
            // flexDirection: "column",
          },
        },
      }}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: focused ? "#eee" : "#ccc",
        }}
      >
        {focused ? "Focused" : "Not"}
      </DialogTitle>
      <DialogContent sx={{ flexGrow: 1, overflow: "auto" }}>
        {children}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};
