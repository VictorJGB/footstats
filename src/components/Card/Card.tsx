import { ReactNode } from "react";
import { CardWrapper } from "./Card.styles";

type Props = {
  children?: ReactNode;
  width?: string;
  height?: string;
  bgColor?: string;
};

const Card = (props: Props) => {
  return <CardWrapper {...props}>{props.children}</CardWrapper>;
};

export default Card;
