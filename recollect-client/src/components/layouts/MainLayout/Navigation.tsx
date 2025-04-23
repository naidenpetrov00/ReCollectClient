import { Box } from "@mui/material";
import { DrawerButton } from "../../ui/buttons/DrawerButton";
import { navigationsConfig } from "../../../config/drawerNavigationButtons";
import { NavigationTypes } from "../../../types/navigation";
import { DrawerButtonsList } from "../../ui/buttons/DrawerButtonsList";

export const Navigation = () => {
  return (
    <Box>
      {navigationsConfig.map((navigation, index) => {
        if (navigation.type === NavigationTypes.Button) {
          return <DrawerButton navigation={navigation} />;
        } else {
          return <DrawerButtonsList navigation={navigation} />;
        }
      })}
    </Box>
  );
};
