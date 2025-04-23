import { Button } from "@mui/material";

import { NavigationButton } from "../../../types/navigation";

type DrawerButtonProps = {
  navigation: NavigationButton;
};

export const DrawerButton = ({ navigation }: DrawerButtonProps) => {
  const { label, Icon, onClick } = navigation;
  return (
    <Button fullWidth startIcon={<Icon />} onClick={onClick}>
      {label}
    </Button>
  );
};
