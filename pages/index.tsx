import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Link from "next/link";
import store, { RootState } from "../state/store";
import { AppState, appState } from "../state/app/app.state";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../state/app/app.effects";
import { motion } from "framer-motion";

export default function Home() {
  const appState = useSelector<RootState, AppState>(state => state.app)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsername())
  }, [])
  return (
    <motion.div initial={{ y: -200 }} animate={{ y: 0, transition: { duration: .3 } }}>
      <Header />
      <Link href="/a"><a>Go to A by Link</a></Link>
      <a href="/a"> Go to A by anchor element</a>
      <Typography variant="h1" className="en">Hello</Typography>
      <Typography variant="h2">سلام روز بخیر <span className="fd">123</span></Typography>
      <Button variant="contained" className="en" color="primary">Hello World</Button>
    </motion.div>
  )
}

export const getServerSideProps = store.getServerSideProps(({ store }) => {
  console.log('INSIDE Home getServerSideProps')
});