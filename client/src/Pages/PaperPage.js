import React, { useEffect, useState } from "react";
import { Grid, Box, Button } from "@material-ui/core";
import Sidebar from "../Components/Sidebar/Sidebar";
import axios from "axios";
import "./css/PaperPage.css";

const PaperPage = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getPaper = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/paper/getPaper/${props.match.params.paper}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPaper();
  }, []);

  let classN = "";

  if (data.subject == "Maths") {
    classN = "green";
  } else if (data.subject == "Physics") {
    classN = "blue";
  } else if (data.subject == "Computer Science") {
    classN = "gold";
  } else if (data.subject == "Biology") {
    classN = "pink";
  } else {
    classN = "pink";
  }

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          {/* Right hand side grid */}
          <div className={`banner_image ${classN}`}></div>
          <Box className="right_grid_publish">
            <Grid container spacing={0}>
              <Grid item xs={8} lg={8} className="content_grid">
                <p className="paper_title">{data.title}</p>
                <div className="subject_pill">{data.subject}</div>
                <p className="paper_des">{data.description}</p>
                <center>
                  <Button
                    variant="outlined"
                    className="text_button"
                    style={{
                      backgroundColor: "#17252a",
                      color: "#FEFFFF",
                      width: "60%",
                    }}
                    href={data.pdf_url}
                    target="_blank"
                  >
                    DOWNLOAD PAPER
                  </Button>
                </center>
              </Grid>
              <Grid item xs={4} lg={4}>
                <iframe
                  className="document"
                  src={`${data.pdf_url}` + `#toolbar=0`}
                  width="100%"
                  height="470vh"
                  name={data.title}
                ></iframe>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaperPage;
