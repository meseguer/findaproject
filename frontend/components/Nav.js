import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const NavBar = styled(AppBar)`
  position: "relative";
`;

const ToolbarTitle = styled(Typography)`
  flex: 1;
`;

const Nav = () => (
  <NavBar color="default" position="relative">
    <Toolbar>
      <ToolbarTitle variant="h6" color="inherit" noWrap>
        Company name
      </ToolbarTitle>
      <Button>Features</Button>
      <Button>Enterprise</Button>
      <Button>Support</Button>
      <Button color="primary" variant="outlined">
        Login
      </Button>
    </Toolbar>
  </NavBar>
);

export default Nav;
