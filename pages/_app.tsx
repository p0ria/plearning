
import Head from "next/head";
import React, { useEffect } from "react";
import ThemeProvider from "../shared/ThemeProvider";
import { removeMuiDuplicateStyle } from "../utils/dom-utils";


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    removeMuiDuplicateStyle()
  }, [])

  return (
    <ThemeProvider>
      <Head>
        <title>PLearning</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
