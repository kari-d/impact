import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import toast, { Toaster } from 'react-hot-toast';
import TreeMap from './TreeMap';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }, icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 11
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  divHeading: {
    color: '#e57373'
  },
  subHeading: {
    color: '#115293',
    fontWeight: '600'
  },
  desc: {
    color: '#7A8C98'
  },
}));


const mainFeaturedPost = {
  title: 'Trees for Future',
  description: "The best time to plant a tree was 20years ago. The second best time is now !! The future starts today with your work!",
  // image: 'https://thumbs.dreamstime.com/b/fitness-background-equipment-gym-home-jump-rope-dumbbells-expander-water-pastel-pink-top-view-107457920.jpg',
  image: 'https://im.indiatimes.in/media/content/2019/Aug/planting_more_trees_1566553311.jpg',
//   image:beefitImage,
  imgText: 'main image description',
  linkText: 'Continue reading…'
};


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Artists() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    notifyWelcome();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifyWelcome = () => {
    toast.success("BeeFit welcomes you !");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <header className="App-header">
        <Container maxWidth="lg">
          <Header title="Lord's Eye" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Container className={classes.cardGrid} maxWidth="lg">
              <Typography variant="h5" className={classes.divHeading}>
                <b>Trees Planted near you!</b>
              </Typography>
              <br />
              <Grid container spacing={4}>
                {featuredPosts.map((card) => (
                  <Grid item key={card.title} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" className={classes.subHeading}>
                          {card.title}
                        </Typography>
                        <Typography align="center" variant="body1" className={classes.desc} gutterBottom>
                          {card.description}
                        </Typography>
                        <CardActions>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                            onClick={() => { localStorage.setItem("f_title", card.title); localStorage.setItem("f_readmore", card.readmore); localStorage.setItem("f_image", card.image); handleClickOpen(); 
                            // speak({ text: card.readmore,rate : 0.8})
                         }}
                          >
                            View More
                      </Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <br />
              <br />
              <Typography variant="h5" className={classes.divHeading}>
                <b>Plant More Trees</b>
              </Typography>
              <Typography variant="body1" className={classes.desc}>
                Featuring citizens participating in the Tree Plantation Challenge!
            </Typography>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="lg"
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">{localStorage.getItem("f_title")}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <center><img alt="fitness tip" src={localStorage.getItem("f_image")} /></center>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
            </Container>
          </main>
        </Container>
      </header>
    </React.Fragment>
  );
}

const featuredPosts = [
    {
      title: 'Mumbai - Andheri Road near Sardar Patel',
      description:
        '2 minutes - 15 trees',
      image: 'https://www.staford.in/web/wp-content/uploads/2019/09/zz-plantation-activity.jpg',
      imageText: 'Arm Circles',
      readmore: "While sitting down, stretch your arms out at your sides and press your shoulder blades together. With your palms facing down, circle your arms forwards around 20 times. Then, face your palms upwards and circle your arms backwards around 20 times. After this, circle your wrists 20 times in each direction."
    },
    {
      title: 'Mumbai Bandra - Thadomal College',
      description:
        '30 seconds - 10 trees',
      image: 'https://lh3.googleusercontent.com/proxy/0XQOxXQTV5WzUQD8Mw8QJGkU3QcpwqHWluSJyOH8rSB475Utx8codqG0GNEbR7Yn7IgdTV9g959wRda1I0tumYGdM5msF7YrByH1BaCuOwL9ARXan_cYc-vbopIr1RINwsrAmmPdSWj1fhsVmOPlQuMD7sA',
      imageText: 'Chest Stretch',
      readmore: "Stand up and hold your hands together behind your back, expanding your chest. Pull your shoulder blades as close together as possible and hold the pose for 30 seconds."
    },
    {
      title: 'Banglore - IBM Streets',
      description:
        '10 minutes - 70 trees',
      image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/07/26/709522-tree-plantation-drive.jpg',
      imageText: 'Leg Raises',
      readmore: "Under your desk, raise both legs at once upwards, and slowly lower them down. Repeat few times."
    },
  
    {
      title: 'Hyderabad - Biryani road',
      description:
        '10 minutes - 80 trees',
      image: 'https://5.imimg.com/data5/OT/PX/GLADMIN-23762342/toi-mega-tree-plantation-drive-500x500.jpg',
      imageText: 'Arm Curls',
      readmore: "Holding a water bottle, or an object of a similar weight, let your arms fall straight by your side and then slowly bend them upwards. Repeat this action multiple times on both arms."
    },
  
    {
      title: 'Pune - near IT Park',
      description:
        '30 seconds - 10 trees',
      image: 'https://www.eventfaqs.com/Uploads2018/00Uploads2019/August/22Aug/Tree%20Plantation%20Drive%201.jpg',
      imageText: 'Torso Twists',
      readmore: "Sitting at your desk, cover your left knee with your right hand and look over your left shoulder. Hold this pose for 30 seconds to stretch your back, remembering to breathe. Repeat the action on the opposite side."
    },
    {
      title: 'Delhi - Honda University',
      description:
        '1 minute - 20 trees',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSTQgfrzScpWmIgwA64XSZEOWfThS-C_K5aAUVVFgFVzkqNaw&s',
      imageText: 'Chair Squats',
      readmore: "Using a non-moving chair perch on the edge of the seat and slowly stand up with your arms by your sides. Lower yourself until you gently touch the chair and then stand back up, remembering to breathe. Repeat. For extra points, hover just over the chair for 30 seconds."
    },
  
  
  ];