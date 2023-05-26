import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledH1 = styled(Typography)<{
  fontSize?: string;
  color?: string;
}>`
  font-size: ${(props) => props.fontSize || "2.5rem"};
  color: ${(props) => props.color || props.theme.title.black};
`;
