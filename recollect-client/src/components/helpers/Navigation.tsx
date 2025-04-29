import { Box } from "@mui/material";

import { DrawerButton } from "../ui/buttons/DrawerButton";
import { WindowLayout } from "../layouts/WindowLayout/WindowLayout";
import { DrawerButtonsList } from "../ui/buttons/DrawerButtonsList";

import { NavigationTypes } from "../../types/navigation";
import { navigationsConfig } from "../../config/drawerNavigationButtons";

import { useAppSelector } from "../../hooks/reduxHooks";

export const Navigation = () => {
  const windows = useAppSelector((state) => state.windows);

  return (
    <Box>
      {navigationsConfig.map((navigation, index) => {
        if (navigation.type === NavigationTypes.Button) {
          return <DrawerButton key={index} navigation={navigation} />;
        } else {
          return <DrawerButtonsList key={index} navigation={navigation} />;
        }
      })}
      {Object.entries(windows).map(([key, window]) => (
        <WindowLayout
          key={key}
          title={window.title}
          open={window.isOpen}
        ></WindowLayout>
      ))}
    </Box>
  );
};
