import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Grid, Link, Breadcrumbs, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ({
  twitter: {
    color: '#0683ff',
  },
  mail: {
    color: '#808040',
  },
  icon: {
    marginTop: 15,
  },
  font: {
    fontFamily: 'Arial',
  }
});

const HeaderIcons = () => {
  const classes = useStyles();

  return (
    <Grid container item sm={6} spacing={2} justify="flex-end">
      <Grid item sm={1} className={classes.icon}>
        <Link href='https://www.facebook.com/TeenSmart/' target='_blank'>
          <FaFacebookF /> 
        </Link>
      </Grid>    
      <Grid item sm={1} className={classes.icon}>
        <Link href='https://twitter.com/TeenSmartInt' className={classes.twitter} target='_blank'>
          <FaTwitter />  
        </Link>
      </Grid> 
      <Grid item sm={1} className={classes.icon}>
        <Link href='https://www.youtube.com/channel/UCGDhV-Ia0L-Q5ue7M2LxEgQ' target='_blank' color='secondary'>
          <FaYoutube />
        </Link>
      </Grid> 
      <Grid item sm={1} className={classes.icon}>
        <Link href='mailto:info@teensmart.net' className={classes.mail}>
          <IoIosMail />
        </Link>
      </Grid> 
      <Grid item className={classes.icon}>
        <Paper elevation={0}>
          <Breadcrumbs aria-label="Breadcrumb" separator="/">
            <Link color="inherit" href="/" >
              <Typography>
                  English
              </Typography>
            </Link>
            <Link color="inherit" href="/">
              <Typography>
                Spanish
              </Typography>
            </Link>
          </Breadcrumbs>
        </Paper>
      </Grid>
    </Grid> 
  )
};
 
export default HeaderIcons;