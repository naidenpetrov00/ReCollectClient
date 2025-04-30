import Draggable from "react-draggable";
import React, { useState, ReactNode, useEffect } from "react";

import {
  PaperProps,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { af } from "react-router/dist/development/route-data-5OzAzQtT";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { focusOnWindow, openWindow } from "../../../store/slices/windowsSlice";
import { useSelector } from "react-redux";
import { title } from "process";
import { WindowName } from "../../../store/slices/windowsInitialState";

function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      bounds="#window-container"
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

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
        PaperComponent={PaperComponent}
        aria-labelledby={`draggable-dialog-title`}
        hideBackdrop
        disableEnforceFocus
        disableScrollLock
        style={{ pointerEvents: "none" }}
        sx={{ zIndex: focused ? 10 : 0 }}
        slotProps={{
          paper: {
            sx: {
              pointerEvents: "auto",
              resize: "both",
              overflow: "auto",
              minWidth: 300,
              minHeight: 200,
              maxWidth: maxSize.width,
              maxHeight: maxSize.height,
            },
          },
        }}
      >
        <DialogTitle style={{ cursor: "move" }} id={`draggable-dialog-title`}>
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
