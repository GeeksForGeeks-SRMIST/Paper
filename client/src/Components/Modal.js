import React from "react";
import { Dialog, Typography } from "@material-ui/core";

const ModalDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Typography variant="h2">This is an H2.</Typography>
    </Dialog>
  );
};

export default ModalDialog;
