import { Button } from "@mui/material";

import { useAppDispatch } from "../../../hooks/reduxHooks";
import { NavigationButton } from "../../../types/navigation";
import { openWindow } from "../../../store/slices/windowsSlice";

type DrawerButtonProps = {
  navigation: NavigationButton;
};

export const DrawerButton = ({ navigation }: DrawerButtonProps) => {
  const dispatch = useAppDispatch();

  const onDrawerButtonClickHandler = () => {
    dispatch(openWindow(label));
  };

  const { label, Icon } = navigation;
  return (
    <Button fullWidth startIcon={<Icon />} onClick={onDrawerButtonClickHandler}>
      {label}
    </Button>
  );
};
