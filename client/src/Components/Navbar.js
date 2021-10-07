import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import ModalDialog from "./Modal";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "transparent",
    color: "#17252A",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    boxShadow: "none",
  },
  title: {
    border: "solid 2px white",
    width: "fit-content",
    borderRadius: "10px",
    padding: "1vh 2vh",
    margin: "2vh 0 0 12vh",
    color: "white",
  },
  login: {
    margin: "0 0 0 71vw",
    paddingBottom: "0.2vh",
    fontSize: "18px",
    color: "white",
    borderBottom: "solid 2px white",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  let history = useHistory();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          PAPER
        </Typography>
        <Button
          color="inherit"
          className={classes.login}
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
