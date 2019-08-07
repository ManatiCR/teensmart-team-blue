import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
  },
  button2: {
    width: '90%',
  },
  news: {
    paddingTop: theme.spacing(3),
  },
  youtube: {
    paddingTop: theme.spacing(3),
  },
  padding: {
    marginTop: theme.spacing(24),
    justifyContent: 'center',
  },
}));

const NewsYouTube = () => {
  const classes = useStyles();
  return (
    <Box>
      <div className={classes.root}>
        <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1}></Grid>
          <Grid item xs={11} sm={11} md={4}>
            <div className={classes.padding}>
              <span className={classes.title}> News </span>
              <div className={classes.news}>
                <div id='post'>
                  <div className='fb-page' data-href='https://www.facebook.com/TeenSmart' data-tabs='timeline'
                    data-small-header='false' data-adapt-container-width='true' data-hide-cover='false'
                    data-show-facepile='true'>
                    <blockquote cite='https://www.facebook.com/TeenSmart' className='fb-xfbml-parse-ignore'>
                      <a href='https://www.facebook.com/TeenSmart'>TeenSmart Internacional</a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1}></Grid>
          <Grid item xs={11} sm={11} md={5}>
            <div className={classes.padding}>
              <span className={classes.title}> Our YouTube Channel </span>
              <div className={classes.youtube}>
                <div id='video'>
                  <iframe src='http://www.youtube.com/embed/dM76uMCRPmw' title='youtube' frameBorder='0'
                    allowFullScreen='allowfullscreen'>
                  </iframe>
                </div>
                <div className={classes.button2}>
                  <a href='https://www.youtube.com/channel/UCGDhV-Ia0L-Q5ue7M2LxEgQ' target='_blank'>
                    <button className='button-youtube'>Go to our channel></button>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={0} sm={0} md={1}></Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default NewsYouTube;