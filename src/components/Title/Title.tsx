import { ReactNode } from "react";
import { StyledH1 } from "./Title.styles";
import { TypographyProps } from "@mui/material";

type Props = {
  children?: ReactNode;
  sx?: TypographyProps;
};

const Title = (props: Props) => {
  return (
    <StyledH1 variant="h1" {...props}>
      {props.children}
    </StyledH1>
  );
};

export default Title;
