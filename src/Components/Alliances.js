import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    background: 'transparent',
    marginTop: '15px',
  },
  firstTitle: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
  },
  title: {
    position: 'relative',
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(17),
    textAlign: 'left',
    fontWeight: 700,
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
  },
  title2: {
    position: 'relative',
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(18),
    textAlign: 'left',
    fontWeight: 700,
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
  },
  description: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(1),
    textAlign: 'left',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
  },
  link: {
    textDecoration: 'underline',
    color: '#336384',
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    fontWeight: 700,
  },
  image: {
    paddingTop: theme.spacing(0),
    position: 'absolute',
    margin: 5,
    width: 70,
    height: 70,
    background: '#f48022',
  },
  image2: {
    paddingTop: theme.spacing(0),
    position: 'absolute',
    margin: 5,
    width: 70,
    height: 70,
    background: '#eb145d',
  },
  image3: {
    paddingTop: theme.spacing(0),
    position: 'absolute',
    margin: 5,
    width: 70,
    height: 70,
    background: '#6f2b8e',
  },
  image4: {
    paddingTop: theme.spacing(0),
    position: 'absolute',
    margin: 5,
    width: 70,
    height: 70,
    background: '#007baf',
  },
  padding: {
    paddingTop: theme.spacing(8),
  },
  padding2: {
    paddingLeft: theme.spacing(6),
  },
  margin: {
    marginBottom: theme.spacing(4),
  },
}));

const Alliances = () => {
  const classes = useStyles();

  return (
    <div>
      <div className='second-description'>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12} className={classes.background}>
              <div className={classes.firstTitle}>
                Alliances
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} className={classes.background}>
              <div className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat.</div>
              <span className={classes.link}>See all our allies></span>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.background} >
              <div className={classes.padding2}>
                <Avatar alt='Logo' src="" className={classes.image} />
              </div>
              <div className={classes.title}>
                Government Institutions
              </div>
              <div className={classes.padding}>
              </div>
              <div className={classes.padding2}>
                <Avatar alt='Logo' src="" className={classes.image2} />
              </div>
              <div className={classes.title2}>
                Government Institutions
              </div>
              <div className={classes.margin}>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.background} >
              <div className={classes.padding2}>
                <Avatar alt='Logo' src="" className={classes.image3} />
              </div>
              <div className={classes.title}>
                Government Institutions
              </div>
              <div className={classes.padding}>
              </div>
              <div className={classes.padding2}>
                <Avatar alt='Logo' src="" className={classes.image4} />
              </div>
              <div className={classes.title2}>
                Government Institutions
              </div>
              <div className={classes.margin}>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Alliances;