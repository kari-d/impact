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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import toast, { Toaster } from 'react-hot-toast';
import FilterAltIcon from '@material-ui/icons/FilterList';
import CategoryFilter from './CategoryFilter';
import Popover from '@material-ui/core/Popover';

import one from '../../Resources/Images/1.jpg'
import two from '../../Resources/Images/2.jpg'
import three from '../../Resources/Images/3.jpg'
import four from '../../Resources/Images/4.jpg'
import five from '../../Resources/Images/5.jpg'
import six from '../../Resources/Images/6.jpg'


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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function ArtTiles() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Only on first render
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
    toast.success("NEAXT welcomes you !");
  };

  const openFilter = (event) => {
    setAnchorEl(event.currentTarget);

  }

  const closeFilter = () => {
    setAnchorEl(null)
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Typography variant="h5" className={classes.divHeading}>
          <b>Hall of Frames!</b>
        </Typography>
        <div style={{ float: 'right' }}>
          <FilterAltIcon onClick={openFilter} />
          <Popover
            id={Boolean(anchorEl) ? 'simple-popover' : undefined}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={closeFilter}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <CategoryFilter/>
          </Popover>
        </div>
        <Grid container spacing={4}>
          {featuredPosts.map((card) => (
            <Grid item key={card.title} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.title}
                  style={{filter: 'blur(2px)'}}
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
                      onClick={() => {
                        localStorage.setItem("f_title", card.title); localStorage.setItem("f_readmore", card.readmore); localStorage.setItem("f_image", card.image); handleClickOpen();
                        // speak({ text: card.readmore,rate : 0.8})
                      }}
                    >
                      Take me to the House
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
          <b>Digitally Enabling Artists</b>
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          Personalised Recommendation for the Art Admire & Collector base
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

              {/* {localStorage.getItem("f_readmore")}
                    <br /> <br /> */}
              <center><img alt="fitness tip" src={localStorage.getItem("f_image")} /></center>

            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </React.Fragment>


  );
}

const featuredPosts = [
  {
    title: 'Salutary Failures, Kunsthalle Basel, 2020',
    description:
      'Zurich Art Gallery',
    image: one,
    imageText: 'Artists name',
    readmore: "While sitting down, stretch your arms out at your sides and press your shoulder blades together. With your palms facing down, circle your arms forwards around 20 times. Then, face your palms upwards and circle your arms backwards around 20 times. After this, circle your wrists 20 times in each direction."
  },
  {
    title: 'Salutary Failures, Kunsthalle Basel, 2020',
    description:
    'Culture Art Gallery',
    image: two,
    imageText: 'Artists name',
    readmore: "Stand up and hold your hands together behind your back, expanding your chest. Pull your shoulder blades as close together as possible and hold the pose for 30 seconds."
  },
  {
    title: 'Sculpture Projects Ping Yao, 2018',
    description:
    'Hayward Art Gallery',
    image: three,
    imageText: 'Artists name',
    readmore: "Under your desk, raise both legs at once upwards, and slowly lower them down. Repeat few times."
  },

  {
    title: 'Visual Communication',
    description:
    'The National Gallery',
    image: four,
    imageText: 'Artists name',
    readmore: "Holding a water bottle, or an object of a similar weight, let your arms fall straight by your side and then slowly bend them upwards. Repeat this action multiple times on both arms."
  },

  {
    title: 'Japanese Waves',
    description:
    'Tate Britain',
    image: five,
    imageText: 'Artists name',
    readmore: "Sitting at your desk, cover your left knee with your right hand and look over your left shoulder. Hold this pose for 30 seconds to stretch your back, remembering to breathe. Repeat the action on the opposite side."
  },
  {
    title: 'Art for Home',
    description:
    'Tate Modern',
    image: six,
    imageText: 'Artists name',
    readmore: "Using a non-moving chair perch on the edge of the seat and slowly stand up with your arms by your sides. Lower yourself until you gently touch the chair and then stand back up, remembering to breathe. Repeat. For extra points, hover just over the chair for 30 seconds."
  },


];