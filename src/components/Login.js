import Container from "@mui/material/Container";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";

const Login = () => {
  const theme = useTheme();
  console.log(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: `calc(100vh - ${theme.mixins.toolbar.minHeight * 3}px)` }}
    >
      <LockIcon sx={{ fontSize: "3rem", color: pink[500] }} />

      <Typography variant="h6">Sign in</Typography>
      <Grid container direction="row" xs={3} justifyContent="center">
        <TextField
          fullWidth
          id="email"
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
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
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
        >
          SIGN IN
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(formData);
  //await updateContact(params.contactId, updates);
  //return redirect(`/contacts/${params.contactId}`);
}
