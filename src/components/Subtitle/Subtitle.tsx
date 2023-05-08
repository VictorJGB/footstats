import { ReactNode } from "react";
import { StyledH2 } from "./Subtitle.styles";

type Props = {
  children?: ReactNode;
  fontSize?: string;
  color?: string;
};

const Subtitle = (props: Props) => {
  return <StyledH2 {...props}>{props.children}</StyledH2>;
};

export default Subtitle;
