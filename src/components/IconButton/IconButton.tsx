import { StyledButton } from "./IconButton.styles";

const IconButton = (props: any) => {
  return (
    <StyledButton
      variant="contained"
      href={props.href}
      startIcon={props.startIcon}
    >
      {props.children}
    </StyledButton>
  );
};

export default IconButton;
