import { ReactNode } from "react";
import { StyledH1 } from "./Title.styles";

type Props = {
  children?: ReactNode;
  fontSize?: string;
  color?: string;
};

const Title = (props: Props) => {
  return <StyledH1 {...props}>{props.children}</StyledH1>;
};

export default Title;
