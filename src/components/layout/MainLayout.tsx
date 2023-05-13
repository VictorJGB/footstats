import { Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Theme from "../../styles/Theme";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: "300px",
          flexShrink: 0,
          backgroundColor: Theme.sidebar.bg,
          color: Theme.sidebar.textColor,
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
          backgroundColor: Theme.background.white,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
