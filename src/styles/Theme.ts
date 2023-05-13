const themeColors = {
  main: {
    primary: "#EF065B",
    secondary: "#5F3051",
    white: "#eeeeee",
    black: "#333",
  },
  bg: "#2A1423",
  hoverBg: "#442239",
};

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
  background: {
    primary: themeColors.main.primary,
    dark: themeColors.bg,
    light: themeColors.main.secondary,
    white: themeColors.main.white,
    black: themeColors.main.black,
    hoverBg: themeColors.hoverBg,
  },
};

export default Theme;
