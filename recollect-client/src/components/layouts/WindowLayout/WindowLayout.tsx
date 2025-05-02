import React, { useState, ReactNode, useEffect } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { PaperComponent } from "./PaperComponent";

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
  const [maxSize, setMaxSize] = useState({ width: 1000, height: 800 });
  const [dragBounds, setDragBounds] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const mainEL = document.getElementById("window-container");
    if (mainEL) {
      setContainer(mainEL);
      const rect = mainEL.getBoundingClientRect();

      setMaxSize({
        width: rect.width,
        height: rect.height,
      });

      setDragBounds({
        left: rect.left,
        top: rect.top,
        right: window.innerWidth - rect.right,
        bottom: window.innerHeight - rect.bottom,
      });
    }
  }, []);

  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={true}
        onClick={
          !focused ? () => dispatch(focusOnWindow(windowKey)) : undefined
        }
        container={container}
        // PaperComponent={(props) => (
        // <PaperComponent {...props} dragBounds={dragBounds} />
        // )}
        PaperComponent={PaperComponent}
        aria-labelledby={`draggable-dialog-title`}
        hideBackdrop
        disableEnforceFocus
        disableScrollLock
        style={windowLayoutStyle.dialogStyle}
        sx={windowLayoutStyle.dialogSx(focused)}
        slotProps={{
          paper: {
            sx: windowLayoutStyle.dialogPaper(maxSize.width, maxSize.height),
          },
        }}
      >
        <DialogTitle
          style={windowLayoutStyle.dialogTitleStyle}
          id={`draggable-dialog-title`}
        >
          {focused ? "Focused" : "Not"}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
