import { SxProps } from "@mui/material";

interface WindowBarStyles {
  windowBarContainer: (focused: boolean) => SxProps;
  title: SxProps;
  icons: SxProps;
}

export const windowBarStyles: WindowBarStyles = {
  windowBarContainer: (focused) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "background.paper",
    p: 0.5,
    borderRadius: 1,
    transform: focused ? "scale(1.1)" : "scale(1)",
    m: focused ? 1 : 0,
     cursor: "grab"
    // maxWidth: "50px",
  }),
  title: {
    color: "black",
    paddingLeft: "3px",
  },
  icons: { color: "black", p: "2px" },
};
