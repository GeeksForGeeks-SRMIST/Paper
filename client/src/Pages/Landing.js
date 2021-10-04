import React from "react";

import { Typography, makeStyles, Box } from "@material-ui/core";

import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.heading}>
        <Typography variant="h2" component="h1">
          Welcome to research.
        </Typography>
        <Typography variant="h4" component="h3">
          The all in one portal for all your research needs.
        </Typography>
      </Box>
    </>
  );
};

export default Landing;
