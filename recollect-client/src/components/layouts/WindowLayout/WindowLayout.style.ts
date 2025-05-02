import { CSSProperties } from "react";

import { SxProps } from "@mui/material";

interface WindowLayoutStyle {
  dialogStyle: CSSProperties;
  dialogSx: (focused: boolean) => SxProps;
  dialogPaper: (maxWidth: number, maxHeight: number) => SxProps;
  dialogTitleStyle: CSSProperties;
}

export const windowLayoutStyle: WindowLayoutStyle = {
  dialogStyle: { pointerEvents: "none" },
  dialogSx: (focused) => ({
    zIndex: focused ? 10 : 0,
  }),
  dialogPaper: (maxWidth, maxHeight) => ({
    pointerEvents: "auto",
    resize: "both",
    overflow: "auto",
    minWidth: 300,
    minHeight: 200,
    maxWidth,
    maxHeight,
    ml:0
  }),
  dialogTitleStyle: { cursor: "move" },
};
