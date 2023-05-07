import { AppBar, Toolbar, Typography } from "@mui/material";
import Theme from "../../styles/Theme";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 300px)`,
        ml: "300px",
        boxShadow: "unset",
        backgroundColor: Theme.topbar.bg,
        color: Theme.topbar.color,
      }}
    >
      <Toolbar>
        <Typography variant="h6">FootStats</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
