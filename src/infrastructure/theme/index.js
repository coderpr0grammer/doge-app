import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const MyTheme = {
  light: {
    dark: false,
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#FC7E94",
      brand: {
        primary: "#FDD6D7",
        background: "#FC7E94",
        accent: "#FBCBD0",
        muted: "#847474",
      },
      constants: {
        text: "#FDD6D7",
        white: "#FFFFFF",
        hotpink: "#FC7E94",
        background: "#4D2238",
        accent: "#FDD6D7",
        muted: "#847474",
      }
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fontSizes: {
      caption: "12px",
      button: "14px",
      body: "16px",
      title: "20px",
      h5: "24px",
      h4: "34px",
      h3: "45px",
      h2: "56px",
      h1: "112px",
    },
  },
  dark: {
    dark: true,
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "#FC7E94",
      card: "#161B22",
      background: "#0D1117",
      brand: {
        text: "#FDD6D7",
        white: "#FFFFFF",
        primary: "#FC7E94",
        background: "#4D2238",
        accent: "#FDD6D7",
        muted: "#847474",
      },
      constants: {
        text: "#FDD6D7",
        white: "#FFFFFF",
        hotpink: "#FC7E94",
        background: "#4D2238",
        accent: "#FDD6D7",
        muted: "#847474",
      }
    },
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    caption: "12px",
    button: "14px",
    body: "16px",
    title: "20px",
    h5: "24px",
    h4: "34px",
    h3: "45px",
    h2: "56px",
    h1: "112px",
  },
};
