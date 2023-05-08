import { StyledButton } from "./IconButton.styles";

const IconButton = (props: any) => {
  return (
    <StyledButton variant="contained" {...props}>
      {props.children}
    </StyledButton>
  );
};

export default IconButton;
