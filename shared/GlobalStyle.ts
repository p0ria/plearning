import { createGlobalStyle, ThemeProps } from "styled-components";
import { Theme } from "./theme";

export type MainThemeProps = ThemeProps<Theme>;
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
    body {
        margin: 0;
        font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    button:focus {
        outline: none;
    }

    a {
        color: ${({ theme }) => theme.palette.action.active};
        text-decoration: none;
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.palette.action.hover};
            text-decoration: underline;
        }
    }

    .en {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
    }

    [class^="devicon-"] {
        font-size: 5rem;
      }
`;
