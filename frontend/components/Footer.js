import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import breakpoint from "styled-components-breakpoint";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});
const StyledFooter = styled.footer`
  margin-top: ${theme.spacing.unit * 8}px;
  border-top: 1px solid ${theme.palette.divider};
  padding: ${theme.spacing.unit * 6}px 0;
  /* Layout */
  width: auto;
  margin-left: ${theme.spacing.unit * 3}px;
  margin-right: ${theme.spacing.unit * 3}px;
  ${breakpoint("desktop")`
    width: 900px;
    margin: 0 auto;
  `}
`;

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];

const Nav = () => (
  <StyledFooter>
    <Grid container spacing={32} justify="space-evenly">
      {footers.map(footer => (
        <Grid item xs key={footer.title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer.title}
          </Typography>
          {footer.description.map(item => (
            <Typography key={item} variant="subtitle1" color="textSecondary">
              {item}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  </StyledFooter>
);

export default Nav;
