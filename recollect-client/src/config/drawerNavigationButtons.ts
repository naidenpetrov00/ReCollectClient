import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";

import { NavigationsConfig, NavigationTypes } from "../types/navigation";

export const navigationsConfig: NavigationsConfig = [
  {
    key: "cases",
    type: NavigationTypes.Button,
    label: "Cases",
    Icon: DescriptionIcon,
    onClick: () => openDocumentsWindow(),
  },
  {
    key: "tools",
    type: NavigationTypes.ButtonList,
    label: "Tools",
    Icon: FolderIcon,
    children: [
      {
        key: "inbox",
        type: NavigationTypes.Button,
        label: "Inbox",
        Icon: EmailIcon,
        onClick: () => openInboxWindow(),
      },
      {
        key: "users",
        type: NavigationTypes.Button,
        label: "Users",
        Icon: PeopleIcon,
        onClick: () => openUsersWindow(),
      },
    ],
  },
];
function openDocumentsWindow() {
  throw new Error("Function not implemented.");
}

function openInboxWindow() {
  throw new Error("Function not implemented.");
}

function openUsersWindow() {
  throw new Error("Function not implemented.");
}
