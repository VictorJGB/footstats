import {
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
  Toolbar,
} from "@mui/material";
import assets from "../../assets";
import Theme from "../../styles/Theme";
import appRoutes from "../../routes/appRoutes";

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
            sx={{
              width: "100%",
              direction: "row",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: Theme.sidebar.color,
            }}
          >
            <Avatar src={assets.images.logo} />
            <h1>Footstats</h1>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            <ListItemButton
              sx={{
                color: "white",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {route.sidebarProps.icon && route.sidebarProps.icon}
              </ListItemIcon>
              {route.sidebarProps.displayText}
            </ListItemButton>
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
