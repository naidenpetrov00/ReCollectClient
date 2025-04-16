import { SxProps, Theme } from "@mui/material";

interface MainLayoutStyles {
  container: SxProps<Theme>;
  content: SxProps<Theme>;
}

export const mainLayoutStyles: MainLayoutStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: { flexGrow: 1 },
};
