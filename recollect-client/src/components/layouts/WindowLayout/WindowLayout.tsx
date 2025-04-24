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
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const WindowLayout = ({ title, children }: WindowLayoutProps) => {
  const [open, setOpen] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [maxSize, setMaxSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    const mainEL = document.getElementById("window-container");
    if (mainEL) {
      setContainer(mainEL);
      const rect = mainEL.getBoundingClientRect();
      console.log(rect);

      setMaxSize({
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        container={container}
        PaperComponent={PaperComponent}
        aria-labelledby={`draggable-dialog-title`}
        hideBackdrop
        disableEnforceFocus
        disableScrollLock
        style={{ pointerEvents: "none" }}
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
          Subscribe
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
