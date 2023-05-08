import Button from "@mui/material/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)({
  padding: "3% 5%",
  margin: "2%",
  backgroundColor: "#EF065B",

  "&: hover": {
    backgroundColor: "#BF0449",
  },
});
