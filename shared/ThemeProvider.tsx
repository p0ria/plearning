import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import { constants } from "./constants";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [theme, setTheme] = useState(isDarkTheme ? darkTheme : lightTheme)

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem(constants.theme) === 'dark')
  }, [])

  useEffect(() => {
    setTheme(isDarkTheme ? darkTheme : lightTheme)
    localStorage.setItem(constants.theme, isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, setIsDarkTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <StyledComponentThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          {children}
        </StyledComponentThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
