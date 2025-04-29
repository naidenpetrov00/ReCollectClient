import TabIcon from "@mui/icons-material/Tab";
import DescriptionIcon from "@mui/icons-material/Description";

import { WindowName } from "../store/slices/windowsInitialState";
import { NavigationsConfig, NavigationTypes } from "../types/navigation";

export const navigationsConfig: NavigationsConfig = [
  {
    type: NavigationTypes.Button,
    label: "Case",
    Icon: DescriptionIcon,
  },
  {
    type: NavigationTypes.Button,
    label: "CasesList",
    Icon: DescriptionIcon,
  },
  {
    type: NavigationTypes.Button,
    label: "NewCase",
    Icon: DescriptionIcon,
  },
  // {
  //   type: NavigationTypes.ButtonList,
  //   label: "Tools",
  //   Icon: FolderIcon,
  //   children: [
  //     {
  //       type: NavigationTypes.Button,
  //       label: "Inbox",
  //       Icon: EmailIcon,
  //       onClick: () => openInboxWindow(),
  //     },
  //     {
  //       type: NavigationTypes.Button,
  //       label: "Users",
  //       Icon: PeopleIcon,
  //       onClick: () => openUsersWindow(),
  //     },
  //   ],
  // },
];

export const getIconByName = (name: WindowName) => {
  const icon = navigationsConfig.find((nav) => nav.label === name)?.Icon;
  if (icon) return icon;
  return TabIcon;
};
