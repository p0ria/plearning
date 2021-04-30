import { ThemeContext } from "./../shared/ThemeProvider";
import { Dispatch, SetStateAction, useContext } from "react";
import { Theme } from "../shared/theme";

export const useTheme = (): {
  theme: Theme;
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
} => useContext(ThemeContext);
