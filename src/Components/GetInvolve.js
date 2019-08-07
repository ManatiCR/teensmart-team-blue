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
    marginTop: '15px',
  },
  title: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
  },
  descriptionWithoutBorder: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(1),
    textAlign: 'left',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
  },
  description: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(1),
    textAlign: 'left',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    borderLeft: '1px solid #333',
  },
  volunteer: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    fontWeight: 700, 
    color: '#fff',
    background: '#ec194b',
    borderRadius: '5px',
    borderColor: '#ec194b',
  },
  donate: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    fontWeight: 700, 
    color: '#fff',
    background: '#fe980e',
    borderRadius: '5px',
    borderColor: '#fe980e',
  },
  sponsor: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    fontWeight: 700, 
    color: '#fff',
    background: '#5dbe2a',
    borderRadius: '5px',
    borderColor: '#5dbe2a',
  },
  support: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    fontWeight: 700, 
    color: '#fff',
    background: '#007baf',
    borderRadius: '5px',
    borderColor: '#007baf',
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: '316px',
    maxWidth: '683px',
  },
}));

const GetInvolved = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="second-description">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12} className={classes.background} >
                <div className={classes.title}>How can you get involved?</div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} className={classes.background}  className={classes.borderLeft}>
              <div className={classes.descriptionWithoutBorder}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat.</div>
              <button type="submit" className={classes.volunteer}>Volunteer ></button>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.background} >
              <div className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat.</div>
              <button type="submit" className={classes.donate}>Donate ></button>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.background} >
              <div className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat.</div>
              <button type="submit" className={classes.sponsor}>Sponsor a school ></button>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className={classes.background} >
              <div type="submit" className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat.</div>
              <button type="submit" className={classes.support}>Support ></button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;