import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { white } from '@mui/material/colors';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <ShoppingCartIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          upGrad E-Shop
        </Typography>

        <Link component={RouterLink} to="/login/" color={"inherit"} padding={1}>Login</Link>
        <Link component={RouterLink} to="/signup/" color={"inherit"} padding={1}>Sign up</Link>

      </Toolbar>
    </AppBar>
  );
};

export default Header;