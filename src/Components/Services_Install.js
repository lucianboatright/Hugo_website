import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from 'react-router-dom'

import image1 from './img/lawn-mower-2430725_1920.jpg'
import image2 from './img/shalegarden06.jpg'
import image3 from './img/grass-220465_1280.jpg'
import image4 from './img/lawn-mower-2430725_1920.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },
  image: {
    width: 128,
    height: 128,

  },
  img: {
    // marginTop: '300px',
    position: 'relative',
    top: '120px',
   padding: '5px',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  grid_img: {
    direction: 'column',
    justify: 'flex-start',
    alignItems: 'center',
  },
  contact_link: {
    textDecoration: 'none',
  },
  subtitle1: {

  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
                <div className={classes.grid_img}>
                    <img className={classes.img} alt="complex" src={image1} />
        
                    <img className={classes.img} alt="complex" src={image3} />
        
                    <img className={classes.img} alt="complex" src={image2} />
              </div>
            </ButtonBase>
            {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image1} />
            </ButtonBase> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128))'}}>
                     <div style={{color:'rgb(77, 136, 128)'}}> Fencing</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div style={{color:'rgb(77, 136, 128)'}}>We can construct fences in traditional feather edge style or fabricate fences in more contemporary forms.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128))'}}>
                     <div style={{color:'rgb(77, 136, 128)'}}> Patios</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <div style={{color:'rgb(77, 136, 128)'}}>Using natural stone or pre-formed concrete.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128)'}}>
                     <div style={{color:'rgb(77, 136, 128)'}} > Ponds</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div style={{color:'rgb(77, 136, 128)'}} > Water features can add further interest in the garden and be great for wildlife.</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128)'}}>
                    <div style={{color:'rgb(77, 136, 128)'}}>Soft Landscaping</div> 
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <div style={{color:'rgb(77, 136, 128)'}}>Variety of different “soft” practices: turfing, meadow creation, planting of schemes, specimen and hedge. (domestic and commercial)</div>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <Link className={classes.contact_link} to="/Contact" > <div style={{textDecoration: 'none'}}>Contacts</div></Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{color: 'rgb(223, 116, 87)'}} > <h2>INSTALL</h2></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}