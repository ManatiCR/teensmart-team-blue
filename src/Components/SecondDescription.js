import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';  
import '../index.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    background: 'transparent',
    border: '1px solid #333',
    marginTop: '35px',
  },
  title: {
    background: '#6f61a8',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    color: '#fff',
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
  },
  title2: {
    background: '#bfeb5c',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    color: '#fff',
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
  },
  title3: {
    background: '#fe7173',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    color: '#fff',
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
  },
  description: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    color: '#333',
    textAlign: 'left',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
  },
  link: {
    textDecoration: 'underline',
    color: '#336384',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
    fontWeight: 700,
  },
  link2: {
    textDecoration: 'underline',
    color: '#336384',
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    fontWeight: 700, 
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: '316px',
    maxWidth: '683px',
  },
}));

const SecondDescription = () => {
  const classes = useStyles();

  return (
    <div className="second-description">
      <div className={classes.root}>
        <Grid container spacing={0} justify="space-around">
          <Grid item xs={12} sm={12} md={3} className={classes.background}>
            <div className={classes.title}>What we do?</div>
            <div className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor.</div>    
            <div className={classes.link2}>Check our work >></div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} className={classes.background}>
            <div className={classes.title2}>Why we do it?</div>
            <div className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor.</div>    
          </Grid>
          <Grid item xs={12} sm={12} md={3} className={classes.background}>
            <div className={classes.title3}>What lives do we impact?</div>
            <div className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor.</div>  
            <div className={classes.description}>If you know someone that fit's this profile, 
            <span className={classes.link}>Let them know about JovenSalud.net >></span></div>  
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SecondDescription;