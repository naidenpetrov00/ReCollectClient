import { useMemo } from "react";

import { createTheme, Theme } from "@mui/material";
import { ThemeMode } from "../types/design";
import { appColors } from "../config/colors";

export const useCustomTheme = (mode: ThemeMode = ThemeMode.Light): Theme => {
  const resolvedAppColors = Object.fromEntries(
    Object.entries(appColors).map(([key, value]) => [key, value[mode]])
  );

  return useMemo(() => {
    return createTheme({
      palette: {
        appColors: resolvedAppColors,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: (themeParam) => ({
            ":root": {
              "--secondary-main": themeParam.palette.secondary.main,
              "--secondary-light": themeParam.palette.secondary.light,
              "--primary-main": themeParam.palette.primary.main,
              "--primary-light": themeParam.palette.primary.light,
            },
          }),
        },
      },
    });
  }, [mode]);
};
