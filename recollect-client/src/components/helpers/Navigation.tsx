import { Box } from "@mui/material";

import { DrawerButton } from "../ui/buttons/DrawerButton";
import { WindowLayout } from "../layouts/WindowLayout/WindowLayout";
import { DrawerButtonsList } from "../ui/buttons/DrawerButtonsList";

import { useAppSelector } from "../../hooks/reduxHooks";
import { NavigationTypes } from "../../types/navigation";
import { selectOpenedWindows } from "../../store/slices/windowsSlice";
import { navigationsConfig } from "../../config/drawerNavigationButtons";

export const Navigation = () => {
  const openedWindows = useAppSelector(selectOpenedWindows);

  return (
    <Box>
      {navigationsConfig.map((navigation, index) => {
        if (navigation.type === NavigationTypes.Button) {
          return <DrawerButton key={index} navigation={navigation} />;
        } else {
          return <DrawerButtonsList key={index} navigation={navigation} />;
        }
      })}
      {Object.entries(openedWindows).map(([key, window]) => (
        <WindowLayout
          key={key}
          title={window.title}
          open={window.isOpen}
        ></WindowLayout>
      ))}
    </Box>
  );
};
