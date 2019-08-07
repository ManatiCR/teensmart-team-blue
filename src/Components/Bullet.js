import React from 'react';
import { Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    maxWidth: 200,
    height: 140,
    margin: '0 4px',
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: '1em',
  },
});


const Bullet = ({ bullet }) => {
  const classes = useStyles();

  const { info, field_schools_logos } = bullet;
  
  return ( 
    <Grid item xs={6} sm={2}>
      <Avatar alt={field_schools_logos[0].alt} src={field_schools_logos[0].url} className={classes.avatar} />
      <Box component='p' className={classes.title}>
        {info[0].value}
      </Box>
    </Grid>
  );
}
export default Bullet;