import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
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
              justifyContent: "center",
              alignItems: "center",
              color: Theme.sidebar.textColor,
            }}
          >
            <Avatar
              src={assets.images.logo}
              sx={{
                width: "4vmin",
              }}
            />
            <h1>Footstats</h1>
          </Stack>
        </Toolbar>
        {appRoutes.map((route) =>
          route.sidebarProps ? <SideBarItem item={route} /> : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
