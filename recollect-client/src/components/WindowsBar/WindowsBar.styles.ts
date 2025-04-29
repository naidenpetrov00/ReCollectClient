import { SxProps } from "@mui/material";

interface WindowBarStyles {
  windowsBarsContainer: SxProps;
}

export const windowsBarStyles: WindowBarStyles = {
  windowsBarsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    flex: 1,
  },
};
