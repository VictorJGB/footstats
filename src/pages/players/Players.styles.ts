import InputBase from "@mui/material/InputBase";
import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    align-self: flex-start;
  }
`;

export const StyledInput = styled(InputBase)({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: `1px solid ${Theme.tertiaryBg}`,
    backgroundColor: "white",
    color: "white",
    fontSize: 16,
    padding: "1em",
    "&:focus": {
      borderRadius: 4,
      borderColor: `${Theme.tertiaryBg}`,
      boxShadow: "0 0 0 0.2rem rgb(239, 6, 91,0.25)",

      "#teamSelectLabel": {
        color: "white",
      },
    },
  },
});
