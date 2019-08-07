import React from 'react';
import MapPic from '../assets/map.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  map: {
    maxWidth: '100%',
    maxHeight: 300,
  },
});

const Map = () => {
  const classes = useStyles();

  return (
    <img src={MapPic} className={classes.map} alt='Map' />
  );
}
 
export default Map
