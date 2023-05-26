import { SxProps } from "@mui/material";
import Theme from "../../../styles/Theme";

export const homeBtnStyle: SxProps = {
  width: "50%",
  padding: "3% 5%",
  margin: "2%",
  backgroundColor: Theme.background.primary,
  color: Theme.title.white,
  transition: "0.5s ease",
  fontSize: {
    xl: "2.5rem", //1536px
    lg: "1rem", //1200px
  },

  "&: hover": {
    backgroundColor: Theme.background.hoverBg,
  },
};
