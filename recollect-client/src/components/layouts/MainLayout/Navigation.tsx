import { Box, Portal } from "@mui/material";

import { WindowLayout } from "../WindowLayout/WindowLayout";
import { NavigationTypes } from "../../../types/navigation";
import { DrawerButton } from "../../ui/buttons/DrawerButton";
import { DrawerButtonsList } from "../../ui/buttons/DrawerButtonsList";
import { navigationsConfig } from "../../../config/drawerNavigationButtons";

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
      <WindowLayout title="Cases" open={true}>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
        <div>Cases window content</div>
      </WindowLayout>
      <WindowLayout title="People" open={true}>
        <div>People window content</div>
        <div>People window content</div>
        <div>People window content</div>
        <div>People window content</div>
        <div>People window content</div>
      </WindowLayout>
    </Box>
  );
};
