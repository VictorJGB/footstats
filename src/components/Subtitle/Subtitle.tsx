import { ReactNode } from "react";

import { StyledH2 } from "./Subtitle.styles";

import { TypographyProps } from "@mui/material/Typography";

type Props = {
  children?: ReactNode;
  sx?: TypographyProps;
};

const Subtitle = (props: Props) => {
  return (
    <StyledH2 variant="h2" {...props}>
      {props.children}
    </StyledH2>
  );
};

export default Subtitle;
