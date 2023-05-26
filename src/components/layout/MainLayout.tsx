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
          flex: "1 1 20%",
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
          flex: "1 1 80%",
          p: 3,
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
