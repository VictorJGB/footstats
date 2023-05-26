import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import Theme from "../../styles/Theme";
import SideBarItem from "./Item/Item";

import Title from "../Title/Title";

import appRoutes from "../../routes/appRoutes";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: {
          sm: "5%",
          md: "20%",
        },
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: {
            md: "20%",
          },
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
              padding: "3%",
              marginBottom: "10%",
              gap: "4%",
              color: Theme.sidebar.textColor,
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <SportsSoccerIcon
                sx={{
                  fontSize: {
                    md: "3rem",
                  },
                  color: Theme.title.primary,
                }}
              />
            </Avatar>
            <Title
              sx={{
                color: Theme.title.white,
                fontSize: {
                  md: "1.3rem",
                  lg: "1.4rem",
                },
                fontWeight: "700",
              }}
            >
              Footstats
            </Title>
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
