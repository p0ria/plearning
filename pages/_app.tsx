
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC, useEffect } from "react";
import ThemeProvider from "../shared/ThemeProvider";
import store from "../state/store";
import { removeMuiDuplicateStyle } from "../utils/dom-utils";
import 'tailwindcss/tailwind.css';


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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

export default store.withRedux(MyApp);
