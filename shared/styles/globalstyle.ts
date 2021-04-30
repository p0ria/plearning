import { createGlobalStyle, ThemeProps } from "styled-components";
import { theme } from "../theme";

export type MainThemeProps = ThemeProps<typeof theme>;
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
    body {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.basic};
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

    a {
        color: ${({ theme }) => theme.colors.blue};
        text-decoration: none;
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.colors.pink};
            text-decoration: underline;
        }
    }
`;
