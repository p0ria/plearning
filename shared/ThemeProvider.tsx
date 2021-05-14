import { CssBaseline, StylesProvider, ThemeProvider as MuiThemeProvider, jssPreset } from "@material-ui/core";
import { create } from "jss";
import rtl from 'jss-rtl';
import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import { constants } from "./constants";
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext(null);
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [theme, setTheme] = useState(isDarkTheme ? darkTheme : lightTheme)

  useIsomorphicLayoutEffect(() => {
    setIsDarkTheme(localStorage.getItem(constants.theme) === 'dark')
  }, [])

  useEffect(() => {
    setTheme(isDarkTheme ? darkTheme : lightTheme)
    localStorage.setItem(constants.theme, isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, setIsDarkTheme }}>
      <MuiThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <StyledComponentThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            {children}
          </StyledComponentThemeProvider>
        </StylesProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
