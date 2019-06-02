import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import breakpoint from 'styled-components-breakpoint';
import { CardContent } from '@material-ui/core';

// eslint-disable-next-line react/prop-types
function List({ theme, projects }) {
  // Styled components
  const Layout = styled.div`
    text-align: center;
    width: auto;
    margin-left: ${theme.spacing.unit * 3}px;
    margin-right: ${theme.spacing.unit * 3}px;
    padding: ${theme.spacing.unit * 8}px 0px;
    ${breakpoint('desktop')`
        width: 1100px;
        margin-left: auto;
        margin-right: auto
      `}
  `;
  const StyledCard = styled(Card)`
    height: 100%;
    display: flex;
    flex-direction: column;
  `;
  const StyledCardMedia = styled(CardMedia)`
    padding-top: 56.25%;
  `;
  const StyledCardContent = styled(CardContent)`
    max-width: 600px;
    margin: 0 auto;
    padding: ${theme.spacing.unit * 8}px 0px ${theme.spacing.unit * 6}px;
  `;
  return (
    <Layout>
      <Grid container spacing={40}>
        {projects.map(project => (
          <Grid item key={project} sm={6} md={4} lg={3}>
            <StyledCard>
              <StyledCardMedia
                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                title="Image title"
              />
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </StyledCardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
export default withTheme()(List);
