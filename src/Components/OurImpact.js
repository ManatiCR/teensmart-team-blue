import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OurImpactMap from './OurImpactMap';
import OurImpactTestimonials from './OurImpactTestimonials'
import Divider from './Divider';
import Testimonial from './Testimonial';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    fontWeight: 700,
    fontSize: '25px',
  },
  padding: {
    paddingTop: '40px',
  }
});

const OurImpact = () => {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', padding: '24px', maxWidth: '1250px', width: '100%', margin: '0 auto' }}>
      <div style={{ flexGrow: 1 }} className={classes.padding}>
        <Grid container>
          <Grid item xs={12}>
            <h1 className={classes.title}>
              Our Impact
            </h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Divider bottom={2} />
            <OurImpactMap />
          </Grid>
          <OurImpactTestimonials />
        </Grid>
      </div>
    </div>
  );
}


export default OurImpact; 