import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


import image1 from './img/lawn-mower-2430725_1920.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
              <img className={classes.img} alt="complex" src={image1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                     <div> Fencing</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <li>We can construct fences in traditional feather edge style or fabricate fences in more contemporary forms.</li>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                     <div> Patios</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <li>Using natural stone or pre-formed concrete.</li>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                     <div> Ponds</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <li>Water features can add further interest in the garden and be great for wildlife.</li>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                     <div> Soft Landscaping</div>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <li>Variety of different “soft” practices: turfing, meadow creation, planting of schemes, specimen and hedge. (domestic and commercial)</li>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">INSTALL</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}