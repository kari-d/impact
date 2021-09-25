import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import ContestTiles from './ContestTiles';


export default function Contest() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Contest" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <ContestTiles/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Contest',
  description:
    "Calling all Artists across globe to showcase their talent & artwork on NEAXT all time on Global Contests & Challenges!",
  image: 'https://1.bp.blogspot.com/-jVsj5NqhEIU/Xqvorj7fkHI/AAAAAAAABV4/LIr122HzWxsU_n_s40e6_dsdY8U0OyVIQCLcBGAsYHQ/s1600/source.gif',
  imgText: 'Employee Profile',
  linkText: 'Continue reading…',
};

