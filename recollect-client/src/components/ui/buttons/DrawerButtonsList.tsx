import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DrawerButton } from "./DrawerButton";
import { NavigationAccordion, NavigationItem } from "../../../types/navigation";

interface DrawerButtonsList {
  navigation: NavigationAccordion;
}

export const DrawerButtonsList = ({ navigation }: DrawerButtonsList) => {
  const { children, Icon, label, key } = navigation;
  return (
    <Accordion key={key} disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {label}
      </AccordionSummary>
      <AccordionDetails
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        {children.map((child) => (
          <DrawerButton navigation={child} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
