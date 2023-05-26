import { ReactNode } from "react";
import { CardWrapper } from "./Card.styles";
import { SxProps } from "@mui/material/styles";

type Props = {
  children?: ReactNode;
  sx?: SxProps;
};

const Card = (props: Props) => {
  return <CardWrapper {...props}>{props.children}</CardWrapper>;
};

export default Card;
