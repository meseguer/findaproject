// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { withTheme } from '@material-ui/core/styles';
// import Link from 'next/link';
// import styled from 'styled-components';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import breakpoint from 'styled-components-breakpoint';

// // eslint-disable-next-line react/prop-types
// function Form({ theme }) {
//   // Styled components
//   const HeroUnit = styled.div`
//     background-color: ${theme.palette.background.paper};
//   `;

//   const HeroContent = styled.div`
//     max-width: 600px;
//     margin: 0 auto;
//     padding: ${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px;
//   `;

//   const HeroButtons = styled.div`
//     margin-top: ${theme.spacing.unit * 4}px;
//   `;
//   const Layout = styled.div`
//     width: auto;
//     margin-left: ${theme.spacing.unit * 3}px;
//     margin-right: ${theme.spacing.unit * 3}px;
//     ${breakpoint('desktop')`
//       width: 1100px;
//       margin-left: auto;
//       margin-right: auto
//     `}
//   `;
//   const FormContainer = styled.form`
//     display: 'flex';
//     flex-wrap: 'wrap';
//   `;

//   const StyledTextField = styled(TextField)`
//     margin-left: ${theme.spacing.unit};
//     margin-right: ${theme.spacing.unit};
//     width: 200px;
//   `;
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main>
//         <HeroUnit>
//           <HeroContent>
//             <Typography
//               component="h1"
//               variant="h2"
//               align="left"
//               color="textPrimary"
//               gutterBottom
//             >
//               Create your event in less than 5 minutes
//             </Typography>
//             <Typography
//               variant="h6"
//               align="left"
//               color="textSecondary"
//               paragraph
//             >
//               We've made it effortless for users to create, browse and join
//               teams for your jam. Our aim is to get more participants, in more
//               teams, building better entries for your event! Lets get started
//               building your jam page for crowdforge.
//             </Typography>
//             <HeroButtons>
//               <Grid container spacing={16} justify="center">
//                 <Grid item>
//                   <Link href="/about">
//                     <Button variant="contained" color="primary">
//                       Get started
//                     </Button>
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="outlined" color="primary">
//                     Find events
//                   </Button>
//                 </Grid>
//               </Grid>
//             </HeroButtons>
//           </HeroContent>
//         </HeroUnit>
//         <Layout>
//           <FormContainer noValidate autoComplete="off">
//             <StyledTextField
//               id="standard-name"
//               label="Name"
//               // value={this.state.name}
//               // onChange={this.handleChange("name")}
//               margin="normal"
//             />
//           </FormContainer>
//         </Layout>
//       </main>
//     </React.Fragment>
//   );
// }
// export default withTheme()(Form);
