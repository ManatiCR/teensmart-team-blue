import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';  
import axios from 'axios';
import '../index.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    background: '#d6ddcc',
  },
  title: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    color: '#333',
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
  },
  description: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(1),
    color: '#333',
    textAlign: 'left',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
  },
  link: {
    textDecoration: 'underline',
    color: '#336384',
    paddingLeft: theme.spacing(1),
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
    fontWeight: 700,
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: '316px',
    maxWidth: '683px',
  },
}))

const FirstDescription = () => {
  const classes = useStyles();

  //hooks
  const [heroBanner, setHeroBanner] = useState(null);

  useEffect(() => {
    async function fetchHeroBanner(){
      await axios('http://fellowship.local/api/hero-banner', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => setHeroBanner(response.data)).catch(e => alert(e));
    }
    fetchHeroBanner();
  }, []);

  console.log(heroBanner)
  return (
    <div>
      <div className='first-description'>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} className={classes.background} >
              <div className={classes.title}>
                
              </div>
              <div className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
              parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
              pretium quis, sem. Nulla consequat.<span className={classes.link}>Meet the staff >></span></div>    
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img className={classes.image} src={require('../assets/teenagers.jpg')} alt='Group of Teenagers'></img>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default FirstDescription;