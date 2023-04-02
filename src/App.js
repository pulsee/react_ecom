import * as React from "react";
import { indigo } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import {
  Outlet,
  redirect,
  useLoaderData,
  useRouteError,
} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
  },
});

export default function App() {
  React.useEffect(() => {});

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />

      <Footer />
    </ThemeProvider>
  );
}
