import React from "react";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const CustomSnackbar = ({ message, open, onClose }) => {
  const CustomSnackbarContent = styled(SnackbarContent)(() => ({
    "&": {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      alignItems: "center"
    }
  }));

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <CustomSnackbarContent
        message={message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
            sx={{ mr: 1 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
