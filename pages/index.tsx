import { Button, Typography } from "@material-ui/core";
import React from "react";
import Header from "../components/Header/Header";
import Link from "next/link";
import store, { RootState } from "../state/store";
import { AppState, appState } from "../state/app/app.state";
import { useSelector } from "react-redux";

export default function Home() {
  const appState = useSelector<RootState, AppState>(state => state.app)
  console.log(appState);
  return (
    <>
      <Header />
      <Link href="/a"><a>Go to A by Link</a></Link>
      <a href="/a"> Go to A by anchor element</a>
      <Typography variant="h1" className="en">Hello</Typography>
      <Typography variant="h2">سلام روز بخیر <span className="fd">123</span></Typography>
      <Button variant="contained" className="en" color="primary">Hello World</Button>
    </>
  )
}

export const getServerSideProps = store.getServerSideProps(({ store }) => {
  console.log('INSIDE Home getServerSideProps')
  store.dispatch(appState.actions.setUsername('ALI'))
});