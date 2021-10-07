import React from "react";

import { Typography, makeStyles, Box, Grid } from "@material-ui/core";

import Navbar from "../Components/Navbar";
import Image from "../Idea/img.jpg";
import "./css/Landing.css";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    height: "100vh",
    margin: "auto 0",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <div className="body">
        <Navbar />
        <div class="container">
          <div class="wrapper">
            <div class="header"></div>
            <div class="main">
              <div class="hero-img">
                <img src={Image} alt="" className="image" />
              </div>
              <div class="hero-text">
                <h1>Read the latest from the greatest minds</h1>
                <p>
                  Paper re-imagines the way we read and analyse the latest from
                  every field. You can upload as well as create research papers.
                </p>
                <a href="/login">LOGIN</a>
              </div>
            </div>
            <div class="social">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
