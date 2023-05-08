import styled from "styled-components";

export const CardWrapper = styled.div<{
  width?: string;
  height?: string;
  bgColor?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.width ?? "50vmin"};
  height: ${(props) => props.height ?? "25vmax"};
  background-color: ${(props) => props.bgColor ?? props.theme.secondaryBg};

  border-radius: 16px;
`;
