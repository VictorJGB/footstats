import styled from "styled-components";
import Theme from "../../styles/Theme";

import Box from "@mui/material/Box";

export const CardWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: "80%";
  height: "40%";
  background-color: ${Theme.background.dark};

  border-radius: 1.6rem;
`;
