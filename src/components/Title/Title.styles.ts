import styled from "styled-components";

export const StyledH1 = styled.h1<{ fontSize?: string; color?: string }>`
  font-size: ${(props) => props.fontSize || "5vmin"};
  color: ${(props) => props.color || props.theme.title.black};
`;
