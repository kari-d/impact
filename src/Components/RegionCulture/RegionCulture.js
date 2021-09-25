import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import RegionTiles from './RegionTiles';


export default function RegionCulture() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Artwork Market Place" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <RegionTiles/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Region & Culture (Podcast & Quick Shorts)',
  description:
    "Learn & Know more about what's happening in the world of art across the globe via Podcast & Quick Shorts",
  image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/SV_timelapse.gif',
  imgText: 'Employee Profile',
  linkText: 'Continue reading…',
};

