import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./css/Dashboard.css";
import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    paper_topic_card: {
      height: theme.spacing(20),
      backgroundColor: "#3AAFA9",
      padding: "10px",
      textAlign: "center",
    },
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={3} lg={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={9} lg={10}>
        {/* Right hand side grid */}
        <Box className="right_grid">
          {/* Search Bar */}
          <Grid container spacing={0} className="text_container">
            <Grid item xs={8} lg={8}>
              <center>
                <input
                  type="text"
                  placeholder="SEARCH FOR PAPERS"
                  className="text_field"
                />
              </center>
            </Grid>
            <Grid item xs={2} lg={4} classname="button_container">
              <center>
                <Button
                  variant="outlined"
                  className="text_button"
                  style={{
                    backgroundColor: "#17252a",
                    color: "#FEFFFF",
                    width: "60%",
                  }}
                >
                  SEARCH
                </Button>
              </center>
            </Grid>
          </Grid>
          <div className="card_div">
            <Grid item lg={12}>
              <div className="card_chip">SEARCH BY SUBJECT</div>
            </Grid>
            {/* Topic Cards */}
            <Grid container spacing={2}>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper elevation={4} className={classes.paper_topic_card}>
                  {/* <Typography variant="h5" className={classes.paper_text}>
                  
                </Typography> */}
                </Paper>
              </Grid>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper
                  elevation={4}
                  className={classes.paper_topic_card}
                ></Paper>
              </Grid>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper
                  elevation={4}
                  className={classes.paper_topic_card}
                ></Paper>
              </Grid>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper
                  elevation={4}
                  className={classes.paper_topic_card}
                ></Paper>
              </Grid>
            </Grid>
          </div>
          <div className="card_div">
            <Grid item lg={12}>
              <div className="card_chip">YOUR PAPERS</div>
            </Grid>
            {/* USER PAPER Cards */}
            <Grid container spacing={2}>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper elevation={4} className={classes.paper_topic_card}>
                  {/* <Typography variant="h5" className={classes.paper_text}>
                  
                </Typography> */}
                </Paper>
              </Grid>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper
                  elevation={4}
                  className={classes.paper_topic_card}
                ></Paper>
              </Grid>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper
                  elevation={4}
                  className={classes.paper_topic_card}
                ></Paper>
              </Grid>
              <Grid item xs={3} lg={3} spacing={0}>
                <Paper
                  elevation={4}
                  className={classes.paper_topic_card}
                ></Paper>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
