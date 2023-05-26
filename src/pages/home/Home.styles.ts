import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;
`;

export const TitleContainer = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;
`;

export const Bold = styled.strong`
  color: ${(Props) => Props.theme.bold.color};
`;
