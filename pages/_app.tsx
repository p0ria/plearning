import Head from "next/head";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../shared/styles";
import { theme } from "../shared/theme";
import { removeMuiDuplicateStyle } from "../utils/dom-utils";


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    removeMuiDuplicateStyle()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>PLearning</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
