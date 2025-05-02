import React from "react";
import Draggable from "react-draggable";

import { PaperProps, Paper } from "@mui/material";

export function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      positionOffset={{ x: "250px", y: 0 }}
      // bounds={{
      //   left: 100,
      //   top: 0,
      //   right: 0,
      //   bottom: 0,
      // }}
      bounds="#window-container"
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}
