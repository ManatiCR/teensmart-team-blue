import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  testimonial: {
    color: '#333',
    fontSize: '1em',
    textAlign: 'left',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
  },
  footer: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 4
  },
});

const Testimonial = ( { testimony }) => {
  const classes = useStyles();
  
  const { field_our_impact_information, field_age } = testimony;
  
  return (
    <Grid item xs={12} >
      <p className={classes.testimonial}> { field_our_impact_information[0].value } </p>
      <p className={classes.footer}> { field_age[0].value } </p>  
    </Grid>
  );
};

export default Testimonial;