import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Theme from "../../styles/Theme";
import { Outlet } from "react-router";
import Topbar from "../Topbar/Topbar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: "300px",
          flexShrink: 0,
          backgroundColor: Theme.sidebar.bg,
          color: Theme.sidebar.color,
        }}
      >
        <Sidebar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 300px)`,
          minHeight: "100vh",
          backgroundColor: Theme.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
