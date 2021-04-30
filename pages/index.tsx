import { Button, Typography } from "@material-ui/core";
import React from "react";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Typography variant="h1" className="en">Hello</Typography>
      <Typography variant="h2">سلام روز بخیر <span className="fd">123</span></Typography>
      <Button variant="contained" className="en" color="primary">Hello World</Button>
    </>
  )
}
