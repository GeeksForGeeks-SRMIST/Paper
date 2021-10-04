import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

import ModalDialog from "./Modal";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#DEF2F1",
    color: "#17252A",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    boxShadow: "none",
  },
  title: {
    flexGrow: 2,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Research
        </Typography>
        <Button color="inherit" onClick={handleOpen}>
          Register
        </Button>
        <Button color="inherit" onClick={handleOpen}>
          Login
        </Button>
      </Toolbar>
      <ModalDialog open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Navbar;
