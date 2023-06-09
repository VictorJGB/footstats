import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import Theme from "../../styles/Theme";
import appRoutes from "../../routes/appRoutes";
import SideBarItem from "./Item/Item";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "300px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: Theme.sidebar.bg,
        },
      }}
    >
      <List disablePadding>
        <Toolbar>
          <Stack
            component={Link}
            to={"/"}
            sx={{
              width: "100%",
              direction: "row",
              flexDirection: "row",
              padding: "3%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10%",
              color: Theme.sidebar.textColor,
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <SportsSoccerIcon
                sx={{ fontSize: "5vmin", color: Theme.title.primary }}
              />
            </Avatar>
            <h1>Footstats</h1>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? <SideBarItem key={index} item={route} /> : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
