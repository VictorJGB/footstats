import styled from "styled-components";

export const StyledH2 = styled.h2<{ fontSize?: string; color?: string }>`
  font-size: ${(props) => props.fontSize || "2.5vmin"};
  font-weight: 500;

  color: ${(props) => props.color || props.theme.title.black};
`;
