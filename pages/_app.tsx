import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../shared/styles";
import { theme } from "../shared/theme";


export default function MyApp({ Component, pageProps }) {
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
