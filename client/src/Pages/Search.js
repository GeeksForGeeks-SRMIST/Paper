import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Sidebar from "../Components/Sidebar/Sidebar";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);

  const useStyles = makeStyles((theme) => ({
    paper_topic_card: {
      height: theme.spacing(20),
      backgroundColor: "#3AAFA9",
      padding: "10px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    paper_text: {
      color: "#FEFFFF",
      fontWeight: "bold",
      fontSize: "25px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const getPapers = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/paper/getAll`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPapers();
  }, []);

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          {/* Right hand side grid */}
          <Box className="right_grid">
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
                  <Paper
                    elevation={4}
                    className={`card_bg_image_yellow ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      COMPUTER SCIENCE
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Paper
                    elevation={4}
                    className={`card_bg_image ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      PHYSICS
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Paper
                    elevation={4}
                    className={`card_bg_image_green ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      MATHEMATICS
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Paper
                    elevation={4}
                    className={`card_bg_image_pink ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      QUANTITATIVE BIOLOGY
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div className="card_chip">RECENTLY UPLOADED PAPERS</div>
            <Grid container spacing={2}>
              {data.map((paper) => (
                <Grid item xs={3} lg={3} spacing={0}>
                  <iframe
                    src={paper.pdf_url}
                    width="100%"
                    height="100%"
                    name={paper.title}
                  ></iframe>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
