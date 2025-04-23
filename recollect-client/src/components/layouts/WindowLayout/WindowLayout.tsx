import {
  PaperProps,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { ReactNode } from "react";
import Draggable from "react-draggable";

function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

interface WindowLayoutProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const WindowLayout = ({ title, children }: WindowLayoutProps) => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

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
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby={`draggable-dialog-${title}`}
        hideBackdrop
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id={`draggable-dialog-${title}`}
        >
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
