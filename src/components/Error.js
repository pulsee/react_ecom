import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

const Error = (props) => {
  //const errorResponse = useRouteError();
  const errorObj = props;
  const [open, setOpen] = useState(true);

  //   useEffect(() => {
  //     if (!open) {
  //       setOpen(true);
  //     }
  //   });

  return (
    <Snackbar
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {errorObj.message}
      </Alert>
    </Snackbar>
  );
};

export default Error;
