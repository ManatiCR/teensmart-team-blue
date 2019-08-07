import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, Grid} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    maxHeight: 200,
    margin: '0 5%',
  },
  media: {
    minHeight: 140,
    width: 'auto',
  },
});

const Award = ( { award } ) =>{
  const classes = useStyles();
   
  const { field_awards_images } = award;

  return (
    <Grid item xs={12} sm={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={field_awards_images[0].url}
          title={field_awards_images[0].title}
        />
      </Card>
    </Grid>
  );
}

export default Award; 