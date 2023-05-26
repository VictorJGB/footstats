import Theme from "../../../styles/Theme";

export const homeBtnStyle = {
  width: "50%",
  padding: "3% 5%",
  margin: "2%",
  backgroundColor: Theme.background.primary,
  color: Theme.title.white,
  transition: "0.5s ease",
  fontSize: "1.5rem",

  "&: hover": {
    backgroundColor: Theme.background.hoverBg,
  },
};
