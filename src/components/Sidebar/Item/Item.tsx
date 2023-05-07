import { ListItemButton, ListItemIcon } from "@mui/material";
import { RouteType } from "../../../routes/config";
import { Link } from "react-router-dom";
import Theme from "../../../styles/Theme";

type Props = {
  item: RouteType;
};

const SideBarItem = ({ item }: Props) => {
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        color: "white",

        "&: hover": {
          backgroundColor: Theme.sidebar.hoverBg,
        },
        padding: "5% 10%",
      }}
    >
      <ListItemIcon sx={{ color: "white" }}>
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SideBarItem;
