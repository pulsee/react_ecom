import Container from "@mui/material/Container";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import {
  Form,
  Outlet,
  useFetcher,
  useRouteError,
  useActionData,
} from "react-router-dom";
import Error from "./Error";

const Signup = () => {
  const theme = useTheme();
  //console.log(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const fetcher = useFetcher();
  const errors = useActionData();
  //useState(errors);
  console.log(errors);

  useEffect(() => {
    console.log("useEffectSignup");
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: `calc(100vh - ${theme.mixins.toolbar.minHeight * 3}px)` }}
      >
        <LockIcon sx={{ fontSize: "3rem", color: pink[500] }} />

        <Typography variant="h6">Sign up</Typography>

        <Grid container direction="row" xs={3} justifyContent="center">
          <Form method="post">
            <TextField
              fullWidth
              id="first_name"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              id="last_name"
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={handleEmailChange}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              id="confirm_password"
              //name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              id="contact_number"
              name="contactNumber"
              label="Contact Number"
              value={contactNumber}
              onChange={handleContactNumberChange}
              margin="normal"
              variant="outlined"
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: "3%", mb: "3%" }}
              onClick={() => {
                alert("clicked");
              }}
            >
              SIGN UP
            </Button>
          </Form>
        </Grid>
        {console.log(errors?.message)}
      </Grid>
      {errors?.message && <Error error={errors.message} />}
    </>
  );
};

export default Signup;

export async function action({ request, params }) {
  const errors = {};
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);

  let response = await fetch("http://localhost:8080/api/auth/signup/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  let data = await response.json();
  console.log("Success:", data);
  if (data.error) {
    errors.message = data.error;
    return errors;
  }

  return null;
}
