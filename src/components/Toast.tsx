import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useToast } from "~/hooks/store";

function Toast() {
  const { open, severity, message, autoHideDuration, closeToast } = useToast();

  const handleClose = () => {
    closeToast();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert variant="filled" severity={severity}>
        {message ? message : "알 수 없는 오류가 발생했습니다."}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
