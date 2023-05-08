import { StyledH2 } from "./Subtitle.styles";

const Subtitle = (props: any) => {
  return (
    <StyledH2 fontSize={props.fontSize} color={props.color}>
      {props.children}
    </StyledH2>
  );
};

export default Subtitle;
