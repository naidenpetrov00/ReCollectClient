import "@mui/material/styles";

declare module "@mui/material/styles" {
  // interface AppColorVariant {
  //   light: string;
  //   dark: string;
  // }

  // export interface AppColors {
  //   primaryA0: AppColorVariant;
  //   primaryA10: AppColorVariant;
  //   primaryA20: AppColorVariant;
  //   primaryA30: AppColorVariant;
  //   primaryA40: AppColorVariant;
  //   primaryA50: AppColorVariant;
  //   dangerA0: AppColorVariant;
  //   dangerA10: AppColorVariant;
  //   dangerA20: AppColorVariant;
  //   dangerA30: AppColorVariant;
  //   dangerA40: AppColorVariant;
  //   dangerA50: AppColorVariant;
  //   warningA0: AppColorVariant;
  //   warningA10: AppColorVariant;
  //   warningA20: AppColorVariant;
  //   warningA30: AppColorVariant;
  //   warningA40: AppColorVariant;
  //   warningA50: AppColorVariant;
  //   surfaceA0: AppColorVariant;
  //   surfaceA10: AppColorVariant;
  //   surfaceA20: AppColorVariant;
  //   surfaceA30: AppColorVariant;
  //   surfaceA40: AppColorVariant;
  //   surfaceA50: AppColorVariant;
  //   surfaceTonalA0: AppColorVariant;
  //   surfaceTonalA10: AppColorVariant;
  //   surfaceTonalA20: AppColorVariant;
  //   surfaceTonalA30: AppColorVariant;
  //   surfaceTonalA40: AppColorVariant;
  //   surfaceTonalA50: AppColorVariant;
  // }
  interface AppColors {
    primaryA0: string;
    primaryA10: string;
    primaryA20: string;
    primaryA30: string;
    primaryA40: string;
    primaryA50: string;
    dangerA0: string;
    dangerA10: string;
    dangerA20: string;
    dangerA30: string;
    dangerA50: string;
    dangerA40: string;
    warningA0: string;
    warningA10: string;
    warningA20: string;
    warningA30: string;
    warningA40: string;
    warningA50: string;
    surfaceA0: string;
    surfaceA10: string;
    surfaceA20: string;
    surfaceA30: string;
    surfaceA40: string;
    surfaceA50: string;
    surfaceTonalA0: string;
    surfaceTonalA10: string;
    surfaceTonalA20: string;
    surfaceTonalA30: string;
    surfaceTonalA40: string;
    surfaceTonalA50: string;
  }

  interface Palette {
    appColors: AppColors;
  }

  interface PaletteOptions {
    appColors?: Partial<AppColors>;
  }
}
