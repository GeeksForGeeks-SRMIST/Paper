import React, { useState } from "react";
import firebase, { storage } from "../config/fire";
import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Button,
  TextField,
} from "@material-ui/core";
import Sidebar from "../Components/Sidebar/Sidebar";
import Send from "@material-ui/icons/Send";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./css/Paper.css";

const PublishPaper = () => {
  let history = useHistory();

  const [path, updatePath] = useState("");
  const [fileState, setFileState] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");

  let localData = JSON.parse(localStorage.getItem("data"));

  async function predict(query) {
    var myParams = {
      data: query,
    };

    if (query != "") {
      await axios
        .post("http://localhost:7000/predict", myParams)
        .then(function (response) {
          console.log(response);
          setSubject(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("The search query cannot be empty");
    }
  }

  const publish = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/paper/newPaper",
        {
          id: localData.user_id,
          email: localData.identifier,
          pdf_url: path,
          title,
          description,
          subject: subject,
        },
        config
      );
      history.push("/dashboard");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
      console.log(error);
    }
  };

  const useStyles = makeStyles((theme) => ({
    paper_topic_card: {
      height: theme.spacing(20),
      backgroundColor: "#3AAFA9",
      padding: "10px",
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const pdfHandler = (e) => {
    pdfSaveHandler(e.target.files[0]);
  };

  const pdfSaveHandler = (file) => {
    if (file.name !== undefined) {
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
            <div className="card_chip title_card">PUBLISH PAPER</div>
            <Grid container spacing={0} className="whole_div">
              <Grid item xs={6} lg={6}>
                <div className="upload_div">
                  <br />
                  <div className="card_chip">UPLOAD PDF</div>
                  <br />
                  <div>
                    <Grid container spacing={0}>
                      <Grid item lg={3}>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            document.getElementById("file").click();
                          }}
                          startIcon={<Send />}
                        >
                          UPLOAD
                        </Button>
                      </Grid>
                      <Grid item lg={9}>
                        <input
                          type="text"
                          disabled
                          className="text_field"
                          value={path}
                        />
                      </Grid>
                    </Grid>
                    <input
                      type="file"
                      accept=".pdf"
                      multiple={false}
                      hidden
                      id="file"
                      name="file"
                      onChange={pdfHandler}
                    />
                  </div>
                  <br />
                  <div className="card_chip">PAPER TITLE</div>
                  <br />
                  <div>
                    <TextField
                      placeholder="PAPER TITLE"
                      multiline
                      fullWidth
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="card_chip">PAPER DESCRIPTION</div>
                  <br />
                  <div>
                    <TextField
                      placeholder="PAPER DESCRIPTION"
                      multiline
                      fullWidth
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <br />
                  <br />
                  <center>
                    <Button
                      variant="outlined"
                      className="text_button"
                      style={{
                        backgroundColor: "#17252a",
                        color: "#FEFFFF",
                        width: "60%",
                      }}
                      onClick={() => {
                        if (title) {
                          predict(`${title}`);
                        } else {
                          console.log("Title not available");
                        }
                      }}
                    >
                      ADD SUBJECT
                    </Button>
                    <Button
                      variant="outlined"
                      className="text_button"
                      style={{
                        backgroundColor: "#17252a",
                        color: "#FEFFFF",
                        width: "60%",
                      }}
                      onClick={publish}
                    >
                      SUBMIT
                    </Button>
                  </center>
                </div>
              </Grid>
              <Grid item xs={6} lg={6}>
                <br />
                <div className="card_chip">WRITE PAPER</div>
                <Paper
                  elevation={4}
                  className={`card_bg_image ${classes.paper_topic_card}`}
                ></Paper>
                <br />
                <br />
                <center>
                  <Button
                    variant="outlined"
                    className="text_button"
                    style={{
                      backgroundColor: "#17252a",
                      color: "#FEFFFF",
                      width: "60%",
                    }}
                    href="/write"
                  >
                    WRITE PAPER
                  </Button>
                </center>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PublishPaper;
