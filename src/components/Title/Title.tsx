import { StyledH1 } from "./Title.styles";

const Title = (props: any) => {
  return (
    <StyledH1 fontSize={props.fontSize} color={props.color}>
      {props.children}
    </StyledH1>
  );
};

export default Title;
