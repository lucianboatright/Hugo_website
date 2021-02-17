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
    textAlign: 'right',
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
    direction: "row-reverse", 
    justify: "center",
    alignItems: "center",
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
        <Grid  container spacing={2}>
          <Grid item>
          <Grid item>
              <Typography variant="subtitle1" style={{color:'rgb(213,117,86)'}} >MAINTAIN</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs >
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128))'}}>
                     <div> Lawn Mowing & Treatment</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <li>Regular visits during the growing season also seasonal treatments to keep your grass in good condition.</li>
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                     <div style={{color:'rgb(77, 136, 128))'}}> Hedge Trimming</div>
                </Typography>
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128))'}}>
                     <div> Planting</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <li>We are able to source plant required and suggest suitable schemes for your garden.</li>
                </Typography>
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128))'}}>
                     <div> Prunning</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <li>Seasonal rose, fruit tree and shrub cutting carried out at the right time, best for the plant.</li>
                </Typography>
                <Typography gutterBottom variant="subtitle1" style={{color:'rgb(77, 136, 128))'}}>
                     General Maintenance
                </Typography>
                <Typography variant="body2" gutterBottom>
                    We can come for regular scheduled visits during the year or one off. Depending on the time of year the tasks may be pruning, feeding and weeding or top dressing and general tidying.
                    We would be happy to discuss your specific garden needs individually.
                    Call or email Hugo to book an appointment .
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <Link className={classes.contact_link} to="/Contact" > Contacts</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
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
        </Grid>
      </Paper>
    </div>
  );
}