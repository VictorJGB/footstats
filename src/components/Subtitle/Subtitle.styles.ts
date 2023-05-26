import styled from "styled-components";

export const StyledH2 = styled.h2<{ fontSize?: string; color?: string }>`
  font-size: ${(props) => props.fontSize ?? "1.8rem"};
  font-weight: 500;

  color: ${(props) => props.color ?? props.theme.title.white};
`;
