import React, { useState } from "react";
import firebase, { storage } from "../config/fire";
import { Grid, Box, Paper, makeStyles } from "@material-ui/core";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./css/Paper.css";

const PublishPaper = () => {
  const [path, updatePath] = useState("");
  const [fileState, setFileState] = useState("");

  const useStyles = makeStyles((theme) => ({
    paper_topic_card: {
      height: theme.spacing(20),
      backgroundColor: "#3AAFA9",
      padding: "10px",
      textAlign: "center",
      background:
        "linear-gradient(to bottom, rgba(58, 175, 169,.6), rgba(58, 175, 169,.4)), url('http://lorempixel.com/800/600/nature/2') center",
    },
  }));

  const classes = useStyles();

  const pdfHandler = (e) => {
    pdfSaveHandler(e.target.files[0]);
  };

  const pdfSaveHandler = (file) => {
    if (file.name != undefined) {
      const uploadTask = storage.child(`files/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              setFileState("running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          setFileState("completed");
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            updatePath(downloadURL);
            console.log(path);
          });
        }
      );
      console.log(path);
    }
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          {/* Right hand side grid */}
          <Box className="right_grid_publish">
            <div className="card_chip">PUBLISH PAPER</div>
            <Grid container spacing={0} className="whole_div">
              <Grid item xs={6} lg={6}>
                <div className="upload_div">
                  <br />
                  <div className="card_chip">UPLOAD PDF</div>
                  {path ? <h3>{path}</h3> : <p>ERROR</p>}
                  <input
                    type="file"
                    accept=".pdf"
                    multiple={false}
                    id="file"
                    name="file"
                    onChange={pdfHandler}
                  />
                </div>
              </Grid>
              <Grid item xs={6} lg={6}>
                <br />
                <div className="card_chip">WRITE PAPER</div>
                <Paper
                  elevation={4}
                  className={classes.paper_topic_card}
                ></Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PublishPaper;
