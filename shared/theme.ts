import { createMuiTheme } from "@material-ui/core";

const commonTheme: Theme = {
  direction: 'rtl',
  typography: {
    fontFamily: "'Yekan', 'Arial', sans-serif",
  },
} as Theme;

export const lightTheme = createMuiTheme({
  ...commonTheme,
  palette: {
    type: "light"
  },
});

export const darkTheme = createMuiTheme({
  ...commonTheme,
  palette: {
    type: "dark",
  },
});

export type Theme = typeof lightTheme;
