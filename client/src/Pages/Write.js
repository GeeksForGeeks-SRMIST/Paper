import React, { useState } from "react";
import { Grid, Box, Button, TextField } from "@material-ui/core";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import firebase, { storage } from "../config/fire";
import { jsPDF } from "jspdf";
import "./css/Write.css";

const Write = () => {
  const [editorState, setData] = useState(EditorState.createEmpty());
  const [htmlData, setHtmlData] = useState("");

  const [path, updatePath] = useState("");
  const [fileState, setFileState] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  const toPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");

    doc.html(document.querySelector(".public-DraftEditor-content"), {
      callback: function (pdf) {
        pdfSaveHandler(pdf.save("abc.pdf"));
        console.log("PDF UPLOADED");
      },
    });
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          <Box className="right_grid_publish">
            <center>
              <div className="card_chip title_card">WRITE PAPER</div>
            </center>
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
            <Editor
              onEditorStateChange={(e) => {
                setData(e);
                setHtmlData(
                  draftToHtml(convertToRaw(editorState.getCurrentContent()))
                );
              }}
            />
            <center>
              <Button
                variant="outlined"
                className="text_button"
                style={{
                  backgroundColor: "#17252a",
                  color: "#FEFFFF",
                  width: "60%",
                }}
                onClick={toPDF}
              >
                UPLOAD PAPER
              </Button>
            </center>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Write;
