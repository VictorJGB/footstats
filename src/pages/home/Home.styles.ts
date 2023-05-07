import styled from "styled-components";

import { Button } from "@mui/material";
import Theme from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;
`;

export const TitleContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  text-align: start;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70vmin;
  height: 25vmax;
  background-color: ${(props) => props.theme.secondaryBg};

  border-radius: 16px;
`;

export const Title = styled.h1`
  font-size: 5vmin;
  color: ${(props) => props.color};
`;
export const SubTitle = styled.h2`
  font-size: 2.5vmin;
  font-weight: 500;

  color: ${(props) => props.color};
`;

export const Bold = styled.strong`
  color: ${(Props) => Props.theme.bold.color};
`;

export const IconButton = styled(Button)({
  backgroundColor: "white",
});
