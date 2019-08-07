import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import teenSmartLogo from '../assets/logoweb2.png';
import jovenSaludLogo from '../assets/logoweb.png';

const useStyles = makeStyles({
  media: {
    maxWidth: '80%',
    maxHeight: 50,
    paddingLeft: '15px',
    minWidth: 100,
  },
});

const HeaderCard = ({logo,title}) => {
  const classes=useStyles();

  return ( 
    <Grid item xs={6} className={classes.media}>
        <Box component="img" 
          className={classes.media}
          src={logo === 'teenSmartLogo' ? teenSmartLogo : jovenSaludLogo}
          title={title}
          alt={title}>
      </Box>
    </Grid>
  );
};
 
export default HeaderCard;