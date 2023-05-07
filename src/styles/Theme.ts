import themeColors from "./ThemeColors";

const Theme = {
  sidebar: {
    bg: themeColors.bg,
    textColor: themeColors.main.white,
    iconColor: themeColors.main.primary,
    hoverBg: themeColors.hoverBg,
    activeBg: "#1e253a",
  },
  title: {
    primary: themeColors.main.primary,
    secondary: themeColors.main.secondary,
    black: themeColors.main.black,
    white: themeColors.main.white,
  },
  bold: {
    color: themeColors.main.primary,
  },
  mainBg: themeColors.main.white,
  secondaryBg: themeColors.bg,
  tertiaryBg: themeColors.main.primary,
};

export default Theme;
