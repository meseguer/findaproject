/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import Nav from './../../components/Nav';
import ProjectList from './components/List';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroContent: {},
  heroButtons: {}
});

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      projects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  }

  render() {
    const { theme } = this.props;
    const { projects } = this.props;

    const HeroWrapper = styled.div`
      background-color: ${theme.palette.background.paper};
    `;

    const HeroContent = styled.div`
      max-width: 600px;
      margin: 0 auto;
      padding: ${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px;
    `;

    const HeroButtons = styled.div`
      margin-top: ${theme.spacing.unit * 4};
    `;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <HeroWrapper>
            <HeroContent>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Find a project to collaborate on
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                Find your next big project to work on. Sourced from all over the
                web, including reddit, discord, facebook and more!
              </Typography>
              <HeroButtons>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Link href="/about">
                      <Button variant="contained" color="primary">
                        Get started
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </HeroButtons>
            </HeroContent>
          </HeroWrapper>
          <ProjectList projects={projects} />
        </main>
      </React.Fragment>
    );
  }
}

export default withTheme()(Homepage);
