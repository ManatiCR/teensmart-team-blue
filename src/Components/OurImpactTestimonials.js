import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import Testimonial from './Testimonial';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Divider from './Divider';


const useStyles = makeStyles ({
  testimonials: {
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
    fontSize: '22px',
    fontWeight: 700,
  },
});

const Testimonials = () => {
  const classes = useStyles();
  
  //hooks
  const [testimonies, setTestimonies] = useState(null);

  useEffect(() => {
    async function fetchTestimonies(){
      await axios('http://dev-teensmart-team-blue.pantheonsite.io/api/our-impact', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => setTestimonies(response.data)).catch(e => alert(e));
    }
    fetchTestimonies();
    console.log(testimonies)
  }, []);

  const renderTestimonies = () => (
    testimonies && testimonies.map(testimony => <Testimonial testimony={testimony} 
                                                  footer='14 years old' /> )
  );
  
  return (
    <Grid container item xs={12} sm={5} justify='center' className={classes.testimonials}>
      <Grid item xs={12}>
        <h1 className={classes.title}>What they say about us?</h1>
      </Grid>
      <Divider bottom={3}/>
      {renderTestimonies()}
    </Grid>
  );
}

export default Testimonials 
